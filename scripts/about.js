function query(a){
    return document.querySelector(a)
}

function queryAll(a){
    return document.querySelectorAll(a)
}

function listener(element,eventType,callback){
    return element.addEventListener(eventType,callback)
}

let control = 0;
let controlTransitions = 0;
let section3 = query(".section3");
let sec3Children = queryAll(".section3>div");
let section4 = query(".section4");
let sec4Children = queryAll(".section4>div");
let ham1 = query(".hammenu");
let ham2 = query(".ham");
let ham3 = query(".ham2");
let ham = query(".hammenu2");
let contact = query(".third");
let cancelHam1 = query(".cancel");
let hover = query(".hover");


function scrollAnimate(){
    let scrollVAlue = window.scrollY;
    let section3Pos = section3.getBoundingClientRect().top;
    let section4Pos = section4.getBoundingClientRect().top;

    if(scrollVAlue < section3Pos){
        for (div  of sec3Children) {
            div.style.opacity = "0";
            div.style.transform = "translateY(400px)";
        }
    }else{
        for (div  of sec3Children) {
            div.style.opacity = "1";
            div.style.transform = "translateY(0%)";
        }
    }

    if(scrollVAlue < section4Pos + 300){
        for(let div of sec4Children){
            controlTransitions = 0.8;
            div.style.transition = controlTransitions + "s";
            div.style.opacity = "0";
            div.style.transform = "translateY(700px)";
        }
    }else{
        for(let div of sec4Children){
            controlTransitions += 1;
            div.style.transition = controlTransitions + "s";
            div.style.opacity = "1";
            div.style.transform = "translateY(0%)";
        }
        setTimeout(function(){
            for(let div of sec4Children){
                div.style.transition = "0.8s";
            }
        },500)
    }
    
}

function dropDown1(){
    ham1.style.top = "0";
    ham1.style.height = "100vh";
    ham1.style.overflow = "auto";
}

function goUp(){
    ham1.style.height = "0vh";
    ham1.style.top = "-150%";
    ham1.style.overflow = "hidden";
}

function goUp2(){

    if(control == 0){
        ham.style.height = "100vh";
        this.src = "images/cancel.png";
        control = 1
    }else{
        ham.style.height = "0vh";
        this.src = "images/ham.png";
        control = 0;
    }

}

function loadImages(){
    let img1 = query(".img1");
    img1.src = "team/richard.jpg";
    let img2 = query(".img2");
    img2.src = "team/allwell.jpg";
    let img3 = query(".img3");
    img3.src = "team/benj.jpg";
    let img4 = query(".img4");
    img4.src = "team/flexzon.jpg";
    let img5 = query(".img5");
    img5.src = "team/IMG-20230102-WA0066.jpg";
    let img6 = query(".img6");
    img6.src = "team/puka.jpg";
}




listener(window,"scroll",scrollAnimate);
listener(contact,"click",dropDown1);
listener(ham2,"click",dropDown1);
listener(hover,"click",dropDown1);
listener(cancelHam1,"click",goUp);
listener(ham3,"click",goUp2);
loadImages();




