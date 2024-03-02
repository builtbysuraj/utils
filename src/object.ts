export function keys(object: object) {
  return Object.keys(object)
}

export function isEqual(obj1: object, obj2: object) {
  return JSON.stringify(obj1) === JSON.stringify(obj2)
}

export function mergeObjects(obj1: object, obj2: object) {
  return { ...obj1, ...obj2 }
}

export function deepClone(obj: object) {
  return JSON.parse(JSON.stringify(obj))
}
