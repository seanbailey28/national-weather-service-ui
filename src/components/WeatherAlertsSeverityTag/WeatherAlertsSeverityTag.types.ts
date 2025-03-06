import { components } from "@/types/api";

type WeatherAlerts = components["schemas"]["Alert"];

export type WeatherAlertsSeverityTagProps = {
    severity?: WeatherAlerts["severity"];
}