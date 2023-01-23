var Main_Object = new DAX_OBJECT(
    DAX_PARENT_OBJECT, {
        Element: DAX_MAIN_ELEMENT,
        Size: [600,400]
    }    
)

var Screen = new DAX_OBJECT(
    DAX_CHILD_OBJECT, {
        Element: DAX_DISPLAY_SCREEN,
        Size: [100,100]
    }
)

// Main

Main_Object.appendChild(Screen)