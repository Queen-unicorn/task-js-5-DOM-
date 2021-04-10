import * as Track from "./tracking.js";

export class ToDoList {
  field = document.getElementById("linkField");
  addButton = document.getElementById("addButton");
  links = document.getElementById("links");

  constructor() {
    this.addButton.addEventListener("click", e => {
      this.addLink(this.field.value);
    });
    this.field.addEventListener("keyup", e => {
      if (e.key == "Enter") this.addButton.click();
    });
  }

  addLink(value) {
    let linkDiv = document.createElement("div");
    linkDiv.setAttribute("id", "linkDiv");
    Track.track(linkDiv);

    let link = document.createElement("a");
    link.setAttribute("href", value);
    link.setAttribute("target", "_blank");
    Track.track(link);
    link.innerHTML = value;

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeButton");
    Track.track(removeButton);
    removeButton.innerHTML = "Remove";

    linkDiv.appendChild(link);
    linkDiv.appendChild(removeButton);

    this.links.appendChild(linkDiv);

    removeButton.addEventListener("click", e => {
      linkDiv.remove();
    });
  }
}
