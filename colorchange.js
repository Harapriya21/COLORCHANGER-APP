function randomColor(){
var letters="0123456789ABCDEF"
var color="#"
for(var i=0;i<6;i++){
var r=Math.floor(Math.random()*16)
color=color+letters[r]
}
return color
}
var h1=document.querySelector("h1")
var p1=document.querySelector("#firstp")
var p2=document.querySelector("#secondp")
var ul1=document.querySelector("#firstul")
var ul2=document.querySelector("#secondul")
var h21=document.querySelector("#firsth2")
var h22=document.querySelector("#secondh2")
function colorChange(){
h1.style.color=randomColor()
p1.style.color=randomColor()
p2.style.color=randomColor()
ul1.style.color=randomColor()
ul2.style.color=randomColor()
h21.style.color=randomColor()
h22.style.color=randomColor()
}
setInterval(colorChange,1000)
