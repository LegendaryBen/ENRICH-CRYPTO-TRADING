
function query(a){
    return document.querySelector(a);
}


function listener(a,listen,name){
    return a.addEventListener(listen,name);
}

function queryAll(a){
    return document.querySelectorAll(a);
}


let section2First = query(".section2>div:first-child");
let section2second = query(".section2>div:last-child");
let section2 = query(".section2");
let contact = query(".third");
let contact2 = query(".newcontact>div");
let control = 0;
let control2 = 0;
let control3 = 0;
let hammenu1 = query(".hammenu");
let hammenu2 = query(".hammenu2");
let cancel = query(".cancel");
let ham = query(".ham");
let ham2 = query(".ham2");
let section3 = query(".section3");
let sec3Children = queryAll(".section3>div");
let section4 = query(".section4");
let section4Child = query(".section4>div");
let vidContainer = query(".section5>div>div:first-child")
let playParent = query(".playParent");
let video = query(".video");
let playButton = query(".play");
let load = query(".load");
let loadContainer = query(".loadContainer");
let section6 = query(".section6");
let sec6First = query(".section6>section:first-child");
let sec6Second = query(".section6>section:last-child");
let section10 = query(".section10");
let drops = queryAll(".drop");
let section11 = query(".section11");
let sec11Children = queryAll(".section11>div");
let checkTrans = 2.5;


function activateDrops(){
    for(let drop of drops){
        listener(drop,"click",showDrops);
    }
}


function show(){
    if(control2 == 0){
        vidContainer.style.opacity = "0";
        control2 = 1;
    }else{
        vidContainer.style.opacity = "1";
        control2 = 0;
    }
}

function playVideo(e){
    
    if(control3 == 0){
        video.play();
        e.stopPropagation();
        control3 = 1;
        setTimeout(show,2000);
    }else{
        video.pause();
        e.stopPropagation();
        control3 = 0;
        setTimeout(show,0);
    }
}


function showLoaded(){
    let update = (video.currentTime /video.duration) * 100;
    load.style.width = update + "%";

}


function scrollAnimate(){
    let scrollValue = window.scrollY;
    let section2Pos = section2.getBoundingClientRect().top;
    let section3Pos = section3.getBoundingClientRect().top;
    let section4Pos = section4.getBoundingClientRect().top;
    let section6POs = section6.getBoundingClientRect().top;
    let section11Pos = section11.getBoundingClientRect().top+2000;

    if(scrollValue < section2Pos){
        section2First.style.opacity = "0";
        section2First.style.transform = "translateY(270px)";
        section2second.style.opacity = "0";
        section2second.style.transform = "translateY(280px)";
    }else{
        section2First.style.opacity = "1";
        section2First.style.transform = "translateY(0px)";
        section2second.style.opacity = "1";
        section2second.style.transform = "translateY(0px)";
    }

    if(scrollValue < section3Pos){
        for(let i = 0;i<sec3Children.length;i++){
            sec3Children[i].style.opacity = "0";
            sec3Children[i].style.transform = "translateY(300%)";
        }
    }else{
        for(let i = 0;i<sec3Children.length;i++){
            sec3Children[i].style.opacity = "1";
            sec3Children[i].style.transform = "translateY(0%)";
        }
    }

    if(scrollValue < section4Pos){
        section4Child.style.opacity = "0";
        section4Child.style.transform = "translateY(400%)";
    }else{
        section4Child.style.opacity = "1";
        section4Child.style.transform = "translateY(0%)";
    }

    if(scrollValue < section6POs){
        sec6First.style.opacity = "0";
        sec6Second.style.opacity = "0";
        sec6First.style.transform = "translateX(-100%)";
        sec6Second.style.transform = "translateX(100%)";
    }else{

        sec6First.style.opacity = "1";
        sec6Second.style.opacity = "1";
        sec6First.style.transform = "translateX(0%)";
        sec6Second.style.transform = "translateX(0%)";
    }

    if( scrollValue < section11Pos){
        for(let div of sec11Children){
            checkTrans = 0.5;
            div.style.transition = checkTrans + "s";
            div.style.opacity = "0";
            div.style.transform = "translateY(700px)";
        }
    }else{
        for(let div of sec11Children){
            checkTrans += 0.7;
            div.style.transition = checkTrans + "s";
            div.style.opacity = "1";
            div.style.transform = "translateY(0px)";
        }

        setTimeout(function(){
            for(let div of sec11Children){
                div.style.transition = "1s";
                div.style.opacity = "1";
                div.style.transform = "translateY(0px)";
            }
        },500);

    }

}

function dropDown1(){
    hammenu1.style.top = "0";
    hammenu1.style.height = "100vh";
    hammenu1.style.overflow = "auto";
}

function goUp(){
    hammenu1.style.height = "0vh";
    hammenu1.style.top = "-150%";
    hammenu1.style.overflow = "hidden";
}

function goUp2(){

    if(control == 0){
        hammenu2.style.height = "100vh";
        this.src = "images/cancel.png";
        control = 1
    }else{
        hammenu2.style.height = "0vh";
        this.src = "images/ham.png";
        control = 0;
    }

}

function updateLoad(e){
    video.currentTime = (e.offsetX/this.clientWidth) * video.duration;
}

function showDrops(){
    let check = this.getAttribute("dropped");
    if(check == "false"){
        let count = 0
        let children = Array.from(this.parentNode.parentNode.parentNode.children);
        for(let height of children){
            count += height.offsetHeight;
        }
        this.parentNode.parentNode.parentNode.style.height = 50 + count + "px";
        this.style.transform = "rotate(180deg)";
        this.removeAttribute("dropped");
        this.setAttribute("dropped","true");
    }else{
        this.parentNode.parentNode.parentNode.style.height ="60px";
        this.style.transform = "rotate(0deg)";
        this.removeAttribute("dropped");
        this.setAttribute("dropped","false");
    }
}


listener(ham2,"click",goUp2);
listener(cancel,"click",goUp);
listener(ham,"click",dropDown1);
listener(window,"scroll",scrollAnimate);
listener(contact,"click",dropDown1);
listener(contact2,"click",dropDown1);
listener(vidContainer,"click",show);
listener(playButton,"click",playVideo);
listener(video,"timeupdate",showLoaded);
listener(loadContainer,"click",updateLoad)
activateDrops();