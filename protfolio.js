/*menu humberger rideu
const btn_burger = document.querySelector(".btn_toggle"); 

const nav = document.querySelector(".menu_rideau");

btn_burger.addEventListener("click",toggle_nav)

function toggle_nav(){

    btn_burger.classList.toggle("active");  /* sa met la classse qui est dans le css */
    /* si elle est la sa l'enleve si elle n'est pas la sa la rajoute

    nav.classList.toggle("active");  
}*/


/*copier coller*/


function copier_text(text){

    navigator.clipboard.writeText(text) ; 
 
    
}
/*

/*menu brger 

let menu_list = document.querySelector(".menu_a_nv");

menu_list.style.maxHeight = "50px";

function toggle_menu(){

    if(menu_list.style.maxHeight == "50px")
    {
        menu_list.style.maxHeight = "300px";
    }
    else
    {
        menu_list.style.maxHeight = "50px";
    }

}
*/


//menu burger2 



//menu humberger rideu
const btn_burger = document.querySelector(".btn_toggle"); 

let menu = document.querySelector(".menu_a_nv");

const nav = document.querySelector(".menu_rideau");

btn_burger.addEventListener("click",toggle_nav)

function toggle_nav(){

    btn_burger.classList.toggle("active");  /* sa met la classse qui est dans le css */
    /* si elle est la sa l'enleve si elle n'est pas la sa la rajoute*/

    nav.classList.toggle("active");  
}



btn_burger.addEventListener("click", () =>{

    console.log("j'ai cliquer") ;
      if(menu.style.display === "flex" )
    {
        menu.style.display = "none"  ;
        
    }
    else
    {
        menu.style.display = "flex"  ;
        
    }


})

 
window.addEventListener("resize",function(e){


    var largeur = window.innerWidth;
    
    if(largeur >= 992 )
    {

        menu.style.display = "flex"  ;
        console.log('Largeur supérieure ou égale à 992px → menu affiché')

    }
    else
    {

        menu.style.display = "none"  ;
        console.log("Largeur inférieure à 992px → menu masqué");


    }
})


//console.log("oui")


//coursor animation

let cursor = document.querySelector(".cursor");

//cursor on mousemove

document.addEventListener("mousemove", (e) => {


    let x = e.clientX ;
    let y = e.clientY ;

    cursor.style.top = y + "px" ;
    cursor.style.left = x + "px" ;

    cursor.style.display = "block" ;


    function mouseStop(){

        cursor.style.display = "none" ;
    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStop,1000)
});



document.addEventListener("mouseout", ()=> {

    cursor.style.display = "none" ;
})


let cursor1 = document.querySelector(".cursor1");
let cursor2 = document.querySelector(".cursor2");


document.addEventListener("mousemove", (e) => {


    let x = e.clientX ;
    let y = e.clientY ;

    cursor1.style.top = y + "px" ;
    cursor1.style.left = x + "px" ;

    cursor2.style.top = y + "px" ;
    cursor2.style.left = x + "px" ;

    cursor1.style.display = "block" ;
    cursor2.style.display = "block" ;


    function mouseStop(){

        cursor1.style.display = "none" ;
        cursor2.style.display = "none" ;

    }

    clearTimeout(timeout);
    timeout = setTimeout(mouseStop,1000)
});



//Pages competeances Carrousel

let next = document.querySelector('.next');

let prev = document.querySelector('.prev');

next.addEventListener('click',function(){

    let items = document.querySelectorAll('.item2') 
    document.querySelector(".silde2").appendChild(items[0])
})

prev.addEventListener('click',function(){

    let items = document.querySelectorAll('.item2') 
    document.querySelector(".silde2").prepend(items[items.length - 1])
})


//carousel de la prof Julie


let slides = document.querySelectorAll(".slide")
let prev2 = document.getElementById("prev2");
let next2 = document.getElementById("next2");
let pagination = document.querySelectorAll(".dot")
let carrousel = document.getElementById("carrousel");


let zero = 0;
let interval; // on la déclare ici pour pouvoir la réutiliser

function next_slide(){


    slides[zero].classList.remove("active");
    pagination[zero].classList.remove('active');

    zero += 1

    // S'il dépasse le nombre de slides, on remet à zéro
    if (zero >= slides.length) {
        zero = 0;
    }

    slides[zero].classList.add("active")
    pagination[zero].classList.add('active')

}

next2.addEventListener("click", function(e){

    console.log("j'ai cliquer");
    next_slide();

});


prev2.addEventListener("click", function(e){

    console.log("j'ai cliquer");
    slides[zero].classList.remove("active");
    pagination[zero].classList.remove('active');

    zero -= 1

    // S'il dépasse le nombre de slides, on remet à zéro
    if (zero < 0 ) {
        zero = slides.length - 1
    }  
    slides[zero].classList.add("active")
    pagination[zero].classList.add('active');
 
})

for(let i=0;i<pagination.length; i++){

    pagination[i].addEventListener("click", function (e){
 
        slides[zero].classList.remove("active");
        pagination[zero].classList.remove("active");

        zero = i;

        slides[zero].classList.add("active");
        pagination[zero].classList.add("active");

    })
}

// Défilement automatique toutes les 5 secondes
interval = setInterval(next_slide, 5000);

// Pause et relance au survol
carrousel.addEventListener("mouseover", function () {
    clearInterval(interval);
});

carrousel.addEventListener("mouseout", function () {
    interval = setInterval(next_slide, 5000);
});


