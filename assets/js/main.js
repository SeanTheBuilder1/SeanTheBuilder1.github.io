
function foo(){
    alert('I got clicked')
}

function bar(){
    alert('I got clicked 2')
}

document.getElementById("btn1").addEventListener("click", foo)
document.getElementById("btn2").addEventListener("click", foo)