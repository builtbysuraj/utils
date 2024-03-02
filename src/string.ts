export function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePassword(password: string, length = 8) {
  // At least 8 characters long, contains a number, an uppercase letter, a lowercase letter, and a special character
  const passwordRegex = new RegExp(
    `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{${length},}$`
  )
  return passwordRegex.test(password)
}

export function reverseString(str: string) {
  return str.split('').reverse().join('')
}

export function wordCount(str: string) {
  return str.split(' ').length
}

export function isPalindrome(str: string) {
  const reversedStr = str.split('').reverse().join('')
  return str === reversedStr
}

export function toTitleCase(str: string) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()
  })
}

