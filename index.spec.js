import plugin from './index'

function mockJSXAttributeASTNode(name) {
  return { name: { name } }
}

describe('plugin', () => {
  const visitor = plugin().visitor.JSXAttribute

  it('invokes remove if the attribute is data-test-id', () => {
    const remove = jest.fn()
    visitor({
      node: mockJSXAttributeASTNode('data-test-id'),
      remove,
    })
    expect(remove).toHaveBeenCalled()
  })

  it('invokes remove if the attribute is testId', () => {
    const remove = jest.fn()
    visitor({
      node: mockJSXAttributeASTNode('testId'),
      remove,
    })
    expect(remove).toHaveBeenCalled()
  })

  it("doesn't invoke remove in any other cases", () => {
    const remove = jest.fn()
    visitor({
      node: mockJSXAttributeASTNode('className'),
      remove,
    })
    expect(remove).not.toHaveBeenCalled()

    visitor({
      node: mockJSXAttributeASTNode('onClick'),
      remove,
    })
    expect(remove).not.toHaveBeenCalled()
  })
})