export abstract class Animal {
  abstract getName(): string

  public eating(): string {
    return `It's 7:00, I'm ${this.getName()}, I'm eating`
  }

  public walking(): string {
    return `It's 8:00, I'm ${this.getName()}, I'm walking`
  }
}
