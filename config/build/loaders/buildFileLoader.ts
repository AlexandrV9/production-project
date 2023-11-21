import { BuildOptions } from '../types/config';

export function buildFileLoader({ isDev }: BuildOptions) {
  return {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
}
