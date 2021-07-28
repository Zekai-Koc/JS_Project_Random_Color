// ----------------------------------- ONE ---------------------------------------------------- //
// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
// }



// ------------------------------------ TWO --------------------------------------------------- //
// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
//     // document.querySelector("#colorName").innerText = colorArray[randomIndex];
//     // document.querySelector("#colorName").textContent = colorArray[randomIndex];
//     document.querySelector("#colorName").innerHTML = colorArray[randomIndex];
// }



// ------------------------------------- THREE -------------------------------------------------- //
// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
// const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

// buttonRandomColorRGB.addEventListener("click", changeColorRGB);


// function changeColor() {
//     const randomIndex = Math.floor(Math.random() * colorArray.length);
//     // console.log(randomIndex);
//     // console.log(colorArray[randomIndex]);

//     document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
//     // document.querySelector("#colorName").innerText = colorArray[randomIndex];
//     // document.querySelector("#colorName").textContent = colorArray[randomIndex];
//     document.querySelector("#colorName").innerHTML = colorArray[randomIndex];

// }

// function changeColorRGB() {
//     const colorR = Math.floor(Math.random() * 255);
//     const colorG = Math.floor(Math.random() * 255);
//     const colorB = Math.floor(Math.random() * 255);
 
//     document.querySelector("body").style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
//     document.querySelector("#colorName").innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
//  }



// ------------------------------------------ FOUR --------------------------------------------- //
const colorArray = ["red", "blue", "gray", "green", "purple"];

const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");
const buttonSetColor = document.querySelector("#btnSetColor");
const inputColor = document.querySelector("#inputColor");

buttonRandomColorLIST.addEventListener("click", changeColor);
// buttonRandomColorLIST.addEventListener("click", () => changeColor());
// buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

buttonRandomColorRGB.addEventListener("click", changeColorRGB);
buttonSetColor.addEventListener("click", setNewColor);


function changeColor() {
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    // console.log(randomIndex);
    // console.log(colorArray[randomIndex]);

    document.querySelector("body").style.backgroundColor = colorArray[randomIndex];
    // document.querySelector("#colorName").innerText = colorArray[randomIndex];
    // document.querySelector("#colorName").textContent = colorArray[randomIndex];
    document.querySelector("#colorName").innerHTML = colorArray[randomIndex];

}

function changeColorRGB() {
    const colorR = Math.floor(Math.random() * 255);
    const colorG = Math.floor(Math.random() * 255);
    const colorB = Math.floor(Math.random() * 255);
 
    document.querySelector("body").style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    document.querySelector("#colorName").innerHTML = `rgb(${colorR}, ${colorG}, ${colorB})`;
 }

 function setNewColor() {
    const userInput = inputColor.value;

    if (!isColor(userInput)) {
        alert("not a valid color!");
        inputColor.focus();
        return;
    }

    // if (colorArray.indexOf(userInput) == -1) colorArray.push(userInput);

    if (!colorArray.includes(userInput)) colorArray.push(userInput);
        
    console.log(colorArray);

    document.querySelector("body").style.backgroundColor = userInput;
    document.querySelector("#colorName").innerHTML = userInput;
    inputColor.value = "";
    inputColor.focus();
 }

 function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }