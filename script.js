// const pupils = document.querySelectorAll(".inner");
// window.addEventListener("mousemove", (e) => {
//   pupils.forEach((pupil) => {
//     // get x and y postion of cursor
//     var rect = pupil.getBoundingClientRect();
//     var x = (e.pageX - rect.left) / 25 + "px";
//     var y = (e.pageY - rect.top) / 30 + "px";
//     pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
//   });
// });



const eye = document.querySelector("#eyeball");
const eye1 = document.querySelector("#eyeball1");

document.onmousemove =(event)=>{
    var x=event.clientX *75/window.innerWidth+ "%";
    var y=event.clientY *75/window.innerHeight+ "%";
    eye.style.left=x;
    eye.style.top=y;
    eye1.style.left=x;
    eye1.style.top=y;

}

// var eye = document.querySelector("#eyeball1");

// document.onmousemove =(event)=>{
//     var x=event.clientX *100/window.innerWidth+ "%";
//     var y=event.clientY *100/window.innerHeight+ "%";

//     // eye.style.transition="0s";
//     eye.style.left=x;
//     eye.style.top=y;

// }