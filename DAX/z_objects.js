class DAX_OBJECT{
    constructor(Object, Data){
        this.Object = Object;
        this.Data = Data;
        this.Settings = {};

        if (this.Object == DAX_PARENT_OBJECT){
            this.Settings = {
                Children: [],
                Element: document.getElementById(this.Data.Element),
                Is_Parent: true,
                Is_Child: false,
            }
            
        } else if (this.Object == DAX_CHILD_OBJECT){
            this.Settings = {
                Element: document.getElementById(this.Data.Element),
                Parent: null,
                Is_Parent: false,
                Is_Child: true,
            }
        }
    }

    loadGraph(Screen){
        if (this.Settings.Is_Parent){
            this.Settings.Children.push(Screen);
            Screen.Settings.Parent = this;
            this.Graph = new DAX_GRAPH_OBJECT(Screen.Data, Screen.Settings);
            return this.Graph;
        }
    }

    loadConsole(Console){
        if (this.Settings.Is_Parent){
            this.Settings.Children.push(Console);
            Console.Settings.Parent = this;
            this.Graph = new DAX_CONSOLE_OBJECT(Screen.Data, Screen.Settings);
            return this.Graph;
        }
    }
}