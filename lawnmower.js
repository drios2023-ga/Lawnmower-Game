
const prompt = require('prompt-sync')();

let savings = 0;
let toolBox = [];
let toolList = "";
let tool = "";
let buyTool = "";

toolBox.push({
  tool: 'teeth',
  cost: 0,
  income: 1,
  inTheBox: true
});

toolBox.push({
  tool: 'pair of scissors',
  cost: 5,
  income: 5,
  inTheBox: false
});

toolBox.push({
  tool: 'used mower',
  cost: 25,
  income: 50,
  inTheBox: false
});

toolBox.push({
  tool: 'new mower',
  cost: 250,
  income: 100,
  inTheBox: false
});

toolBox.push({
  tool: 'team of robot students',
  cost: 500,
  income: 250,
  inTheBox: false
});


//let name = prompt("What is your name? : ");
function buildToolList() {
  for (i = 0; i < 5; i++) {
    if (toolBox[i].inTheBox === true) {
      toolList = toolList + "[" + i + "] " + toolBox[i].tool + "\n"
    }


  }
  console.log(toolList);
}

function incrementSavings(tool) {
  savings = savings + toolBox[tool].income;
  console.log("Congrats! You earned " + toolBox[tool].income +
    " dollar(s) cutting grass with your " + toolBox[tool].tool + ".\n");

}

function buyATool(tool) {
  const nextTool = parseInt(tool) + 1;

  if (tool < 4 && toolBox[nextTool].inTheBox === false && savings >= toolBox[nextTool].cost) {
    console.log("You have " + savings + " dollars in  your savings. Would you like to buy a " + toolBox[nextTool].tool + "?:")
    buyTool = prompt("(y/n)");
    if (buyTool === 'y') {
      savings = savings - toolBox[nextTool].cost;
      toolBox[nextTool].inTheBox = true;

    }
  }
}

function main() {

  const username = prompt('What is your name? ');
  console.log(`Your name is ${username} and you are a landscaper!`);

  while (savings < 1000 || toolBox[4].inTheBox === false) {

    //pick a tool to use
    buildToolList();
    console.log("You have " + savings + " dollar(s) in your savings.\n")
    console.log("Here are the tools in your toolbox. Which one would you like to use today?: ")
    tool = prompt("");

    //confirm tool is in the box and increment savings
    if (toolBox[tool].inTheBox === true) {
      incrementSavings(tool);
      //clear tool list
      toolList = "";

      //offer a chance to buy a tool
      buyATool(tool);
      
      console.log("---------------------------------------------------------------");

    }
    else {
      console.log("Uh oh. You picked a tool that isn't in your toolbox.")
      toolList = "";
    }
  }
  console.log("---------------------------------------------------------------");
console.log("Congrats! You earned " + savings + " dollars! Now you can retire!");
console.log("---------------------------------------------------------------");
console.log("---------------------------THE END------------------------------");
console.log("---------------------------------------------------------------");
}


main();




