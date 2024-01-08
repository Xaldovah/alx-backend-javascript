const weakMap = new WeakMap();

function queryApi(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const currentCount = weakMap.get(endpoint);
    if (currentCount >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, currentCount + 1);
    }
  }
}

export { queryApi, weakMap };
