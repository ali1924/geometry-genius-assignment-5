window.onload=()=>{
    backgroundCard('triangle-card');
    backgroundCard("rectangle-card");
    backgroundCard("parallelogram-card");
    backgroundCard("rhombus-card");
    backgroundCard("pentagon-card");
    backgroundCard("ellipse-card");
}
function backgroundCard(id){
    const hover=document.getElementById(id);
    hover.addEventListener('mouseenter',function(){
       hover.style.backgroundColor=generateRgbColor();
    })
}
function generateRgbColor(){
    const red=Math.floor(Math.random()*255);
    const green=Math.floor(Math.random()*255);
    const blue=Math.floor(Math.random()*255);
    const a=(Math.random()).toFixed(2);
    return `rgba(${red},${green},${blue},${a})`
}