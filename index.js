export default function JsxDisplayIgnoreTestId() {
  return {
    visitor: {
      JSXAttribute: function (path) {
        let { node: { name: { name } } } = path
        if (name === 'data-test-id' || name === 'testId') {
          path.remove()
        }
      }
    }
  }
}
