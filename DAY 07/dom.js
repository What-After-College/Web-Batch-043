// function changeheading(){
//     document.getElementById("firstheading").innerText = "hello again";
// }


// function changeheading(){
//     document.getElementsByClassName("firstheading")[2].innerText = "hello again";
// }

// function changeheading(){
// for(let i=0;i<3;i++){
//     document.getElementsByClassName("firstheading")[i].innerText = "hello again";
// }
// }


// function changeheading(){
//     document.getElementsByTagName("h1")[1].innerText = "hello again";
// }


// let x = document.getElementById("div1").innerText;
// console.log(x);


// function changeheading(){
//     document.getElementById("firstheading").style.color = "red";
// }
// function changeheading2(){
//     document.getElementById("firstheading").style.color = "black";
// }

// function changeurl(){
//     document.getElementById("atag").href = "https://yahoo.com";
// }



// let x = document.createElement("h1");
// let y = document.createTextNode("this is a heading");

// let z = x.appendChild(y);


// document.getElementById("div1").appendChild(z);

// function rmv(){
//     document.getElementById("p2").remove();
// }


function rmv(){
    let x = document.createElement("p");
    let y = document.createTextNode("this is my new para");

    x.appendChild(y);

    let z=document.getElementById("p2");
    document.getElementById("div1").replaceChild(x,z);
}
