//const EventEmitter = require('events')

const DAX_MAIN_ELEMENT   = "DAX_MAIN_ELEMENT"; // Parent
const DAX_DISPLAY_SCREEN = "DAX_DISPLAY_SCREEN"; // Child
const DAX_PROGRAM_DATA   = "DAX_PROGRAM_DATA"; // Child
const DAX_ERROR_LOG      = "DAX_ERROR_LOG"; // Child
const DAX_CONSOLE_LOG    = "DAX_CONSOLE_LOG"; // Child
const DAX_PARENT_OBJECT  = "DAX_PARENT_OBJECT"; // Type
const DAX_CHILD_OBJECT   = "DAX_CHILD_OBJECT"; // Type

class DAX_GRAPH_OBJECT{
    constructor(Data, Settings){
        this.Data = Data
        this.Settings = Settings
        this.Size = 0
        this.Tick_Speed = 0
        //this.Events = new EventEmitter()
    }

    loadApi(){
        this.Api = Desmos.GraphingCalculator(this.Settings.Element)
        this.Api.updateSettings({
            expressions: true,
            settingsMenu: false,
            zoomButtons: false,
        })
        this.Api.setExpression({id: 0, latex: "g_{round} = 0"})
        this.Dispatch = this.Api.controller.dispatcher
    }

    addLatex(Latex){
        this.Size += 100 // 100 lines before might be pre execution latex
        this.Api.setExpression({id: this.Size, latex: Latex})
    }

    startExecution(Function){
        this.Executing_Function = setInterval(gameLoop, 0)
        this.Api.controller.dispatch({type:'update-ticker-handlerlatex', latex: "g_{round} -> 0"})
        this.Api.controller.dispatch({type: "open-ticker"})
        this.Api.controller.dispatch({type:'toggle-ticker'})
    }

    stopExecution(){
        this.Api.controller.dispatch({type:'toggle-ticker'})
        this.Api.controller.dispatch({type: "close-ticker"})
    }

    onTick(Code){
        this.Api.controller.dispatcher.register(Event => {
            if (Event.type == 'tick-ticker'){
                Code
            }
        }) 
    }
}

class DAX_OBJECT{
    constructor(Object, Data){
        this.Object = Object
        this.Data = Data
        this.Size = this.Data.Size
        this.Width = this.Size[0]
        this.Height = this.Size[1]
        this.Settings = {}

        if (this.Object == DAX_PARENT_OBJECT){
            this.Settings = {
                Children: [],
                Style: "width: "+this.Width+"; height: "+this.Height+";",
                Element: document.getElementById(this.Data.Element),
                Is_Parent: true,
                Is_Child: false,
            }
            
            switch (this.Data.Element){
                case DAX_MAIN_ELEMENT:
                    var  Element = this.Settings.Element
                    Element.style = this.Settings.Style
                    break

                case null:
                    //will add stuff here in future update
                    break
            }
        } else if (this.Object == DAX_CHILD_OBJECT){
            this.Settings = {
                Style: "width: "+this.Width+"; height: "+this.Height+";",
                Element: document.getElementById(this.Data.Element),
                Parent: null,
                Is_Parent: false,
                Is_Child: true,
            }

            switch (this.Data.Element){
                case DAX_DISPLAY_SCREEN:
                    var Element = this.Settings.Element
                    Element.style = this.Settings.Style
                    break
            }
        }
    }

    appendChild(Child){
        if (this.Settings.Is_Parent){
            this.Settings.Children.push(Child)
            Child.Settings.Parent = this
        } else {
            return
        }
    }

    loadGraph(Screen){
        if (this.Settings.Is_Parent){
            this.Graph = new DAX_GRAPH_OBJECT(Screen.Data, Screen.Settings)
            return this.Graph
        }
    }
}