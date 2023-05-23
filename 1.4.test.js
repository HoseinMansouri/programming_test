describe('Proxy Object', () => {
  test('should always return "404" for any property access', () => {
    const targetObject = {
      name: 'John',
      age: 30,
    };

    const handler = {
      get: jest.fn().mockReturnValue('404'),
    };

    const proxy = new Proxy(targetObject, handler);

    expect(proxy.name).toBe('404');
    expect(proxy.age).toBe('404');
    expect(proxy.someProperty).toBe('404');   
  });
});
