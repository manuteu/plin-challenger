export interface ILocation {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number
};

export interface ICurrent {
  temp_c: number;
  is_day: number;
  condition: ICondition;
  wind_kph: number;
  pressure_mb: number;
  humidity: number;
  feelslike_c: number;
  vis_km: number;
  uv: number;
}

export interface IRow {
  icon: Icons;
  name: string;
  value: string | number;
}

export type Icons =
  'moon' |
  'sun' |
  'eye' |
  'pressure' |
  'therm' |
  'wind' |
  'humidity' |
  'date' |
  'map_pin'
