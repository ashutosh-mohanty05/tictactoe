let boxes = document.querySelectorAll(".box")
let button=document.querySelector("#btn")
let newgamebtn=document.querySelector("#newg")
let message=document.querySelector("#ms")
let containermsg=document.querySelector(".msg")

let turn0=true//playerx,playery
let count=0;//to track draw
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

const resetgame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
containermsg.classList.add("hide")
    
}
// function clearboxes(){
//     boxes.forEach(box =>{
//         box.style.display='none'
//     })
// }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
     if(turn0){   //player0
        box.innerText="0";
       box.style.color="black" 
        turn0=false;
     }else{   //playerX
        box.innerText="X";
        turn0=true;
        box.style.color="rgb(117, 7, 7)"
     }
     box.disabled=true;
     count++;
     let isWinner=checkwinner()
     if (count===9 && !isWinner){
        gameDraw();
     }
    })
})
const gameDraw=()=>{
    message.innerText=`GAME IS DRAW`
    containermsg.classList.remove("hide")
    disableBoxes()
}

  const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }
const showwinner=(winner)=>{
    message.innerText=`CONGRATULATION, WINNER IS ${winner} `
    containermsg.classList.remove("hide")
    disableBoxes()
    // clearboxes()
}

const checkwinner=()=>{
    for(let pattern of winPattern){
        let posVal= boxes[pattern[0]].innerText;
        let posVa2= boxes[pattern[1]].innerText;
        let posVa3= boxes[pattern[2]].innerText;
    
        if(posVal !="" && posVa2 !="" && posVa3 !=""){
            if(posVal===posVa2 && posVa2===posVa3){
            showwinner(posVal)
            return true;
            }
        }
}}

newgamebtn.addEventListener("click",resetgame);
button.addEventListener("click",resetgame);