let boxes = document.querySelectorAll(".box");
let resetbtn =document.querySelector("#reset-btn");
let newgamebtn =document.querySelector("#new-btn");
let msgcontaniner = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turn0 = true;

const winpattens =[
  [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

];
const resetgame =() => {
   turn0 =true;
   enableboxes();
   msgcontaniner.classList.add("hide");
};

  boxes.forEach((box) => {
  box.addEventListener("click", () =>{
    console.log("box was clicked");
    if(turn0){ 
      box.innerHTML ="<h3>0</h3>";
      box.style.color="red";
      turn0 = false;
    }else{
      box.innerHTML="<h3>x</h3>";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();

  });
});
  const disabledboxes =() => {
    for(let box of boxes){
      box.disabled =true;
    }
  };

  const enableboxes =() => {
    for(let box of boxes){
      box.disabled =true;
      box.innerHTML ="";
      msg.innerHTML="";
    }
  };
   
  const showwinner= (winner) => {
    msg.style.color="rgb(43, 246, 20)";
    alert(msg.innerHTML=`congratulations, winner is ${winner}`);
//  msgcontaniner.classList.remove("hide");
    disabledboxes();
  };

 const checkwinner = () =>{
  for(let pattern of winpattens){
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
      if (pos1val === pos2val && pos2val === pos3val){
        console.log("winner",pos1val);
        showwinner(pos1val);
      }
    }
  }
 };
const reseload = () =>{
 window.location.reload();
  }

newgamebtn.addEventListener("click",reseload);
resetbtn.addEventListener("click",resetgame);
