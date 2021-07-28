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



// // ------------------------------------------ FOUR --------------------------------------------- //
// const colorArray = ["red", "blue", "gray", "green", "purple"];

// const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
// const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");
// const buttonSetColor = document.querySelector("#btnSetColor");
// const inputColor = document.querySelector("#inputColor");

// buttonRandomColorLIST.addEventListener("click", changeColor);
// // buttonRandomColorLIST.addEventListener("click", () => changeColor());
// // buttonRandomColorLIST.addEventListener("click", function() {changeColor()});

// buttonRandomColorRGB.addEventListener("click", changeColorRGB);
// buttonSetColor.addEventListener("click", setNewColor);


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

//  function setNewColor() {
//     const userInput = inputColor.value;

//     if (!isColor(userInput)) {
//         alert("not a valid color!");
//         inputColor.focus();
//         return;
//     }

//     // if (colorArray.indexOf(userInput) == -1) colorArray.push(userInput);

//     if (!colorArray.includes(userInput)) colorArray.push(userInput);
        
//     console.log(colorArray);

//     document.querySelector("body").style.backgroundColor = userInput;
//     document.querySelector("#colorName").innerHTML = userInput;
//     inputColor.value = "";
//     inputColor.focus();
//  }

//  function isColor(strColor){
//     var s = new Option().style;
//     s.color = strColor;
//     return s.color == strColor;
//   }



// ------------------------------------------ FIVE --------------------------------------------- //
const colorArray = [
    { name: "red", motto: "Rose Red" },
    { name: "blue", motto: "Ocean Blue" },
    { name: "gray", motto: "Smoke Gray" },
    { name: "green", motto: "Grass Green" },
    { name: "purple", motto: "Deep Purple" }
];

const buttonRandomColorLIST = document.querySelector("#btnRandomColorLIST");
const buttonRandomColorRGB = document.querySelector("#btnRandomColorRGB");
const buttonSetColor = document.querySelector("#btnSetColor");
const inputColor = document.querySelector("#inputColor");

buttonRandomColorLIST.addEventListener("click", changeColor);

buttonRandomColorRGB.addEventListener("click", changeColorRGB);
buttonSetColor.addEventListener("click", setNewColor);


function changeColor() {
    const randomIndex = Math.floor(Math.random() * colorArray.length);

    console.log(colorArray[randomIndex]);
    console.log(colorArray[randomIndex].name);

    document.querySelector("body").style.backgroundColor = colorArray[randomIndex].name;
    document.querySelector("#colorName").innerHTML = colorArray[randomIndex].name;
    document.querySelector("#colorDesc").innerHTML = colorArray[randomIndex].motto;

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

    const userInputSplitted = userInput.split(":");
    console.log(userInputSplitted);

    if (!isColor(userInputSplitted[0])) {
        alert(userInputSplitted[0] + " is not a valid color!");
        inputColor.focus();
        return;
    }

    if (userInputSplitted.length < 2 || userInputSplitted[1].trim() == "") {
        alert("invalid motto!");
        return;
    }

    const colorObj = {
        name: userInputSplitted[0],
        motto: userInputSplitted[1]
    }
    console.log(colorObj);

    if (colorArray.findIndex(color => color.name == colorObj.name) != -1 ) return;
    
    colorArray.push(colorObj);

    console.log(colorArray);

    document.querySelector("body").style.backgroundColor = colorObj.name;
    document.querySelector("#colorName").innerHTML = colorObj.name;
    document.querySelector("#colorDesc").innerHTML = colorObj.motto;

    inputColor.value = "";
    inputColor.focus();
 }

 function isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color == strColor;
  }