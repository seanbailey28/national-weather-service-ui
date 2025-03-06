"use client";
import { useQuery } from "@tanstack/react-query";
import { components } from "@/types/api";
import { useState } from "react";
import WeatherAlertsTable from "@/components/WeatherAlertsTable";
import { Alert, Flex, Loader } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

type WeatherAlertEndpointParams = {
  startDateTime: Date | null;
  endDateTime: Date | null;
};
type WeatherAlertsResponse =
  components["responses"]["AlertCollection"]["content"]["application/geo+json"];

const fetchWeatherAlerts = async (
  params: WeatherAlertEndpointParams,
): Promise<WeatherAlertsResponse> => {
  const { startDateTime, endDateTime } = params;
  const queryParams = new URLSearchParams();
  if (startDateTime) queryParams.append("start", startDateTime.toISOString());
  if (endDateTime) queryParams.append("end", endDateTime.toISOString());

  const response = await fetch(
    `https://api.weather.gov/alerts?${queryParams.toString()}`,
  );
  return response.json();
};

const WeatherAlertsPage = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather-alerts", dateRange],
    queryFn: () =>
      fetchWeatherAlerts({
        startDateTime: dateRange[0],
        endDateTime: dateRange[1],
      }),
  });

  return (
    <Flex direction="column">
      <DatePickerInput
        type="range"
        clearable
        label="Filter alerts by date"
        placeholder="Pick dates range"
        value={dateRange}
        onChange={setDateRange}
      />
      {data && !isLoading && !isError && (
        <WeatherAlertsTable
          items={data.features.map((item) => {
            return {
              ...item.properties,
            };
          })}
        />
      )}
      {isLoading && (
        <Flex mih={150} justify="center" align="center" wrap="wrap">
          <Loader color="teal" size="xl" type="dots" />
        </Flex>
      )}
      {isError && (
        <Flex mih={150} justify="center" align="center" wrap="wrap">
          <Alert
            variant="light"
            color="red"
            title="Error retrieving weather alerts"
          >
            There was an error retrieving the weather alerts, please reload the
            page and try again.
          </Alert>
        </Flex>
      )}
    </Flex>
  );
};

export default WeatherAlertsPage;
