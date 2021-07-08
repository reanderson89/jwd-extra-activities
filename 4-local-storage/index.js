// Create DOM variables so that you can access the add item button, and div where you will put your list. The input field has been done for you
const groceryItem = document.getElementById("groceryItem");
const addItem = document.getElementById("addItem");
const groceryList = document.getElementById("groceryList");
console.log(groceryList);




// create function to add groceryItem to localStorage
const addToLocalStorage = () => {
    let value = groceryItem.value;
    let key = localStorage.length;
    localStorage.setItem(key, value);
    addToGroceryList(key);
};

const addToGroceryList = (key) => {
    let userItem = localStorage.getItem(key);
    let newListItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-primary btn-sm deleteBtn");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("data-key", key);
    deleteButton.innerText = "Delete";
    newListItem.innerHTML = userItem;
    newListItem.append(deleteButton);
    groceryList.append(newListItem);
};

const populateGroceryList = () => {
    for (let i = 0; i < localStorage.length; i++) {
        addToGroceryList(i);
    }
};


addItem.addEventListener('click', function(){
    addToLocalStorage();
    groceryItem.value = "";
});
groceryItem.onkeydown = function(e){
    if(e.keyCode == 13){
        addToLocalStorage();
        groceryItem.value = "";
    }
 };



groceryList.addEventListener("click", function(event){
    const deleteBtn = document.getElementsByClassName("deleteBtn");
    console.log(event.target)
    let element = event.target;
    let typeAttribute = element.getAttribute("type");
    let key = element.getAttribute("data-key");
    console.log(key);
    console.log(element.parentElement)
    if(typeAttribute === "button"){
        localStorage.removeItem(key)
        element.parentElement.remove();
    }
});


populateGroceryList();