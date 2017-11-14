/* jshint browser: true */

window.addEventListener('load', funLoad);

function funLoad(){
    //Para el div
    var divBorder = document.getElementById('divBorder');
    divBorder.addEventListener('mouseover', funMouse);
    function funMouse(){
        divBorder.classList.add('border-div');
    }
    divBorder.addEventListener('mouseout', funMouse2);
    function funMouse2(){
        divBorder.classList.remove('border-div');
    }
    //Para el form
    var colorForm = document.getElementById('colorForm');
    colorForm.addEventListener('mouseover', mouseForm);
    function mouseForm(){
        colorForm.classList.add('color-form');
    }
    colorForm.addEventListener('mouseout', mouseForm2);
    function mouseForm2(){
        colorForm.classList.remove('color-form');
    }  
    colorForm.addEventListener('click', borderForm);
    function borderForm(){
        colorForm.classList.add('border-form');
    }  
}


