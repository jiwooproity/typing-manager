export function calcDoubleLength<T>(arr: T[][]): number {
  let result = 0;

  for (const number of arr) {
    result += number.length;
  }

  return result;
}
