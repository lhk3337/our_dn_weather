import { useState, useEffect } from "react";

interface LocationType {
  latitude: number | null;
  longitude: number | null;
}

export default function useCurrentLocation() {
  const [coords, setCoords] = useState<LocationType>({ latitude: null, longitude: null });
  const [error, setError] = useState<string>();
  const onSuccess = ({ coords: { latitude, longitude } }: GeolocationPosition) => {
    setCoords({ latitude, longitude });
  };

  // Error handler for geolocation's `getCurrentPosition` method
  const handleError = (error: any) => {
    setError(error.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    // If the geolocation is not defined in the used browser we handle it as an error
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    // Call Geolocation API
    navigator.geolocation.getCurrentPosition(onSuccess, handleError);
  }, []);

  return coords;
}
