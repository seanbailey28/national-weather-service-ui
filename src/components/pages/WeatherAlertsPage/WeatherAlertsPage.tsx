"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { components } from "@/types/api";
import { useState } from "react";
import WeatherAlertsTable from "@/components/WeatherAlertsTable";

type WeatherAlertEndpointParams = {
  startDateTime: string | null;
  endDateTime: string | null;
};
type WeatherAlerts = components["schemas"]["Alert"];

const fetchWeatherAlerts = async (
  params: WeatherAlertEndpointParams,
): Promise<WeatherAlerts[]> => {
  const { startDateTime, endDateTime } = params;
  const queryParams = new URLSearchParams();
  if (startDateTime) queryParams.append("start", startDateTime);
  if (endDateTime) queryParams.append("end", endDateTime);

  const response = await fetch(
    `https://api.weather.gov/alerts?${queryParams.toString()}`,
  );
  return response.json();
};

const WeatherAlertsPage = () => {
  const [startDateTime] = useState<string | null>(null);
  const [endDateTime] = useState<string | null>(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather-alerts", startDateTime, endDateTime],
    queryFn: () => fetchWeatherAlerts({ startDateTime, endDateTime }),
  });

  return (

      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          National Weather Alerts
        </Typography>
        {console.log(data)}
        {(data && !isLoading && !isError) && <WeatherAlertsTable items={data.map((item) => {
          return {
            ...item,
            title: item.headline
          };
        })} />} 

        {isLoading && <Typography>Loading...</Typography>}
        {isError && <Typography>There has been an error loading the data</Typography>}
    </Box>
  );
};

export default WeatherAlertsPage;
