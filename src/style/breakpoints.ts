import { Size, Device } from '../types/style/style';

const size: Size = {
  mobile: '640px',
  tablet: '768px',
  laptop: '1024px',
};

export const device: Device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};

export const WIDTH_THRESHOLD: number = 1024;
