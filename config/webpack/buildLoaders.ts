import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader(options);
  const cssLoader = buildCssLoader(options);
  
  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  // Если не используем тайпскрипт - нужен babel-loader
  // const typescriptLoader = buildTypescriptLoader(options);

  const fileLoader = buildFileLoader(options);

  return [fileLoader, svgLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader];
}
