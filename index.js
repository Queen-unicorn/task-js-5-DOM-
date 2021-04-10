import "./style.css";
import * as Track from "./tracking.js";
import * as ToDo from "./todolist.js";

let toDoList = new ToDo.ToDoList();

let loadButton = document.getElementById("loadButton");

loadButton.addEventListener("click", e => {
  renderData();
});

function renderData(){
  let arr = Track.getTrackInfo();
  
}