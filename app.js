let gameSeq=[];
let userSeq=[];
let start = false;
let level = 0;
let h2=document.querySelector('h2');
let btns=["yellow","green","red","purple"];
document.addEventListener('keypress',function(){
    if(start == false){
        console.log("Game Started");
        start=true;
        levelUp();
    }
});
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
           setTimeout(levelUp,1000);
        }

    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b><br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";
        },150);
        reStart();
    }

//console.log("current level",level);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);

}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    //console.log(randIdx);
    //console.log(randColor);
    //console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameFlash(randBtn);

}
function butnPress(){
   let btn=this;
   userFlash(btn);

   userColor =btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);


}
let allBtns =document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click',butnPress);
}
function reStart(){
    start=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}