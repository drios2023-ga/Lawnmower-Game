

let savings = 0;
let toolBox = [];
let toolList = "";

toolBox.push({
            tool:'teeth',
            cost:0,
            income:1,
            inTheBox: 1
});

toolBox.push({
            tool:'scissors',
            cost:5,
            income:5,
            inTheBox: 0
});

toolBox.push({
            tool:'used mower',
            cost:25,
            income:50,
            inTheBox: 0
});

toolBox.push({
            tool:'new mower',
            cost:250,
            income:100,
            inTheBox: 0
});

toolBox.push({
            tool:'team of students',
            cost:500,
            income:250,
            inTheBox: 0
});

console.log("--------------------------------------");

console.log(toolBox);

//let name = prompt("What is your name? : ");
function buildToolList(){
  for(i=0;i<5;i++){
      if (toolBox[i].inTheBox===1){
        toolList = toolList + "[" + i + "] " + toolBox[i].tool + "\n"
      }
        
    
  }
console.log(toolList);
}


// function main(){
//   do while (toolBox[4].inTheBox === 0 && savings <1000){
  
    
          
  
  
    
//   }
// }    


buildToolList();

// console.log(toolBox[0]);
// console.log(toolBox[0].tool);
// console.log(toolBox[0].cost);
// console.log(toolBox[0].income);
// console.log(toolBox[0].inTheBox);




