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

const ScientificCalc = Main_Object.loadScientific(Screen);

function Tick(){
    console.log("Graph Ticked!")
}

function gameLoop(){
    Graph.onTick(Tick()) // must be inside game loop or will only execute once
}

function s_gameLoop(){
    ScientificCalc.onTick(Tick()) // must be inside game loop or will only execute once
}

ScientificCalc.startExecution(s_gameLoop());
