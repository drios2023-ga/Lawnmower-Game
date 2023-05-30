

let savings = 0;
let toolBox = [];
let toolList = "";
let tool = "";
let buyTool = "";

toolBox.push({
            tool:'teeth',
            cost:0,
            income:1,
            inTheBox: true
});

toolBox.push({
            tool:'scissors',
            cost:5,
            income:5,
            inTheBox: false
});

toolBox.push({
            tool:'used mower',
            cost:25,
            income:50,
            inTheBox: false
});

toolBox.push({
            tool:'new mower',
            cost:250,
            income:100,
            inTheBox: false
});

toolBox.push({
            tool:'team of students',
            cost:500,
            income:250,
            inTheBox: false
});

console.log("--------------------------------------");

console.log(toolBox);

//let name = prompt("What is your name? : ");
function buildToolList(){
  for(i=0;i<5;i++){
      if (toolBox[i].inTheBox===true){
        toolList = toolList + "[" + i + "] " + toolBox[i].tool + "\n"
      }
        
    
  }
  console.log(toolList);
}

function incrementSavings(tool){
  savings = savings + toolBox[tool].income;
  console.log("Congrats! You earned " + toolBox[tool].income + 
              " dollar(s) cutting grass with your " + toolBox[tool].tool + ".\n");

}

function buyATool(tool){
  if(toolBox[tool]<4 && toolBox[tool+1].inTheBox===false && savings >= toolBox[tool+1].cost){
    buyTool = prompt("Would you like to buy a " + toolBox[tool+1].tool + "?: (y/n)\n");
    if (buyTool = 'y'){
      savings = savings - toolBox[tool+1].cost;
      toolBox[tool+1].inTheBox = true;
    }
  }
}

function main(){
  while (toolBox[4].inTheBox === false && savings <1000){
    
    //pick a tool to use
    buildToolList();
    console.log("You have " + savings + " dollars in your savings.\n")
    tool = prompt("Here are the tools in your toolbox. Which one would you like to use today?: ");
    
    //confirm tool is in the box and increment savings
    if (toolBox[tool].inTheBox===true){
      incrementSavings(tool);
      //clear tool list
      toolList = "";

      //offer a chance to buy a tool
      buyATool(tool);

    }
    else {
      console.log("Uh oh. You picked a tool that isn't in your toolbox.")
    }      
  }
}    


main();


// console.log(toolBox[0]);
// console.log(toolBox[0].tool);
// console.log(toolBox[0].cost);
// console.log(toolBox[0].income);
// console.log(toolBox[0].inTheBox);




