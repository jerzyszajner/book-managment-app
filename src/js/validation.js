class Validation {
  static validateForm(bookType, validationMessage) {
    validationMessage.style.display = "none";
    const fieldsToValidate = [
      { name: "title", message: "Please enter the book title" },
      { name: "author", message: "Please enter the author's name" },
      { name: "publisher", message: "Please enter the publisher's name" },
      {
        name: "publication-date",
        message: "Please enter the publication date",
      },
      { name: "book-type", message: "Please select the book type" },
    ];

    if (bookType === "printed-book") {
      fieldsToValidate.push(
        { name: "pages", message: "Please enter the number of pages" },
        { name: "print-type", message: "Please select the print type" }
      );
    } else if (bookType === "audio-book") {
      fieldsToValidate.push(
        { name: "narrator", message: "Please enter the narrator's name" },
        { name: "duration", message: "Please enter the duration" }
      );
    }

    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id=${field.name}]`);
      inputField.classList.remove("form__invalid-input");
      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        validationMessage.textContent = "";
      });
      if (!inputField.value.trim()) {
        validationMessage.style.display = "block";
        validationMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      } else {
        inputField.classList.remove("form__invalid-input");
      }
    }
    return true;
  }
}

export default Validation;
