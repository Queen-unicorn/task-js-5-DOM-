import "./style.css";
import * as Track from "./tracking.js";
import * as ToDo from "./todolist.js";

function App() {
  let toDoList = new ToDo.ToDoList();

  let loadButton = document.getElementById("loadButton");
  let clearButton = document.getElementById("clearButton");
  let toLoad = document.getElementById("loadedData");
  Track.setItemsToTrack("button,[toTrack]");

  loadButton.addEventListener("click", e => {
    renderData();
    clearButton.style.display = "inline";
  });

  clearButton.addEventListener("click", e => {
    Track.clear();
    toLoad.innerHTML = "";
    clearButton.style.display = "none";
  });

  function renderData() {
    let arr = Track.getTrackInfo();
    let string = `
    <table>
      <tr>
        <td>Tag name</td>
        <td>Element Id</td>
        <td>Time</td>
        <td>Text</td>
      </tr>
  `;
    for (let i of arr) {
      string += `
      <tr>
        <td>${i.tagName}</td>
        <td>${i.elementId}</td>
        <td>${i.time}</td>
        <td>${i.text}</td>
      </tr> 
    `;
    }
    string += `
    </table>
  `;
    toLoad.innerHTML = string;
  }
}

App();
