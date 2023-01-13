
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
let hammenu1 = query(".hammenu");
let hammenu2 = query(".hammenu2");
let cancel = query(".cancel");
let ham = query(".ham");
let ham2 = query(".ham2");
let section3 = query(".section3");
let sec3Children = queryAll(".section3>div");



function scrollAnimate(){
    let scrollValue = window.scrollY;
    let section2Pos = section2.getBoundingClientRect().top;
    let section3Pos = section3.getBoundingClientRect().top;

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
        hammenu2.style.height = "80vh";
        this.src = "images/cancel.png";
        control = 1
    }else{
        hammenu2.style.height = "0vh";
        this.src = "images/ham.png";
        control = 0;
    }

}

listener(ham2,"click",goUp2);
listener(cancel,"click",goUp);
listener(ham,"click",dropDown1);
listener(window,"scroll",scrollAnimate);
listener(contact,"click",dropDown1);
listener(contact2,"click",dropDown1);