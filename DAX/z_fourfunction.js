class DAX_FOUR_FUNCTION_OBJECT {
    constructor(Data, Settings){
        this.Data = Data;
        this.Settings = Settings;
        this.Api = Desmos.FourFunctionCalculator(this.Settings.Element);
        this.Api.updateSettings({
            expressions: true,
            settingsMenu: false,
            zoomButtons: false,
        })
        this.Dispatch = this.Api.controller.dispatcher;
    }

    startExecution(Function){
        this.Executing_Function = setInterval(gameLoop, 0);
        this.Api.controller.dispatch({type:'update-ticker-handlerlatex', latex: "g_{round} -> 0"});
        this.Api.controller.dispatch({type: "open-ticker"});
        this.Api.controller.dispatch({type:'toggle-ticker'});
    }

    onTick(Code){
        this.Api.controller.dispatcher.register(Event => {
            if (Event.type === 'tick-ticker'){
                Code;
            }
        })
    }
}

// FourFunctionCalculator