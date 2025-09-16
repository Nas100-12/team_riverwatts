'use client';

import { useEffect, useRef, useState } from 'react';
import { loadGoogleMaps } from '@/app/lib/google-maps';

interface Site {
  id: string;
  name: string;
  location: string;
  coordinates: { lat: number; lng: number };
  status: string;
}

interface GoogleMapProps {
  sites: Site[];
  selectedSite: string | null;
  onSiteSelect: (siteId: string | null) => void;
  mapType: string;
}

export default function GoogleMap({ sites, selectedSite, onSiteSelect, mapType }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const initAttempts = useRef(0);

  useEffect(() => {
    let mounted = true;

    const initializeMap = async () => {
      if (!mounted) return;
      
      initAttempts.current++;
      
      try {
        // Wait for component to mount
        if (!mapRef.current) {
          if (initAttempts.current < 10) {
            setTimeout(initializeMap, 200);
          }
          return;
        }

        await loadGoogleMaps();
        
        if (!mounted || !(window as any).google?.maps) {
          if (initAttempts.current < 10) {
            setTimeout(initializeMap, 500);
          }
          return;
        }

        const map = new (window as any).google.maps.Map(mapRef.current, {
          center: { lat: 6.3156, lng: -10.8074 },
          zoom: 8,
          mapTypeId: mapType === 'satellite' ? 'satellite' : 
                    mapType === 'terrain' ? 'terrain' : 'roadmap'
        });

        mapInstanceRef.current = map;

        // Clear existing markers
        markersRef.current.forEach(marker => marker.setMap(null));
        markersRef.current = [];

        // Add markers
        sites.forEach(site => {
          const marker = new (window as any).google.maps.Marker({
            position: site.coordinates,
            map: map,
            title: site.name,
            icon: {
              path: (window as any).google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: site.status === 'operational' ? '#10b981' : 
                        site.status === 'warning' ? '#f59e0b' : '#ef4444',
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2
            }
          });

          const infoWindow = new (window as any).google.maps.InfoWindow({
            content: `
              <div style="padding: 8px;">
                <h3 style="margin: 0 0 4px 0; font-weight: 600;">${site.name}</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">${site.location}</p>
                <div style="margin-top: 8px;">
                  <span style="display: inline-block; padding: 2px 8px; border-radius: 12px; font-size: 12px; background: ${
                    site.status === 'operational' ? '#dcfce7; color: #166534' :
                    site.status === 'warning' ? '#fef3c7; color: #92400e' :
                    '#fee2e2; color: #991b1b'
                  }">
                    ${site.status}
                  </span>
                </div>
              </div>
            `
          });

          marker.addListener('click', () => {
            onSiteSelect(selectedSite === site.id ? null : site.id);
            infoWindow.open(map, marker);
          });

          markersRef.current.push(marker);
        });

        if (mounted) {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Map initialization failed:', error);
        if (mounted && initAttempts.current < 5) {
          setTimeout(initializeMap, 1000);
        } else if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initializeMap();

    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [sites, mapType, selectedSite, onSiteSelect]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-50 rounded-xl">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-slate-600 text-sm">Loading map...</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-xl" />;
}