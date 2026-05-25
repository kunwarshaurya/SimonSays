let gameSeq = [];
let userseq = []
let isStarted = false;
let level = 0;
let btns = ["yellow","red","purple","green"];
let h2 =  document.querySelector("h2");

 function begin (){
    if(isStarted==false){
        console.log("Game started");
        isStarted = true;
        levelUp();
    }
    
}

function initiator(){
    document.addEventListener("keypress",begin)};

initiator();

function checkAns(){
    console.log(gameSeq);
    console.log(userseq)
    // let idx = level-1;
    let allPassed = true;
    for( i = 0;i<gameSeq.length;i++){
            if(gameSeq[i] === userseq[i]){
                continue
                
            }else{
                console.log("Game Over!")
                allPassed = false;
                break;
            }
    }
    if(allPassed){
        userseq.splice(0,userseq.length);
        setTimeout(levelUp,1000);

    }else{
        h2.innerHTML = `Game Over! Your Score was ${(level-1)*10}.<br>Press any key to start.`
        reset();
    }
}

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)    
}

function levelUp(){
    level++;
    document.querySelector("h2").innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randClr = btns[randomIdx];
    gameSeq.push(randClr);
    let randbtn = document.querySelector(`.${randClr}`);
    btnFlash(randbtn);
}
// if(isStarted==true){
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",function(e){
        if(!isStarted) return;
        userFlash(e.target)
        let userColor = e.target.getAttribute("id");
        // console.log(userColor)
        userseq.push(userColor);
        if(userseq.length===gameSeq.length){
             checkAns();
        }
       
    }
)} 
// }

function reset(){
    userseq = [];
    gameSeq = [];
    level = 0;
    isStarted=false;
    document.removeEventListener("keypress",begin);
    initiator();

    

}
