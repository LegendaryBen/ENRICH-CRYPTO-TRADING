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

function loadImages(){
    let image1 = query(".image1");
    image1.src="reviews/Vector.jpg";
    let image2 = query(".image2");
    image2.src="images/navmsg.png";
    let image3 = query(".image3");
    image3.src="images/whatsapp.png";
    let image4 = query(".image4");
    image4.src="images/navphone.png";
    let image5 = query(".image5");
    image5.src="reviews/Vector.jpg";
    let video = query(".video1");
    video.src="video/background.mp4";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    let video2 = query(".video");
    video2.style.backgroundImage = "url('../images/Background\ video.gif')";
}


listener(contact,"click",dropDown1);
listener(contact2,"click",dropDown1);
listener(ham,"click",dropDown1);
listener(cancel1,"click",goUp);
listener(ham2,"click",goUp2);
loadImages();