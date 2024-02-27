export function add(...rest: number[]) {
  return rest.reduce((a, b) => a + b, 0)
}

export function multiply(a: number, b: number) {
  return a * b
}
