import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader(options);
  const babelLoader = buildBabelLoader(options);
  const cssLoader = buildCssLoader(options);

  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = buildTypescriptLoader(options);

  const fileLoader = buildFileLoader(options);

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
