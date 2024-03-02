import { randomUUID } from 'crypto'
import { ClassesType } from './types'

export function add(...rest: number[]) {
  return rest.reduce((a, b) => a + b, 0)
}

export function id() {
  return randomUUID()
}

export function cn(...classes: ClassesType[]) {
  return classes.filter(Boolean).join(' ')
}
