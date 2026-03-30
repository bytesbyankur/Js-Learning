class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  describe() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages.`);
  }
}

const b1 = new Book("Meditations", "Marcus Aurelius", 254);
b1.describe();
