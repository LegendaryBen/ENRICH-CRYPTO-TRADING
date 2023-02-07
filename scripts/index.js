
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
let section4Child = query(".section4>a");
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
let section8 = query(".section8");

let reviews = [

    {
        image:"reviews/allwell.jpg",
        userNAme:"Allwell Benaiah",
        review:'"Navigating through the crypto space and understanding the dynamics of this ever-changing system for profit is what i\'ve learnt from Enrich.The are simple and apt."'
    },
    {
        image:"reviews/scar.jpg ",
        userNAme:"Scarra",
        review:'"Hi..\n I\'m Scarra \n One of the products of Enrich crypto trading academy.\n Ever since my training at the academy, i must say that i have been able to, a great extent,generate trading trading signals by & for myself;generate some cash to run my daily activities(self sustenance) and also increase my status with a high yield skil.\n My appreciation goes to MR. Enrich and his team."'
    },
    {
        image:"reviews/puka.jpg",
        userNAme:"Adael Moses Chimnagorom",
        review:'"I joined Enrich Crypto family \'August 2020\'..\n Since then, I have ran with the focus about the new normal~ CRYPTOCURRENCY.\n Through rigorous studies and research, I now have an edge in life .I fuel my dreams , assist my whole family and a whole lots more . Enrich is a blessing."'
    },
    {
        image:"reviews/abu.jpg",
        userNAme:"Ikhanoba Abu",
        review:'"Community is a big part of crypto success.Since i joined enrich i got access to meet great crypto traders, I had access to wide financial tips.\n I am a successful crypto trader also."'
    },
    {
        image:"reviews/divine.jpg",
        userNAme:"Chibuikem Divine",
        review:'" Enrich gave me my first tour into the crypto space, guiding me and teaching me all I needed to know to learn, It was tough at first but with constant practice,I got the hang of it,\nThank you Enrich❤️"'
    }
];



function loadReviews(){
    let div = "";
    let inner1 = query(".special1");
    let inner2 = query(".special2");

    for(let rev of reviews){
        div += `
    <div>
        <div>
           <img src="${rev.image}" alt="">
           <span>${rev.userNAme}</span> 
        </div>
        <div>
            ${rev.review}
        </div>
    </div> 
        `
    }

    for(let rev of reviews){
        div += `
    <div>
        <div>
           <img src="${rev.image}" alt="">
           <span>${rev.userNAme}</span> 
        </div>
        <div>
            ${rev.review}
        </div>
    </div> 
        `
    }

    inner1.innerHTML = div;
    inner2.innerHTML = div;
}







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
        playButton.src = "images/Pause.svg";
        // setTimeout(show,2000);
    }else{
        video.pause();
        e.stopPropagation();
        control3 = 0;
        playButton.src = "images/play.png";
        // setTimeout(show,0);
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
        let children = Array.from(this.parentNode.children);
        for(let height of children){
            count += height.offsetHeight;
        }
        this.parentNode.style.height = 50 + count + "px";
        this.children[1].children[0].style.transform = "rotate(180deg)";
        this.removeAttribute("dropped");
        this.setAttribute("dropped","true");
    }else{
        this.parentNode.style.height ="75px";
        this.children[1].children[0].style.transform = "rotate(0deg)";
        this.removeAttribute("dropped");
        this.setAttribute("dropped","false");
    }
}

