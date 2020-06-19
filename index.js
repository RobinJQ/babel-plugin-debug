"use strict";

module.exports = ({ types }, options) => {
  function func_name(path) {
    let func_path = path.getFunctionParent();
    return func_path
      ? func_path.node.id
        ? func_path.node.id.name
        : func_path.node.key
        ? func_path.node.key.name
        : "<NO NAME>"
      : "<NO NAME>";
  }

  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.callee.name === "__DEBUG") {
          if (options && options.production) {
            path.parentPath.remove();
          } else {
            const location = path.node.loc;
            const filename_obj = state.file.opts.filename.match("[^/]*$");
            const filename = filename_obj
              ? state.file.opts.filename.substr(filename_obj.index)
              : "";
            path.node.callee.name = "console.log";
            const line = location ? location.start.line : "";
            const output =
              "[ DEBUG line: " +
              line +
              " file: " +
              filename +
              " function: " +
              func_name(path) +
              " ]";
            path.unshiftContainer("arguments", types.stringLiteral(output));
            path.unshiftContainer(
              "arguments",
              types.stringLiteral("\x1b[33m%s\x1b[0m")
            );
          }
        }
      },
    },
  };
};
