export abstract class Animal {
  abstract getName(): string

  public eating(): string {
    const activity = `eating`
    const timeIn24Hours = 7
    const attendee = this.getName()
    return `It's ${timeIn24Hours}:00, I'm ${attendee}, I'm ${activity}`
  }

  public walking(): string {
    return `It's 8:00, I'm ${this.getName()}, I'm walking`
  }

  public performing(): string {
    return `It's 9:00, I'm ${this.getName()}, I'm performing`
  }

  public flying(): string {
    return `It's 10:00, I'm ${this.getName()}, I'm flying`
  }

  public swimming(): string {
    return `It's 11:00, I'm ${this.getName()}, I'm swimming`
  }

  public programming(): string {
    return `It's 13:00, I'm ${this.getName()}, I'm programming`
  }

  public building(): string {
    return `It's 14:00, I'm ${this.getName()}, I'm building a house`
  }
}