async function getPrices(){
    let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2CRipple%2Cdogecoin%2Cbinancecoin&vs_currencies=ngn&include_market_cap=true&include_24hr_change=true&include_last_updated_at=true");
    let result = await res.json();
    let str = `     
    <div>
        <div class="sec">Name</div>
        <div class="sec">Last Price</div>
        <div class="sec show">24hr Change</div>
        <div class="sec show">Market Cap</div>
    </div>
    <div>
        <div class="coins logo">
            <img src="images/bitcoin.png" alt="">
            <div class="name">Bitcoin</div>
            <div class="symbol">BTC</div>
        </div>
        <div class="coins">
            NGN ${result.bitcoin.ngn}
        </div>
        <div class="coins show  ${result.bitcoin.ngn_24h_change < 0 ? 'red' : 'green'}">${result.bitcoin.ngn_24h_change}%</div>
        <div class="coins show">${result.bitcoin.ngn_market_cap}</div>
    </div>
    <div>
        <div class="coins logo">
            <img src="images/ethereum.png" alt="">
            <div class="name">Ethereum</div>
            <div class="symbol">ETH</div>
        </div>
        <div class="coins">
            NGN ${result.ethereum.ngn}
        </div>
        <div class="coins show ${result.ethereum.ngn_24h_change < 0 ? 'red' : 'green'}">${result.ethereum.ngn_24h_change}%</div>
        <div class="coins show">${result.ethereum.ngn_market_cap}</div>
    </div>
    <div>
        <div class="coins logo">
            <img src="images/bnb.png" alt="">
            <div class="name">Binance</div>
            <div class="symbol">BNB</div>
        </div>
        <div class="coins">
            NGN ${result.binancecoin.ngn}
        </div>
        <div class="coins show ${result.binancecoin.ngn_24h_change < 0 ? 'red' : 'green'}">${result.binancecoin.ngn_24h_change}%</div>
        <div class="coins show">${result.binancecoin.ngn_market_cap}</div>
    </div>
    <div>
        <div class="coins logo">
            <img src="images/solana.png" alt="">
            <div class="name">Solana</div>
            <div class="symbol">SOL</div>
        </div>
        <div class="coins">
            NGN ${result.solana.ngn}
        </div>
        <div class="coins show ${result.solana.ngn_24h_change < 0 ? 'red' : 'green'}">${result.solana.ngn_24h_change}%</div>
        <div class="coins show">${result.solana.ngn_market_cap}</div>
    </div>
    <div>
        <div class="coins logo">
            <img src="images/xrp.png" alt="">
            <div class="name">Ripple</div>
            <div class="symbol">XRP</div>
        </div>
        <div class="coins">
            NGN ${result.ripple.ngn}
        </div>
        <div class="coins show ${result.ripple.ngn_24h_change < 0 ? 'red' : 'green'}">${result.ripple.ngn_24h_change}%</div>
        <div class="coins show">${result.ripple.ngn_market_cap}</div>
    </div>
    <div style="border-bottom-color:rgba(79, 79, 79,0.3);">
        <div class="coins logo">
            <img src="images/dodge.png" alt="">
            <div class="name">Dogecoin</div>
            <div class="symbol">DOGE</div>
        </div>
        <div class="coins">
            NGN ${result.dogecoin.ngn}
        </div>
        <div class="coins show ${result.dogecoin.ngn_24h_change < 0 ? 'red' : 'green'}">${result.dogecoin.ngn_24h_change}%</div>
        <div class="coins show">${result.dogecoin.ngn_market_cap}</div>
    </div>

    `
    section8.innerHTML = str;
}


function loadImages(){
    let image1 = query(".image1");
    image1.src ="reviews/Vector.jpg";
    let image2 = query(".image2");
    image2.src="images/navmsg.png";
    let image3 = query(".image3");
    image3.src="images/whatsapp.png";
    let image4 = query(".image4");
    image4.src = "images/navphone.png";
    let image5 = query(".image5");
    image5.src = "reviews/Vector.jpg";
    let image6 = query(".image6");
    image6.src="images/ham.png";
    let image7 = query(".image7");
    image7.src="images/ham.png";
    let image8 = query(".image8");
    image8.src="images/msg.jpg";
    let image9 = query(".image9");
    image9.src="images/flame.jpg";
    let image10 = query(".image10");
    image10.src="images/lite.jpg";
    video.src="video/erc.mp4";
    playButton.src="images/play.png";
    let image11 = query(".image11");
    image11.src="images/Enrich-Advert.png";
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
loadImages();
loadReviews();
getPrices();