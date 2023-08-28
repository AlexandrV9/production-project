import type { 
  Configuration as DevServerConfiguration 
} from "webpack-dev-server";
import { BuildOptions } from "./types/buildOptions";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // автоматически открывает
    // в браузере страницу с нашим
    // приложением
    historyApiFallback: true,
    hot: true
  };
}
