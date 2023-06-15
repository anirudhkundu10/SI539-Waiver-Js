
document.addEventListener("DOMContentLoaded", function(){

    var figureArray = document.getElementsByTagName("figure");
    for(let i = 0; i<figureArray.length;i++){
        figureArray[i].classList.add("one-third");
    }

    document.getElementsByTagName("footer")[0].addEventListener("click", function(){
        document.getElementsByTagName("footer")[0].remove(); 
    });
    
    figureArray[4].addEventListener("dblclick", function(){
        figureArray[4].style.visibility = "hidden";
    });

    var capOne = document.querySelector("figure figcaption");
    var origFont = getComputedStyle(capOne).fontFamily;

    capOne.addEventListener("mouseover", function(){
        capOne.style.fontFamily = "Cursive";
    });

    capOne.addEventListener("mouseleave", function(){
        capOne.style.fontFamily = origFont;
    });

    capOne.setAttribute("tabindex", "0");

    capOne.addEventListener("focus", function(){
        capOne.style.fontFamily = "Cursive";
    });

    capOne.addEventListener("blur", function(){
        capOne.style.fontFamily = "Times";
    });

});
