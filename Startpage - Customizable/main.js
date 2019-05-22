//All category names
var Names = document.querySelectorAll("[id='Category-Name']");

//All category links
var Links = document.querySelectorAll("[id='Category-Links']");


//Adds hyperlinks to category
function AddItem() {
	//Link array
	var AllLinks = [];
	
    var Item = document.createElement("a")
    var ItemName = document.createTextNode("New Link");
    Item.setAttribute('href', "#");
    Item.appendChild(ItemName);
    document.getElementById("Category-Links").appendChild(Item);
	AllLinks.push(Item);
	console.log(AllLinks);
}

    //addEventListener("click", ChangeName);

function ChangeName() {
   document.getElementById("Category-Name").innerHTML ="New Category";
}

function AddCategory(){
	//Category array
	var AllCategories = [];
	
	//Creates new category
	var Category = document.createElement("div");
	Category.setAttribute("id", "Category");
    document.getElementById("Categories").appendChild(Category);

	
	//Creates the title-div in category
	var CategoryTitle = document.createElement("div");
	CategoryTitle.setAttribute("id", "Category-Name");
	document.getElementById("Category").appendChild(CategoryTitle);
    Category.appendChild(CategoryTitle);
	
	//Creates the title in category
	var CategoryTitleNameItem = document.createElement("h3");
	CategoryTitleNameItem.setAttribute("id", "Category-Name");
	var	CategoryTitleName = document.createTextNode("No Name");
	CategoryTitleNameItem.appendChild(CategoryTitleName);
	Category.appendChild(CategoryTitleNameItem);
    
    //Creates the link-div in category
    var CategoryLinks = document.createElement("div");
    CategoryLinks.setAttribute("id", "Category-Links");
    document.getElementById("Category").appendChild(CategoryLinks);
    
    //Creates the add link button
    var AddLinkButton = document.createElement("button");
    AddLinkButton.setAttribute("onclick", "AddItem()");
    AddLinkButton.setAttribute("id", "LinkButton");
    AddLinkButtonName = document.createTextNode("+");
    AddLinkButton.appendChild(AddLinkButtonName);
    document.getElementById("Category-Links").appendChild(AddLinkButton);
    Category.appendChild(AddLinkButton);

	
	AllCategories.push(Category);
    console.log(AllCategories.length);
}
