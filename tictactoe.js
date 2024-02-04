let boxes=document.querySelectorAll(".box");
let restes=document.querySelector("#reset");
let wins=document.querySelector("#win");
let newt=document.querySelector("#start");
let oop=document.querySelector(".oops");
let turn0=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8],


]
const reste=()=>{
     turn0 =true;
    enabledbtb();
    oop.classList.add("hide");

}
const color=()=> {
    if(turn0==true){
        document.boxes.style.color="red";
    

    }
    else if(turn0==false){
        document.boxes.style.color="black";
    }
}

boxes.forEach ((box) => {
    box.addEventListener("click",()=>{
        
        if(turn0){
            box.innerText="O";
            
        turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        
        checkwinner();
        });
    });
    const showwinner = (winner) =>{
wins.innerText= `congratulaion winner is ${winner}`;
 oop.classList.remove("hide");
    }
    const enabledbtb =()=>{
        for (const box of boxes) {
            box.disabled=false;
            box.innerText="";
        }}
    const disabledbtb =()=>{
        for (const box of boxes) {
            box.disabled=true;
        }
    }
        const checkwinner = () =>{
            for (const pattern of winpatterns) {
        
            
                    let pos1val=boxes[pattern[0]].innerText;
                    let pos2val=boxes[pattern[1]].innerText;
                   let pos3val =boxes[pattern[2]].innerText;
                   
                if(pos1val!="" && pos2val!="" &&pos3val!=""){
                if(pos1val==pos2val&&pos2val==pos3val){
                    console.log("winner",pos1val);
                    disabledbtb();
                    showwinner(pos1val);
                }
                else if(pos1val!=pos2val&&pos2val!=pos3val){
                    console.log("match draw");
                    wins.innerText="match drawn";
                    oop.classList.remove("hide");
                    disabledbtb();
                }
            }
        }
    }
    restes.addEventListener("click",reste);
    
    newt.addEventListener("click",reste);
    
