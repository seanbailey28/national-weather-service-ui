import { Badge } from "@mantine/core";
import { WeatherAlertsSeverityTagProps } from "./WeatherAlertsSeverityTag.types";

const WeatherAlertsSeverityTag = ({
  severity,
}: WeatherAlertsSeverityTagProps) => {
  const getColor = (
    severity:
      | "Extreme"
      | "Severe"
      | "Moderate"
      | "Minor"
      | "Unknown"
      | undefined,
  ) => {
    switch (severity) {
      case "Extreme":
        return "red.8";
      case "Severe":
        return "orange.8";
      case "Moderate":
        return "yellow.8";
      case "Minor":
        return "yellow.4";
      default:
        return "gray";
    }
  };

  return (
    <Badge fullWidth color={getColor(severity)}>
      {severity}
    </Badge>
  );
};

export default WeatherAlertsSeverityTag;
