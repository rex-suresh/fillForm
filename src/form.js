class Field {
  #title; #response; #validator; #formatter; #prompt;
  constructor(title, prompt, validator, formatter) {
    this.#title = title;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#formatter = formatter;
    this.#response = null;
  }

  fill(response) {
    this.#response = response;
  }

  isInvalid(response) {
    return this.#validator(response);
  }

  getPrompt() {
    return this.#prompt;
  }

  getEntry() {
    return {title: this.#title, response: this.#formatter(this.#response)};
  }
}

class MultiLineField {
  #title; #responses; #validator; #formatter; #prompts;
  constructor(title, prompts, validator, formatter) {
    this.#title = title;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#formatter = formatter;
    this.#responses = [];
  }

  fill(response) {
    this.#responses.push(response);
  }

  isInvalid(response) {
    return this.#validator(response);
  }

  getPrompt() {
    return this.#prompts[this.#responses.length];
  }

  getEntry() {
    return {title: this.#title, response: this.#formatter(this.#responses)};
  }
}

class Form {
  #fieldData; #currentIndex;
  
  constructor() {
    this.#fieldData = [];
    this.#currentIndex = 0;
  }

  addField(field) {
    this.#fieldData.push(field);
  }

  assign(response) {
    const currentField = this.#fieldData[this.#currentIndex];
    if (currentField.isInvalid(response)) {
      return false;
    }
    
    currentField.fill(response);
    return true;
  }

  handleAssignment(response) {
    const assignmentStatus = this.assign(response);
    if (assignmentStatus) {
      this.#currentIndex++;
    }
  }

  prompt() {
    const currentField = this.#fieldData[this.#currentIndex];
    return currentField.getPrompt();
  }

  isFormFilled() {
    return this.#currentIndex === this.#fieldData.length;
  }

  getForm() {
    const fieldEntry = this.#fieldData.reduce( (form, field) => {
      const { title, response } = field.getEntry();
      form[title] = response;
      return form;
    }, {});

    return fieldEntry;
  }
}

module.exports = {Form, Field, MultiLineField};
