let paragraphs = document.getElementsByTagName('p');

let lastParaValue;
function showRandom(){
    for(let i = 0; i<paragraphs.length; i++){
        paragraphs[i].style.visibility = 'hidden';
    }
    let randomPara = Math.random()*paragraphs.length;
    paragraphs[Math.floor(randomPara)].style.visibility = 'visible';
    lastParaValue = paragraphs[Math.floor(randomPara)].innerText.toLowerCase();
}

document.body.addEventListener('keypress',(e)=>{
    if(e.key.toLowerCase() == lastParaValue)
        showRandom();
})

showRandom();
