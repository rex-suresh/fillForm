class HandleInput {
  #content; #currentIndex;
  constructor() {
    this.#content = '';
    this.#currentIndex = 0;
  }

  addContent(content) {
    this.#content = this.#content + content;
  }

  lines() {
    const allLines = this.#content.split('\n');
    const presentLines = allLines.slice(this.#currentIndex, -1);
    this.#currentIndex = allLines.length - 1;

    return presentLines;
  }
}

module.exports = { HandleInput };
