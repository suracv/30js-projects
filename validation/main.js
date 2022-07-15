const form = document.getElementsByClassName("form");
var element1 = document.getElementsByClassName("a");
var element2 = document.getElementsByClassName("b");
var element3 = document.getElementsByClassName("c");

for (var i in form) {
  form[i].onclick = function () {
    checkInputs();
  };
}

function checkInputs() {
  const submit = document.querySelector(".submit");
  const span = document.querySelector(".submit span");

  if (
    element1[0].checked == true &&
    element2[0].checked == true &&
    element3[0].checked == true
  ) {
    submit.style.backgroundColor = "#ffd002";
    submit.style.opacity = "1";
    submit.style.border = "none";
    submit.style.outline = "none";
    submit.style.cursor = "pointer";
    span.style.color = "black";

    submit.removeAttribute("disabled");

  } else {
    submit.style.backgroundColor = "black";
    submit.style.opacity = "0.14";
    span.style.color = "white";
    submit.setAttribute("disabled");

  }
}


