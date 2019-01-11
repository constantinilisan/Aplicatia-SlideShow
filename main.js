const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];
const img = document.querySelector("#slide");
const meniu = document.querySelector("#meniu");

let index = 0;

function showImage(localIndex){

    if (localIndex === images.length){
        localIndex = 0;
    } else if( localIndex === -1 ){
        localIndex = images.length-1;
    }    

    img.src = 'img/' + images[localIndex].src;
    img.alt = images[localIndex].alt;
    img.title = images[localIndex].alt;
    index = localIndex;}

function meniuBilute(localIndex){
    meniu.innerHTML = '';

    for (let i=0; i< images.length; i++){
   
        biluta = document.createElement("span");
        biluta.title = images[i].alt;
        biluta.classList.add('biluta');
        if (i === localIndex){
            biluta.classList.add('activ');
        }
        
        biluta.addEventListener( "click", function(){
            showImage(i);
            meniuBilute(i);    
        });

        meniu.appendChild(biluta); 
    }

    index = localIndex;
}

function makeBilutaCallback(index){
    return function(){
        showImage(index);
        meniuBilute(index);
    }
}

window.addEventListener("load", function(){ 
    showImage(index);
    meniuBilute(index);
});
document.getElementById("inainte").addEventListener("click", function(){ 
    showImage(++index); 
    meniuBilute(index);
});
document.getElementById("inapoi").addEventListener("click", function(){ 
    showImage(--index); 
    meniuBilute(index);
});

document.meniuBilute();
