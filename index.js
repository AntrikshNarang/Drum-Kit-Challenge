for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    
    function handleClick(){
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    }
}
    

// An example of an Anonymous Function 
// document.querySelector(".w").addEventListener("click",function (){
//     alert("I got Clicked");
// });