function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 4000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

onReady(function () {
  setVisible(".page", true);
  setVisible(".background", false);
});

//hover function
function showName(event) {
  if (event.target.tagName !== "IMG") {
    return;
  } else {
    let element = document.getElementsByClassName("name")[0];
    element.children[0].textContent = event.target.alt;
    element.classList.toggle("visibility");
    console.log(element);
  }
}

function stopShowName(event) {
  if (event.target.tagName !== "IMG") {
    return;
  } else {
    let element = document.getElementsByClassName("name")[0];
    element.classList.toggle("visibility");
    console.log(element);
  }
}

document
  .querySelector(".team-container")
  .addEventListener("mouseover", showName);

document
  .querySelector(".team-container")
  .addEventListener("mouseout", stopShowName);
//hover function
