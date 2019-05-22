//All category names
var Names = document.querySelectorAll("[id='Category-Name']");

//All catergory links
var Links = document.querySelectorAll("[id='Category-Links']");


//Adds hyperlinks to category
function AddItem() {
    var Item = document.createElement("a")
    var ItemName = document.createTextNode("Link");
    Item.setAttribute('href', "#");
    Item.appendChild(ItemName);
    document.getElementById("Category-Links").appendChild(Item);
}

Names.forEach(array =>{
    addEventListener("click", ChangeName);
})

function ChangeName() {
   document.getElementById("Category-Name").innerHTML ="Hej";
}