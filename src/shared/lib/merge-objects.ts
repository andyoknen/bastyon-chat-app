export function mergeObjects<T extends Record<string, any>>(
  obj1: T,
  obj2: Partial<T>
): T {
  const result: T = { ...obj1 };

  Object.keys(obj2).forEach(key => {
    result[key as keyof T] = obj2[key as keyof T]!;
  });

  return result;
}
