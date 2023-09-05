
var count1=Math.floor((Math.random()*6)+1);
var pics="dice"+count1+".png";
var loc="images/"+pics;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",loc);



var count2=Math.floor((Math.random()*6)+1);
var pics="dice"+count2+".png";
var loc="images/"+pics;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",loc);


if(count1>count2){
    document.querySelector("h1").innerHTML="player 1 wins";
}

else if(count2>count1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="its a draw";
}