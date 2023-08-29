// State Types

import { ICurrent, ILocation } from "../../types/Climate";

export interface ClimateState {
  long: string;
  lat: string;
  location: ILocation;
  current: ICurrent;
}

// Action Types

export const Types = {
  CHANGE_LONG: 'climate/CHANGE_LONG',
  CHANGE_LAT: 'climate/CHANGE_LAT',
  CHANGE_LOCATION: 'climate/CHANGE_LOCATION',
  CHANGE_CURRENT: 'climate/CHANGE_CURRENT',
};

// Reducer

const initialState: ClimateState = {
  long: '',
  lat: '',
  location: {
    country: '',
    localtime: '',
    name: '',
    region: ''
  },
  current: {
    condition:
    {
      code: 0,
      icon: '',
      text: ''
    },
    feelslike_c: 0,
    humidity: 0,
    is_day: 0,
    pressure_mb: 0,
    temp_c: 0,
    uv: 0,
    vis_km: 0,
    wind_kph: 0
  }
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case Types.CHANGE_LONG:
      return { ...state, long: action.payload };
    case Types.CHANGE_LAT:
      return { ...state, lat: action.payload };
    case Types.CHANGE_LOCATION:
      return { ...state, location: action.payload };
    case Types.CHANGE_CURRENT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
}

// Action Creators

export function changeLong(long: string) {
  return {
    type: Types.CHANGE_LONG,
    payload: long,
  }
}

export function changeLat(lat: string) {
  return {
    type: Types.CHANGE_LAT,
    payload: lat,
  }
}

export function changeLocation(location: object) {
  return {
    type: Types.CHANGE_LOCATION,
    payload: location,
  }
}

export function changeCurrent(current: string) {
  return {
    type: Types.CHANGE_CURRENT,
    payload: current,
  }
}