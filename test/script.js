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

const Graph = Main_Object.loadGraph(Screen)
Graph.addLine("y=x")
Graph.setLine({Line: 1, Latex: "y=x^2"})

/////////////////////
// Main Graph Code //
/////////////////////

function Tick(){
    console.log("Graph Ticked!")
}

function gameLoop(){
    Graph.onTick(Tick()) // must be inside game loop or will only execute once
}

Graph.startExecution(gameLoop)