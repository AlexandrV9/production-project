import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  if (config!.module!.rules) {
    config!.module!.rules = config!.module!.rules.map(
      (rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          return {
            ...rule,
            exclude: /\.svg$/i,
          };
        }
        return rule;
      },
    ) as RuleSetRule[];

    config!.module!.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  }
  
  config!.plugins!.push(new DefinePlugin({
    __API__: JSON.stringify(""),
    __IS_DEV__: JSON.stringify(true),
    __PROJECT__: JSON.stringify("storybook"),
  }));

  config!.module!.rules!.push(buildCssLoader({ isDev: true }));

  return config;
};
