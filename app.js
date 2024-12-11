let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let NewGame = document.querySelector("new-gamebtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const Resetgame = () => {
    turnO = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const disabledboxes =  () => {
    for(let box of boxes){
        box.disabled = true;
    }
} 

const enabledboxes =  () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
} 


const showwinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner = () => {
    for(pattern of winpatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" &&  pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showwinner(pos1Val);
            }
        }
    }
};


newgamebtn.addEventListener("click",Resetgame);
resetbtn.addEventListener("click",Resetgame);













