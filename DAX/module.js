const DAX_MAIN_ELEMENT   = "DAX_MAIN_ELEMENT"; // Parent
const DAX_DISPLAY_SCREEN = "DAX_DISPLAY_SCREEN"; // Child
const DAX_PROGRAM_DATA   = "DAX_PROGRAM_DATA"; // Child
const DAX_ERROR_LOG      = "DAX_ERROR_LOG"; // Child
const DAX_CONSOLE_LOG    = "DAX_CONSOLE_LOG"; // Child
const DAX_PARENT_OBJECT  = "DAX_PARENT_OBJECT"; // Type
const DAX_CHILD_OBJECT   = "DAX_CHILD_OBJECT"; // Type

$('head').append('<script type="text/javascript" src="DAX/z_graph.js"></script>');
$('head').append('<script type="text/javascript" src="DAX/z_console.js"></script>');
$('head').append('<script type="text/javascript" src="DAX/z_objects.js"></script>');
$('head').append('<script type="text/javascript" src="DAX/z_scientific.js"></script>');

$(document).ready(function(){
    $('body').append($('<div/>', {id: 'DAX_MAIN_ELEMENT' }));
    $('#DAX_MAIN_ELEMENT').append($('<div/>', {id: 'DAX_DISPLAY_SCREEN' }));
    $('#DAX_MAIN_ELEMENT').append($('<div/>', {id: 'DAX_PROGRAM_DATA' }));
    $('#DAX_MAIN_ELEMENT').append($('<div/>', {id: 'DAX_ERROR_LOG' }));
    $('#DAX_MAIN_ELEMENT').append($('<div/>', {id: 'DAX_CONSOLE_LOG' }));
    $('#DAX_MAIN_ELEMENT').append($('<script/>', {src: MAIN_JS_FILE }));
})