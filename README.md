# Lawnmower-Game

Welcome to the lawnmower game README file! Here you can read up on how the game works both as a player and a coder.

## Overview

In this game, the player is a new landscaper with no money in the bank and only teeth with which to cut grass.

Through this game the player earns money by cutting grass, which enables the purchase of new tools. The game ends when the user has a team of robot students to help cut grass, as well as at least $1,000 in savings.

The game consists of turns in which the player selects a tool and earns money for using the tool that day. The player can buy a new tool at the end of the turn in which a certain savings amount has been achieved. The tools are:

\- A pair of scissors for 5 dollars

\- An old mower for 25 dollars

\- A new mower for 250 dollars

\- A team of robot students for 500 dollars

## The Code

In this section we'll go over the process through which the game operates.

### the toolBox array

This array keeps track of the tools the user has accumulated. For each tool, the cost of each tool, the income the tool produces, and whether or not it is in the toolbox are represented by an object. There is an object for each tool in the array.

### function Main()

This function is the heart of the game and it generates the turns mentioned earlier. A WHILE loop evaluates the tool set and the savings amount to determine if the game has finally been won or not.

### function incrementSavings()

This function increases the player's savings as income is earned.

### function buildToolList()

This function evaluates how many tools the player has accumulated and presents a list to choose from at the start of every turn.

### function buyATool()

This function is invoked when a user has enough money in savings to buy the next tool. If the user chooses to buy the tool, the savings is reduced by the price of the tool, and the inToolBox property of the tool's object is given the value of true.