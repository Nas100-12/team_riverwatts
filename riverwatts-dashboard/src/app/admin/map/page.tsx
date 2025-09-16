'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { 
  MapPin, 
  Zap,
  Search,
  Filter,
  Layers,
  Maximize,
  Minimize,
  RefreshCw,
  Settings,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Activity,
  Thermometer,
  Droplets,
  Wind,
  Navigation,
  Satellite,
  Map as MapIcon,
  Eye,
  EyeOff
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function GeographicViewPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSite, setSelectedSite] = useState('site-alpha');
  const [mapView, setMapView] = useState('satellite'); // satellite, terrain, hybrid
  const [showLayers, setShowLayers] = useState({
    turbines: true,
    sites: true,
    weather: false,
    waterFlow: true,
    alerts: true
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!mapContainerRef.current) return;

    if (!isFullscreen) {
      if (mapContainerRef.current.requestFullscreen) {
        mapContainerRef.current.requestFullscreen();
      } else if ((mapContainerRef.current as any).webkitRequestFullscreen) {
        (mapContainerRef.current as any).webkitRequestFullscreen();
      } else if ((mapContainerRef.current as any).mozRequestFullScreen) {
        (mapContainerRef.current as any).mozRequestFullScreen();
      } else if ((mapContainerRef.current as any).msRequestFullscreen) {
        (mapContainerRef.current as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).mozCancelFullScreen) {
        (document as any).mozCancelFullScreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const initMap = () => {
      const liberia = { lat: 6.4281, lng: -9.4295 };
      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      const map = new (window as any).google.maps.Map(mapElement, {
        zoom: 7,
        center: liberia,
        mapTypeId: mapView === 'satellite' ? 'satellite' : mapView === 'terrain' ? 'terrain' : 'roadmap',
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
      });

      sites.forEach(site => {
        const markerColor = site.status === 'operational' ? 'green' : site.status === 'warning' ? 'yellow' : 'red';
        
        const marker = new (window as any).google.maps.Marker({
          position: { lat: site.coordinates.lat, lng: site.coordinates.lng },
          map: map,
          title: site.name,
          icon: `https://maps.google.com/mapfiles/ms/icons/${markerColor}-dot.png`
        });

        const infoWindow = new (window as any).google.maps.InfoWindow({
          content: `<div style="padding: 12px; min-width: 200px;"><h4 style="margin: 0 0 8px 0; color: #1e40af; font-size: 16px;">${site.name}</h4><div style="display: grid; gap: 4px;"><p style="margin: 0; color: #64748b; font-size: 13px;"><strong>Turbines:</strong> ${site.turbines}</p><p style="margin: 0; color: #64748b; font-size: 13px;"><strong>Status:</strong> <span style="color: ${site.status === 'operational' ? '#10b981' : site.status === 'warning' ? '#f59e0b' : '#ef4444'}">${site.status}</span></p><p style="margin: 0; color: #64748b; font-size: 13px;"><strong>Output:</strong> ${site.currentOutput} MW</p><p style="margin: 0; color: #64748b; font-size: 13px;"><strong>Location:</strong> ${site.location}</p></div></div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    import('@/app/lib/google-maps').then(({ loadGoogleMaps }) => {
      loadGoogleMaps().then(initMap).catch(console.error);
    });
  }, [mapView]);

  const sites = [
    {
      id: 'site-alpha',
      name: 'St. Paul River Station',
      location: 'Montserrado County',
      coordinates: { lat: 6.3156, lng: -10.8074 },
      turbines: 12,
      operational: 11,
      warning: 1,
      offline: 0,
      totalCapacity: 50.0,
      currentOutput: 42.3,
      efficiency: 89.2,
      waterTemp: 26.5,
      flowRate: 2.3,
      status: 'operational'
    },
    {
      id: 'site-beta',
      name: 'Farmington River Station',
      location: 'Margibi County',
      coordinates: { lat: 6.2167, lng: -10.3500 },
      turbines: 8,
      operational: 6,
      warning: 1,
      offline: 1,
      totalCapacity: 32.0,
      currentOutput: 24.1,
      efficiency: 82.7,
      waterTemp: 27.2,
      flowRate: 2.1,
      status: 'warning'
    },
    {
      id: 'site-gamma',
      name: 'Cavalla River Station',
      location: 'Maryland County',
      coordinates: { lat: 4.7400, lng: -7.7319 },
      turbines: 15,
      operational: 14,
      warning: 0,
      offline: 1,
      totalCapacity: 60.0,
      currentOutput: 52.8,
      efficiency: 91.5,
      waterTemp: 25.8,
      flowRate: 2.5,
      status: 'operational'
    },
    {
      id: 'site-delta',
      name: 'Cestos River Station',
      location: 'River Cess County',
      coordinates: { lat: 5.9022, lng: -9.4531 },
      turbines: 10,
      operational: 8,
      warning: 1,
      offline: 1,
      totalCapacity: 40.0,
      currentOutput: 28.6,
      efficiency: 78.3,
      waterTemp: 26.1,
      flowRate: 1.9,
      status: 'warning'
    }
  ];

  const turbineDetails = [
    { id: 'T-001', site: 'site-alpha', status: 'operational', output: 4.2, efficiency: 94 },
    { id: 'T-002', site: 'site-alpha', status: 'warning', output: 3.8, efficiency: 87 },
    { id: 'T-003', site: 'site-beta', status: 'offline', output: 0, efficiency: 0 },
    { id: 'T-004', site: 'site-gamma', status: 'operational', output: 4.5, efficiency: 96 },
    { id: 'T-005', site: 'site-delta', status: 'warning', output: 3.2, efficiency: 78 }
  ];

  const weatherData = {
    temperature: '22°C',
    humidity: '68%',
    windSpeed: '12 km/h',
    precipitation: '0 mm',
    visibility: '10 km'
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'offline': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'offline': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'operational': return 'badge--success';
      case 'warning': return 'badge--warning';
      case 'offline': return 'badge--error';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredSites = sites.filter(site => 
    site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    site.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container-page py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div className="animate-slide-up">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 bg-clip-text text-transparent">
              Geographic View
            </h1>
            <p className="text-slate-600 mt-2">Interactive map of all turbine sites and real-time status</p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline" size="sm" className="focus-ring">
              <Layers className="h-4 w-4 mr-2" />
              Layers
            </Button>
            <Button variant="outline" size="sm" className="focus-ring">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-800 to-blue-600 text-white focus-ring">
              <Settings className="h-4 w-4 mr-2" />
              Map Settings
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Map Controls and Site List */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search and Filters */}
            <Card className="modern-card animate-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-800 text-lg">Site Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search sites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Map View Toggle */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Map View</label>
                    <div className="grid grid-cols-1 gap-1">
                      {[
                        { id: 'satellite', label: 'Satellite', icon: Satellite },
                        { id: 'roadmap', label: 'Roadmap', icon: MapIcon },
                        { id: 'terrain', label: 'Terrain', icon: Navigation }
                      ].map((view) => {
                        const Icon = view.icon;
                        return (
                          <Button
                            key={view.id}
                            variant={mapView === view.id ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setMapView(view.id)}
                            className="w-full justify-start"
                          >
                            <Icon className="h-3 w-3 mr-2" />
                            {view.label}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Layer Controls */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Map Layers</label>
                    <div className="space-y-2">
                      {[
                        { key: 'turbines' as keyof typeof showLayers, label: 'Turbines', icon: Zap },
                        { key: 'sites' as keyof typeof showLayers, label: 'Site Boundaries', icon: MapPin },
                        { key: 'weather' as keyof typeof showLayers, label: 'Weather Data', icon: Wind },
                        { key: 'waterFlow' as keyof typeof showLayers, label: 'Water Flow', icon: Droplets },
                        { key: 'alerts' as keyof typeof showLayers, label: 'Alert Zones', icon: AlertTriangle }
                      ].map((layer) => {
                        const Icon = layer.icon;
                        return (
                          <div key={layer.key} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="h-4 w-4 text-slate-500" />
                              <span className="text-sm text-slate-700">{layer.label}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowLayers(prev => ({ ...prev, [layer.key]: !prev[layer.key] }))}
                            >
                              {showLayers[layer.key] ? 
                                <Eye className="h-4 w-4 text-green-600" /> : 
                                <EyeOff className="h-4 w-4 text-slate-400" />
                              }
                            </Button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Site List */}
            <Card className="modern-card animate-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-800 text-lg">Sites Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {filteredSites.map((site) => (
                    <div 
                      key={site.id} 
                      className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                        selectedSite === site.id ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedSite(site.id)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-slate-900">{site.name}</h4>
                        <Badge className={getStatusBadge(site.status)}>
                          {site.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-slate-600 mb-2">{site.location}</p>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center p-1 rounded bg-green-50">
                          <div className="font-medium text-green-700">{site.operational}</div>
                          <div className="text-green-600">Online</div>
                        </div>
                        <div className="text-center p-1 rounded bg-yellow-50">
                          <div className="font-medium text-yellow-700">{site.warning}</div>
                          <div className="text-yellow-600">Warning</div>
                        </div>
                        <div className="text-center p-1 rounded bg-red-50">
                          <div className="font-medium text-red-700">{site.offline}</div>
                          <div className="text-red-600">Offline</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>


          </div>

          {/* Main Map Area */}
          <div className="lg:col-span-3 space-y-6">
            <Card className="modern-card animate-slide-up">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <MapPin className="h-5 w-5" />
                    Interactive Turbine Map
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={toggleFullscreen}>
                      {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div 
                  ref={mapContainerRef}
                  className={`relative rounded-xl border border-slate-200 overflow-hidden ${
                    isFullscreen ? 'h-screen w-screen fixed top-0 left-0 z-50' : 'h-[400px]'
                  }`}
                >
                  <div id="map" className="w-full h-full rounded-xl"></div>
                  
                  {/* Clickable Site List Overlay */}
                  <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md max-w-xs">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Turbine Sites</h4>
                    <div className="space-y-2">
                      {filteredSites.map((site) => (
                        <div 
                          key={site.id}
                          className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                            selectedSite === site.id ? 'bg-blue-100' : 'hover:bg-slate-100'
                          }`}
                          onClick={() => setSelectedSite(site.id)}
                        >
                          <div 
                            className={`w-3 h-3 rounded-full ${
                              site.status === 'operational' ? 'bg-green-500' :
                              site.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                          ></div>
                          <span className="text-sm text-slate-700">{site.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>


                  {/* Map Legend */}
                  <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md z-10">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Status Legend</h4>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <span className="text-slate-700">Operational</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <span className="text-slate-700">Warning</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <span className="text-slate-700">Offline</span>
                      </div>
                    </div>
                  </div>

                  {/* Coordinates Display */}
                  <div className="absolute bottom-4 right-4 bg-white p-2 rounded shadow-md text-xs text-slate-600 z-10">
                    Liberia | {filteredSites.length} Active Sites
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weather Information */}
            <Card className="modern-card animate-slide-up">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-blue-800 text-lg">
                  <Wind className="h-5 w-5" />
                  Weather Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: 'Temperature', value: weatherData.temperature, icon: Thermometer },
                    { label: 'Humidity', value: weatherData.humidity, icon: Droplets },
                    { label: 'Wind Speed', value: weatherData.windSpeed, icon: Wind },
                    { label: 'Precipitation', value: weatherData.precipitation, icon: Droplets }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-2 rounded bg-slate-50">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-slate-500" />
                          <span className="text-sm text-slate-700">{item.label}</span>
                        </div>
                        <span className="text-sm font-medium text-blue-800">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Site Details Panel */}
            {selectedSite && (
              <Card className="modern-card animate-slide-up">
                <CardContent className="p-6">
                  {sites.filter(site => site.id === selectedSite).map(site => (
                    <div key={site.id}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-slate-900">{site.name}</h3>
                        <Badge className={getStatusBadge(site.status)}>
                          {site.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 rounded-lg bg-blue-50">
                          <div className="text-2xl font-bold text-blue-800">{site.currentOutput} MW</div>
                          <div className="text-xs text-slate-600">Current Output</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-green-50">
                          <div className="text-2xl font-bold text-green-600">{site.efficiency}%</div>
                          <div className="text-xs text-slate-600">Efficiency</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-purple-50">
                          <div className="text-2xl font-bold text-purple-600">{site.turbines}</div>
                          <div className="text-xs text-slate-600">Total Turbines</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-orange-50">
                          <div className="text-2xl font-bold text-orange-600">{site.totalCapacity} MW</div>
                          <div className="text-xs text-slate-600">Capacity</div>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Thermometer className="h-4 w-4 text-blue-600" />
                          <span className="text-slate-600">Water Temp:</span>
                          <span className="font-medium">{site.waterTemp}°C</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="h-4 w-4 text-cyan-600" />
                          <span className="text-slate-600">Flow Rate:</span>
                          <span className="font-medium">{site.flowRate} m/s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-600" />
                          <span className="text-slate-600">Location:</span>
                          <span className="font-medium">{site.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}