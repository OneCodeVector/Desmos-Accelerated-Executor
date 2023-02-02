class DAX_GRAPH_OBJECT{
    constructor(Data, Settings){
        this.Data = Data;
        this.Settings = Settings;
        this.Size = 100; // 100 lines for pre execution latex
        this.Tick_Speed = 0;
        this.Api = Desmos.GraphingCalculator(this.Settings.Element);
        this.Api.updateSettings({
            expressions: true,
            settingsMenu: false,
            zoomButtons: false,
        })
        this.Api.setExpression({id: 0, latex: "g_{round} = 0"});
        this.Dispatch = this.Api.controller.dispatcher;
    }

    addLine(Latex){
        this.Size += 1;
        this.Api.setExpression({id: this.Size, latex: Latex});
    }

    setLine(Data){
        if (this.Size <= Data.Line+100){
            this.Api.setExpression({id: Data.Line+100, latex: Data.Latex});
        }
    }

    startExecution(Function){
        this.Executing_Function = setInterval(gameLoop, 0);
        this.Api.controller.dispatch({type:'update-ticker-handlerlatex', latex: "g_{round} -> 0"});
        this.Api.controller.dispatch({type: "open-ticker"});
        this.Api.controller.dispatch({type:'toggle-ticker'});
    }

    stopExecution(){
        this.Api.controller.dispatch({type:'toggle-ticker'});
        this.Api.controller.dispatch({type: "close-ticker"});
    }

    onTick(Code){
        this.Api.controller.dispatcher.register(Event => {
            if (Event.type == 'tick-ticker'){
                Code;
            }
        }) 
    }
}