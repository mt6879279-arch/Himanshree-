function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page"+page).classList.add("active");

if(page===2){
typeMessage();
}

}

const message=`Hey Himanshri 💗🌷🎀

I know you weren't feeling well.

I really wish I could've been there for you.

It made me sad knowing you stayed hungry while being upset.

I never wanted you to feel alone.

Meeting you unexpectedly became one of the best things that ever happened to me.

You're one of the most special people in my life.

Please don't stay angry for too long...

I miss my best friend. 🥹❤️`;

let i=0;
let started=false;

function typeMessage(){

if(started) return;

started=true;

const target=document.getElementById("typing");

function typing(){

if(i<message.length){

target.innerHTML+=message.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

const no=document.getElementById("no");

no.addEventListener("mouseover",()=>{

const x=Math.random()*250-125;

const y=Math.random()*180-90;

no.style.transform=`translate(${x}px,${y}px)`;

});

document.getElementById("yes").onclick=function(){

document.querySelectorAll(".page").forEach(p=>{

p.classList.remove("active");

});

document.getElementById("page4").classList.add("active");

confetti({

particleCount:200,

spread:180,

origin:{y:.6}

});

}

function heart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="💗";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(18+Math.random()*25)+"px";

document.querySelector(".hearts").appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(heart,350);
