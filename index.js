var btn = document.querySelector(".btn");
var body = document.querySelector("body");

btn.onclick=()=>
{
    var renk1=Math.round(Math.random()*255);
    var renk2=Math.round(Math.random()*255);
    var renk3=Math.round(Math.random()*255);
    document.body.style.backgroundColor="rgb("+renk1+","+renk2+","+renk3+")";
}

