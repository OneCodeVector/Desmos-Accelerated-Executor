var DAX_CALCULATOR_OBJECT = "body -- dax -- dde & dco"
var DAX_DISPLAY_ELEMENT = "body -- dax -- dde ~! ddo"

class Calculator{
    constructor(Element){
        this.Element = Element
        this.API = Desmos.GraphingCalculator(Element);
        this.Line_Data = {}
        this.Size = 0
    }

    appendLine(Data){
        this.Size += 1
        this.API.setExpression({id: this.Size, latex: Data.Latex})
        this.Line_Data
    }

    editLine(Data){
        if (this.Size <= Data.Line){
            this.API.setExpression({id: Data.Line, latex: Data.Latex})
        }
    }

    clearLine(Data){
        if (this.Size <= Data.Line){
            this.API.setExpression({id: Data.Line, latex: ""})
        }
    }
}

class DAX_OBJECT{
    constructor(Type, Settings){
        this.Type = Type
        this.Settings = Settings

        switch (this.Type){
            case DAX_CALCULATOR_OBJECT:
                if (Settings.Element == DAX_DISPLAY_ELEMENT){
                    this.Element = document.getElementById("DAX_DISPLAY_ELEMENT")
                } else {
                    //stuff will go here in later update
                    this.Element = null
                }
                break
                
            case null:
                //stuff will go here in a later update
                this.Element = null
                
            this.Size = Settings.Size
            this.Width = this.Size[0]
            this.Height = this.Size[1]

            this.Element.style = "width: "+this.Width+"px; height: "+this.Height+"px;"
        }
    }
}