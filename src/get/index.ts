const getPath = (value: string, object: Record<string, unknown>) => {
  return object[value] ? [value] : value.split(".");
};

const get = (object: Record<string, unknown>, initialPath: string) => {
  let result = object;
  const path = getPath(initialPath, object);

  let index = 0;

  while (result !== null && index < path.length) {
    result = result[path[index++]] as Record<string, unknown>;
  }

  return result;
};

export { get };
