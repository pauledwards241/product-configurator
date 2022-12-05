import { HSLColour } from '../types';

export const hslToCss = ({ hue, light, sat }: HSLColour) =>
  `hsl(${hue}, ${sat}%, ${light}%)`;
