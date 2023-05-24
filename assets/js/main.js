open = false

function foo(){
    if(open){
        document.getElementById("slidemenu").style.width= "0%"
        open = false
    }
    else{
        document.getElementById("slidemenu").style.width= "30%"
        open = true
    }
}

function bar(){
    alert('I got clicked 2')
}

document.getElementById("btn1").addEventListener("click", foo)
document.getElementById("btn2").addEventListener("click", foo)