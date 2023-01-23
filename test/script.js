var DDO = new DAX_OBJECT( // dax display object
    DAX_CALCULATOR_OBJECT, {
        Element: DAX_DISPLAY_ELEMENT,
        Size: [600,400]
    }    
)

var Calc = new Calculator(DDO.Element)

Calc.appendLine({Latex: "y=x"})
Calc.editLine({Line: 1, Latex: "y=x^2"})
Calc.clearLine({Line: 1})