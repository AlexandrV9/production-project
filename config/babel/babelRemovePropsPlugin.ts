import { PluginItem } from "@babel/core";

// Создаём свой собственный кастомный babel плагин
export default function(): PluginItem {
  return {
    visitor: {
      // Identifier - это node АСТ
      Program(path, state) {
        const forbidden = state.opts.props || [];

        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if(forbidden.includes(nodeName)) {
              current.parentPath.remove();
            }
          }
        })
      }
    },
  };
}

// babelRemovePropsPlugin(["data-testid"]) - удалит атрибут data-testid у элементов