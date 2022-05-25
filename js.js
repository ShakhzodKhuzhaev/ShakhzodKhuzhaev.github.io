let knopka = document.getElementById('click');
knopka.onclick = function(){
    let theme = document.getElementById('theme');
    if(theme.getAttribute('href') == './style.css'){
        theme.href = './qora.css'
    }
    else{
        theme.href = './style.css'
    }
}
