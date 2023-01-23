var DAX_MAIN_ELEMENT   = "DAX_MAIN_ELEMENT"; // Parent
var DAX_DISPLAY_SCREEN = "DAX_DISPLAY_SCREEN"; // Child
var DAX_PROGRAM_DATA   = "DAX_PROGRAM_DATA"; // Child
var DAX_ERROR_LOG      = "DAX_ERROR_LOG"; // Child
var DAX_CONSOLE_LOG    = "DAX_CONSOLE_LOG"; // Child
var DAX_PARENT_OBJECT  = "DAX_PARENT_OBJECT"; // Type
var DAX_CHILD_OBJECT   = "DAX_CHILD_OBJECT"; // Type

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
                Style: "width: "+this.Width+"px; height: "+this.Height+"px;",
                Element: document.getElementById(this.Data.Element),
                Is_Parent: true,
                Is_Child: false,
            }
            
            switch (this.Data.Element){
                case DAX_MAIN_ELEMENT:
                    var Element = this.Settings.Element
                    Element.style = this.Settings.Style
                    break

                case null:
                    //will add stuff here in future update
                    break
            }
        } else if (this.Object == DAX_CHILD_OBJECT){
            this.Settings = {
                Style: "width: "+this.Width+"px; height: "+this.Height+"px;",
                Element: document.getElementById(this.Data.Element),
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
        } else {
            return
        }
    }
}