import { BuildOptions } from '../types/config';

export function buildSvgLoader({ isDev }: BuildOptions) {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
}
