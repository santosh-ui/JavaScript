// alert("Hello! Welcome to DOM Manipulation Program.");

// document.getElementsByTagName("li");
// you'll get all the elements that you've selected in the form of an array
// so,
// document.getElementsByTagName("li").style.color = "purple";
// this is'nt gonna work bacause you're try to set color to an array
// so we've to select the exact item in the array eg.
// document.getElementsByTagName("li")[0].style.color = "purple";
// document.getElementsByTagName("li").length;
// document.getElementsByClassName("btn");
// this also gives you the list of items see the name of the method it is plural
// getElements
// even though if you have only singe item of that class name you get an array
// so you have to use [indexNumber] to select the particular item
// document.getElementsByClassName("btn")[0].style.color = "red";
// document.getElementById("title"); // it is singular so it returns a single item

// we can also use
// document.querySelector("a").style.color = "red";
// document.querySelector("#checkbox").click();
// to change the state of a single element no matter if it is a class, id or a tag

// if we want to select more than one item like a list of items using the same name
// we can use
// document.querySelectorAll("#list .item");
// with querySelectorAll we'll get a list of items 
// so you neeto use [indexNumber] for selecting a particular item of the list
// Eg.
// document.querySelectorAll("#list .item")[2].style.color = "red";

// challenge
// change the color of the anchor tag insid the list item to red
// not the one which is freely outside the list
// document.querySelector("#list .item a").style.color = "red";
// document.querySelector(".item a").style.color = "red";

// ----------------------------------------------------------------------------------------

// let heading = document.querySelector("#title");
// heading.innerHTML = "Good Bye!"
// document.querySelector(".btn").style.backgroundColor = "yellow";

// Manipulating Styles with javaScript is a bad idea. We have style.css file for that task
// So, Use javaScript only when user is interacting with the website.
// Eg.

// document.querySelector(".btn").classList;

// gives the list of classes that btn has

// document.querySelector("button").classList.add("invisible");

// This adds a new class to the button element
// This way we can turn on and off the invisible class style whenever we want.

// document.querySelector("button").classList.remove("invisible");

// remove method is used to remove the class dynamically
// Another useful method is ("toggle"). it is used to change the state from 
// add to remove and remove to add (like on and off)

// challenge
// add huge class to an element and change the size of the element dynamically
// document.querySelector("#title").classList.add("huge");
// document.querySelector("#title").classList.toggle("huge");

// --------------------------------------------------------------------------------

// Manipulating text on the fly
// innerHTML actually do what it says means it can shows, selects and changes
//  all the HTML code inside the element you've selected using querySelector.

// But, textContent shows, selects and changes only the text inside the 
// element we've selected (not the HTML)

// Eg.
// document.querySelector("h1").innerHTML = "<strong>Hello</strong>";
// is possible with only innerHTML not with textContent

// document.querySelector("h1").textContent = "<strong>Good Bye!</strong>";
// can't happen. It even shows the tags on the webpage so its bad

// document.querySelector("h1").textContent = "Good Bye!";
// can happen.

// -------------------------------------------------------------------------------

// Attributes (Eg. src, class, href, name, type, value, id etc,..)
// everything inside the tag other than the tag name is an attribute

// by using
// document.querySelector("a").attributes;
// we'll get all the attributes of the element that we've selected.

// by using 
// document.querySelector("a").getAttribute("href");
// we'll get the value that attribute is pointing to.

// To change the value of the attribute we can use setAttribute method
document.querySelector("a").setAttribute("href", "https://www.bing.com");
// it takes two parameters/inputs
// attribute you want to change and what do you want to change it to.
// Afer executing this line whatever the text content is 
// this will takes us to this wonderful bing website that nobody has ever used
// in their life before.

//-----------------------------------------------------------------------------------------

// Tip:
// If you are exhausted for the day and learn or practice the skill you want to master
// and want to binge watch game of thrones and have a snack next to you and procrastinate

// Trick your mind and Just tell yourself that I'm gonna study for just 20 mins
// and after that I can do whatever I want and do it for 20 mins
// After that you'll get the momentum and you'll be continuing the work that you are doing

// If you can't concentrate more than that 20 mins nothing to lose there 
// you still had that 20 mins of study.
