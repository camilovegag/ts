class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedHtmlContent = document.importNode(this.templateElement.content, true);
    this.element = importedHtmlContent.firstElementChild! as HTMLFormElement;
    this.element.id = "user-input";
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const project = new ProjectInput();
