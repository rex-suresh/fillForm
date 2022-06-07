class Form {
  #formEntry; #fieldData; #currentIndex;
  
  constructor(fieldData) {
    this.#fieldData = fieldData;
    this.#formEntry = {};
    this.#currentIndex = 0;
  }

  assign(line) {
    const { validator: isValid, format, placeHolder } =
      this.#fieldData[this.#currentIndex];
    
    const formatIncorrect = isValid(line);
    if (formatIncorrect) {
      return false;
    }
    
    this.#formEntry[placeHolder] = format(line, this.#formEntry[placeHolder]);
    return true;
  }

  handleAssignment(line) {
    const assignmentStatus = this.assign(line);
    if (assignmentStatus) {
      this.#currentIndex++;
    }
  }

  getCurrentIndex() {
    return this.#currentIndex;
  }

  getFormEntry() {
    return this.#formEntry;
  }
}
exports.Form = Form;
