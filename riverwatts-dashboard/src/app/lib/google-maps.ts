// Google Maps API loader utility
let isLoaded = false;
let isLoading = false;
let loadPromise: Promise<void> | null = null;

export const loadGoogleMaps = (): Promise<void> => {
  if (isLoaded) {
    return Promise.resolve();
  }

  if (isLoading && loadPromise) {
    return loadPromise;
  }

  isLoading = true;
  loadPromise = new Promise((resolve, reject) => {
    // Check if Google Maps is already loaded
    if ((window as any).google && (window as any).google.maps) {
      isLoaded = true;
      isLoading = false;
      resolve();
      return;
    }

    // Create callback function
    const callbackName = 'initGoogleMaps';
    (window as any)[callbackName] = () => {
      console.log('Google Maps callback executed');
      isLoaded = true;
      isLoading = false;
      resolve();
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      // Script exists but might not be loaded yet
      existingScript.addEventListener('load', () => {
        isLoaded = true;
        isLoading = false;
        resolve();
      });
      existingScript.addEventListener('error', reject);
      return;
    }

    // Create and load script
    const script = document.createElement('script');
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    console.log('API Key available:', !!apiKey);
    if (!apiKey) {
      reject(new Error('Google Maps API key not found'));
      return;
    }
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=${callbackName}`;
    console.log('Loading Google Maps script:', script.src);
    script.async = true;
    script.defer = true;
    
    script.addEventListener('error', () => {
      isLoading = false;
      reject(new Error('Failed to load Google Maps API'));
    });

    document.head.appendChild(script);
  });

  return loadPromise;
};