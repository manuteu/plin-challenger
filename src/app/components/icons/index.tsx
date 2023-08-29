import React from 'react';
import Close from './components/Close';
import Date from './components/Date';
import Eye from './components/Eye';
import Humidity from './components/Humidity';
import MapPin from './components/MapPin';
import Menu from './components/Menu';
import Moon from './components/Moon';
import Pressure from './components/Pressure';
import Sun from './components/Sun';
import Therm from './components/Therm';
import Wind from './components/Wind';

type Icons =
  'moon' |
  'sun' |
  'eye' |
  'pressure' |
  'therm' |
  'wind' |
  'humidity' |
  'date' |
  'map_pin' |
  'menu' |
  'close'


export default function SelectIcon(
  icon: Icons,
) {
  switch (icon) {
    case 'moon':
      return <Moon />;
    case 'sun':
      return <Sun />;
    case 'eye':
      return <Eye />;
    case 'pressure':
      return <Pressure />;
    case 'therm':
      return <Therm />;
    case 'wind':
      return <Wind />;
    case 'humidity':
      return <Humidity />;
    case 'date':
      return <Date />;
    case 'map_pin':
      return <MapPin />;
    case 'close':
      return <Close />;
    case 'menu':
      return <Menu />;
    default:
      break;
  }
}
