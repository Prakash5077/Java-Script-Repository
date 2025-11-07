//Syntax for Print output

/*
console.log(`I like pizza!`);
console.log("I like Chicken");
console.log('I like Egg');
*/

//Syntax for PopUp

/*
window.alert("This is an Alert!");
window.alert("I love Football!");
*/

//Print text using id in html with js

/*document.getElementById("myH1").textContent="Hello";
document.getElementById("myP").textContent="I like Burger";
*/

// Variables
/*
let x=123;
let firstName="Prakash";
let gpa=8.9;
*/
//Normal printing without any sentence
/*
console.log(x);
console.log(firstName);
console.log(gpa);

// For using Sentence ->  `  ${} `
console.log(`The FirstName is ${firstName}`); 
console.log(`The gpa is ${gpa}`);

//For check the data type
console.log(typeof gpa);
console.log(typeof firstName);
console.log(typeof x);




let username;
document.getElementById("mySubmit").onclick=function(){
    username=document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent= `Hello ${username}`
}

*/
/* const myBox=document.getElementById("myBox");
const moveAmount=10;
let x=0;
let y=0;
document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }
});
*/

const myBox=document.getElementById("myBox");
const myButton=document.getElementById("myButton");

myButton.addEventListener("click", event =>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent="OOPS!😑"
});

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor="Yellow";
    myBox.textContent="Dont Do It 🤬";
});

myButton.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="lightGreen";
    myBox.textContent="Click Me😁"
});