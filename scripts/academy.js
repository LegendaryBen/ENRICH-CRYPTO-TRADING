function query(a){
    return document.querySelector(a)
}

function queryAll(a){
    return document.querySelectorAll(a)
}

function listener(element,eventType,callback){
    return element.addEventListener(eventType,callback)
}

let contact = query(".third");
let contact2 = query(".change");
let ham1 = query(".hammenu");
let cancel1 = query(".cancel");
let ham = query(".ham");
let ham2 = query(".ham2");
let control = 0;
let ham3 = query(".hammenu2");
let color1 = query(".first a");


function goUp(){
    ham1.style.height = "0vh";
    ham1.style.top = "-150%";
    ham1.style.overflow = "hidden";
}

function dropDown1(){
    ham1.style.top = "0";
    ham1.style.height = "100vh";
    ham1.style.overflow = "auto";
}

function goUp2(){

    if(control == 0){
        ham3.style.height = "100vh";
        this.src = "images/cancel.png";
        control = 1
        color1.style.color = "black";
    }else{
        ham3.style.height = "0vh";
        this.src = "images/new ham.png";
        control = 0;
        color1.style.color = "white";
    }

}

function scrollUp(){
    let scrollValue = window.scrollY;
}


listener(contact,"click",dropDown1);
listener(contact2,"click",dropDown1);
listener(ham,"click",dropDown1);
listener(cancel1,"click",goUp);
listener(ham2,"click",goUp2);