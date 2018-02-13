'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = JsxDisplayIgnoreTestId;
function JsxDisplayIgnoreTestId() {
  return {
    visitor: {
      JSXAttribute: function (path) {
        if (path.node.name.name === 'data-test-id' || path.node.name.name === 'testId') {
          path.remove();
        }
      }
    }
  };
};
