import { useState, useEffect } from "react";
import axios from "axios";

const IMAGES = {
  image2: new URL("./img/Pin.png", import.meta.url).href,
};

function useGeoLocation() {
  const [locationData, setLocationData] = useState(null);
  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    const res = await axios.get("http://ip-api.com/json");

    if (res.status === 200) setLocationData(res.data);
  }

  return {
    city: locationData?.city,
    country: locationData?.country,
    countryCode: locationData?.countryCode,
    lat: locationData?.lat,
    lon: locationData?.lon,
    region: locationData?.regionName,
    regionCode: locationData?.region,
    timezone: locationData?.timezone,
    zip: locationData?.zip,
  };
}

export default function UseGeoLocation() {
  const { city, lat, lon } = useGeoLocation();

  return (
    <div
      className="location"
      style={{
        display: "flex",
        alignItems: "center",
        width: "164px",
        marginLeft: "20px",
        marginRight: "20px",
        gap: "5px",
      }}
    >
      <img
        src={IMAGES.image2}
        alt="pin"
        style={{ width: "20px", height: "20px" }}
      />
      <p>{city}</p>
    </div>
  );
}
