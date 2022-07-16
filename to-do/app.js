
let list = document.querySelector("#todoList");
let input = document.querySelector("#todoInput");
let addButton = document.querySelector("#addButton");
let successAlert = document.querySelector("#success");
let dangerAlert = document.querySelector("#error");


addButton.addEventListener("click", addItem);


// we add items to our list
function addItem() {
  if (input.value == "") { //checked if there is a value exist or not
    ToastAlertDanger(); //if there is no value in input,then show the error toast message
  } else {
    ToastAlertSuccess(); //then show the success toast message

    const listItem = document.createElement("li"); //we create list item for todolist
    listItem.innerHTML = input.value; //then we assign the list item to input value
    list.append(listItem); //we add the listitem values to our ul list
    input.value = ""; //after the value assign, we clear the input to add a new one
    const clearButton = document.createElement("span"); //ve create a clear button to delete the task we did
    clearButton.textContent = "\u00D7";
    clearButton.classList.add("close");
    clearButton.onclick = removeAllList; //we assign the onClick event when this button is clicked to delete the entire list.

    listItem.append(clearButton); //we assign the button to our listItem

  }
}

//we assign the onClick event when this button is clicked to delete the entire list.
function removeAllList() {
  this.parentElement.remove(); 
}

//success alert
function ToastAlertSuccess() {
  let successToast = new bootstrap.Toast(successAlert);
  successToast.show();
}

//error alert
function ToastAlertDanger() {
  let dangerToast = new bootstrap.Toast(dangerAlert);
  dangerToast.show();
}

