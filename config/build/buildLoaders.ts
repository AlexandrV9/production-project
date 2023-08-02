import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/buildOptions";

export function buildLoaders({
  isDev,
}: BuildOptions): webpack.RuleSetRule[] {
  
  // ТУТ ВАЖЕН ПОРЯДОК ЛОАДЕРОВ,
  // ВОЗВРАЩАЕМЫЙ ИЗ МАССИВА

  // Выносим лоадеры из массива в переменные
  // для того, чтобы чётко видеить, где какой 
  // лоадер располагается 

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader, 
    cssLoader
  ]
}