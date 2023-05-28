open = false
slidemenu = document.getElementById("slidemenu")
var checkbox = document.querySelector("input[name=darkmode]"); 
body = document.body

console.log(localStorage.getItem('display_mode'))
display_mode = localStorage.getItem('display_mode')



if(display_mode == 'dark'){
    checkbox.checked = true
    console.log('init dark mode')
    body.classList.add(display_mode)
}
else if(display_mode == 'light'){
    console.log('init light')
    body.classList.add(display_mode)
}
else{
    localStorage.setItem('display_mode', 'dark')
    body.classList.add('dark')
}


checkbox.addEventListener('change', function(){
    if(this.checked){ 
        darken() 
        localStorage.setItem('display_mode', 'dark')
    } 
    else{
        lighten() 
        localStorage.setItem('display_mode', 'light')
    }
});

function darken(){
    console.log("setting dark mode")
    body.classList.replace('light', 'dark')
    
}

function lighten(){
    console.log("setting light mode")
    body.classList.replace('dark', 'light')
}


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

document.addEventListener("DOMContentLoaded", function() {
    var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy"));

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    lazyBackgroundObserver.unobserve(entry.target);
                }
            });
        });

        lazyBackgrounds.forEach(function(lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    }
});
