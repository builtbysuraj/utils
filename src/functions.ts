export function add(initialValue = 0, ...rest: number[]) {
  return rest.reduce((a, b) => a + b, initialValue)
}
