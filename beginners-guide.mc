# The Beginners Guide to DAX
Welcome, to the wide world of Desmos! 

Before I can teach you about DAX, I need you to understand that the official desmos's API....**SUCKS**.  

DAX is a wrapper for the API that makes it cleaner, faster and easier to use. 

## Getting Started
Getting Started with DAX is simple. Add a few things to your html header, type a few lines of code, and BAM! You got Desmos!

* Replace with the path to your javascript file where you're gonna write code
```json
<script> var MAIN_JS_FILE = 'test/script.js'</script>
```
* Just adds Ajax. Just add it, doesn't need explanation 
```json
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
```
Imports the Desmos API so that DAX can interact with it
```json
<script src="https://www.desmos.com/api/v1.7/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"></script>
```
Runs DAX's module.js file. Simple.
```json
<script type="text/javascript" src="DAX/module.js"></script>
```
Finally, go into your javascript file where you're gonna write your code and paste this at the top. It just makes an object / screen for us to interact with DAX
```js
const Main_Object = new DAX_OBJECT(  
    DAX_PARENT_OBJECT, {  
        Element: DAX_MAIN_ELEMENT,  
    }      
)  
  
const Screen = new DAX_OBJECT(  
    DAX_CHILD_OBJECT, {  
        Element: DAX_DISPLAY_SCREEN,  
    }  
)
```

# Code Examples
## Creating A Graphing Calculator
```js
// Create A Graphing Calculator Object and pass in the screen
const graphingCalc = Main_Object.loadGraphingCalculator(Screen);

// Define a Tick Method. Can do whatever, runs every tick.
function Tick(){  
    console.log("Graph Ticked!")  
}

// Define a gameLoop method. Usually just calls tick method
function gameLoop(){  
	// Set the Graphing Calcs Tick Method to the one we defined
    graphingCalc.onTick(Tick());
}

// Start the Graphing Calculator + pass in the gameLoop
graphingCalc.startExecution(gameLoop());
```
## Creating A Scientific Calculator
```js
// Create A Scientifc Calculator Object and pass in the screen
const scientificCalc = Main_Object.loadScientific(Screen);

// Define a Tick Method. Can do whatever, runs every tick.
function Tick(){  
    console.log("Scientific Calculator Ticked!")  
}

// Define a gameLoop method. Usually just calls tick method
function gameLoop(){  
	// Set the Scientifc Calcs Tick Method to the one we defined
    scientificCalc.onTick(Tick());
}

// Start the Scientifc Calculator + pass in the gameLoop
scientificCalc.startExecution(gameLoop());
```
## Creating A Four-Function Calculator
```js
// Create A Four-Function Calculator Object and pass in the screen
const fourFunctionCalc = Main_Object.loadFourFunction(Screen);

// Define a Tick Method. Can do whatever, runs every tick.
function Tick(){  
    console.log("Four-Function Calculator Ticked!")  
}

// Define a gameLoop method. Usually just calls tick method
function gameLoop(){  
	// Set the Four-Function Calcs Tick Method to the one we defined
    fourFunctionCalc.onTick(Tick());
}

// Start the Four-Function Calculator + pass in the gameLoop
fourFunctionCalc.startExecution(gameLoop());
```
