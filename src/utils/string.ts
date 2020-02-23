export function padToTwoDigits(number: number): string {
  return number.toString().length === 1 ? `0${number}` : number.toString()
}
