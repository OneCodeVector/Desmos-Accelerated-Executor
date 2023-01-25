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