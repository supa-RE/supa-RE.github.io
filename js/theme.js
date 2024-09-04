var css = document.querySelector(':root');
var ThemeBtn = document.getElementById("theme");
let toggle = true
function ChangeTheme() { 
    
    if (toggle === true)
    {
        toggle = false;
        ThemeBtn.innerHTML = "light mode";
        let bgcolor = "black";
        css.style.setProperty('--color', bgcolor);
    }
    else
    {
        ThemeBtn.innerHTML = "dark mode";
        toggle = true;
        let bgcolor = "white"; 
        css.style.setProperty('--color', bgcolor);
    }
}