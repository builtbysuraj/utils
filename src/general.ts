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

export function getFormData(evt: Event | React.FormEvent<HTMLFormElement>) {
  const form = (evt.target || evt.currentTarget) as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  return { data, form }
}
