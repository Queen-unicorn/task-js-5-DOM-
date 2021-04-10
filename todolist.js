export class ToDoList {
  field = document.getElementById("linkField");
  addButton = document.getElementById("addButton");
  links = document.getElementById("links");
  idToTrack = [];

  constructor() {
    this.addButton.addEventListener("click", e => {
      this.addLink(this.field.value);
    });
  }

  addLink(value) {
    let linkDiv = document.createElement("div");
    linkDiv.setAttribute("id", "linkDiv");

    let link = document.createElement("a");
    link.setAttribute("href", value);
    link.innerHTML = value;

    let removeButton = document.createElement("button");
    removeButton.setAttribute("class", "removeButton");
    removeButton.innerHTML = "Remove";

    linkDiv.appendChild(link);
    linkDiv.appendChild(removeButton);

    this.links.appendChild(linkDiv);

    removeButton.addEventListener("click", e => {
      linkDiv.remove();
    });
  }

  /*
  addLink2(value) {
    let string = `
  <div id="linkDiv">
    <a href="${value}">${value}</a>
    <button class="removeButton">Remove</button>
  </div>`;
    this.links.innerHTML += string;
    let removeButtons = document.getElementsByClassName("removeButton");

    for (let i of removeButtons) {
      i.addEventListener("click", e => {
        let removeDiv = i.parentElement;
        removeDiv.remove();
      });
    }
  }*/
}
