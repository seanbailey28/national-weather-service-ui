import { components } from "@/types/api";

type WeatherAlerts = components["schemas"]["Alert"];

export type WeatherAlrertsTableProps = {
    items: WeatherAlertsTableItem[];
}

export type WeatherAlertsTableItem = {
    id?: WeatherAlerts["id"];
    status?: WeatherAlerts["status"];
    title?: WeatherAlerts["headline"];
    severity?: WeatherAlerts["severity"];
    effective?: WeatherAlerts["effective"];
    expires?: WeatherAlerts["expires"];
    description?: WeatherAlerts["description"];
    instruction?: WeatherAlerts["instruction"];
    areaDesc?: WeatherAlerts["areaDesc"];
    sent?: WeatherAlerts["sent"];
    event?: WeatherAlerts["event"];
}

export type ColumnOrder = 'asc' | 'desc';

export type HeadCell = {
    disablePadding: boolean;
    id: keyof WeatherAlertsTableItem;
    label: string;
}