import { BuildOptions } from '../types/config';

export function buildTypescriptLoader({ isDev }: BuildOptions) {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
}
