let itemsToTrack = [];
let tracked = [];

export function setItemsToTrack(arrayOfName = "button,[toTrack]") {
  itemsToTrack = document.querySelectorAll(arrayOfName);
  for (let item of itemsToTrack) {
    track(item);
    console.log(item.textContent);
  }
}

export function track(item) {
  item.addEventListener("click", e => {
    e.stopPropagation();
    tracked.push({
      tagName: item.tagName,
      elementId: item.id,
      time: Date(),
      text: item.textContent
    });
  });
}

export function getTrackInfo() {
  return tracked;
}

export function clear() {
  tracked = [];
}
