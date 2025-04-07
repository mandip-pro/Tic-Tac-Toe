let playingArea=document.querySelectorAll(".box")
let resetGame=document.querySelectorAll(".reset")
let result=document.querySelector("#result")
let turnOfO=true

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

playingArea.forEach((boxes)=>{
    boxes.addEventListener("click",()=>{
        if(turnOfO){
            boxes.innerHTML="O"
            turnOfO=false
        }
        else{
            boxes.innerHTML="X"
            turnOfO=true
        }
        boxes.disabled=true
        winCheck()


    })
})
const winCheck=()=>{
        for(let win of winPatterns){
            pos1=playingArea[win[0]].innerText
            pos2=playingArea[win[1]].innerText
            pos3=playingArea[win[2]].innerText   
        
        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                result.innerText=("winner is "+ pos1)
                disableBoxes()
            }
        }
    }
}
const disableBoxes=(()=>{
    playingArea.forEach((box)=>{
        box.disabled=true
    })
})
resetGame.forEach((doIt)=>{
doIt.addEventListener("click" , ()=>{
    turnOfO=true
    playingArea.forEach((val)=>{
        val.innerHTML=""
        val.disabled=false
    })
})
})