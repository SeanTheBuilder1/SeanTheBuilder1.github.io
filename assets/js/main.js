open = false
slidemenu = document.getElementById("slidemenu")

function foo(){
    if(open){
        slidemenu.style.width= "0%"
        open = false
    }
    else{
        slidemenu.style.width= "30%"
        open = true
    }
}

function bar(){
    window.location.href = './index.html';
}

document.getElementById("btn1").addEventListener("click", foo)
//document.getElementById("btn2").addEventListener("click", bar)