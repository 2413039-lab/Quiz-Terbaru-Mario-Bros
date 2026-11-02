
class LibraryItem {
  constructor(
    public title: string,
    protected loanDays: number
  ) {}

  getInfo(): string {
    return `${this.title}, dipinjam ${this.loanDays} hari`;
  }
}


class Book extends LibraryItem {
  constructor(title: string, public author: string) {
    super(title, 7); 
  }
}


class Magazine extends LibraryItem {
  constructor(title: string) {
    super(title, 3); 
  }
}