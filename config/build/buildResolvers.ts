import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/buildOptions";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], // для каждого модуля, главный файл это будет index
    alias: {}
  }
}