//for nav bar

const btn = document.getElementById('menu-btn');
const lay = document.getElementById('lay');
const menu = document.getElementById('kasp');
//for count 
const counts =document.querySelectorAll('.count');
let scrollStarted = false;

btn.addEventListener('click', navToggle);

//for count eventlistener
document.addEventListener('scroll',scrollpage)


//for nav bar
function navToggle() {
   btn.classList.toggle('open');
   lay.classList.toggle('lay-sh');
   document.body.classList.toggle('st-scr');
   menu.classList.toggle('show-mn');
}



// for counts

function scrollpage (){
 const scrp = window.scrollY;

 //console.log(scrp);

 if(scrp > 100 && !scrollStarted) {
   countUp();
   scrollStarted = true;
 } else if (scrp < 100 && scrollStarted) {
   rest();
   scrollStarted = false;
 }
}

function countUp(){
 counts.forEach((count) => {
//console.log(count);
count.innerHTML = "0";
//for count
const updateCount =() => {
   const target = +count.getAttribute('data-target');

   //current count

   const c = +count.innerText;

   //for increasing

   const incre = target / 100;

   //if counter is less than target add up

   if (c < target) {
      //round up and set count value up

      count.innerHTML = `${Math.ceil(c + incre)}`;

     // for it to keep runing and adding up

     setTimeout(updateCount, 0.5);
   } else{
    count.innerText = target;
   }

   //console.log(target);
};

updateCount();
 });

}

function rest() {
   counts.forEach((count) => count.innerHTML= '0');
}

//Slider//

var slideIndex = 1;
showSlides(slideIndex);


function plusSlider(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n)  { 
    var i;
    var slides =document.getElementsByClassName("myslides");
    var docs = document.getElementsByClassName("doc");
    if(n > slides.length) { slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < docs.length; i++) {
        docs[i].className = docs[i].className.replace(" active ", "");
    }
    slides[slideIndex -1].style.display = "block";
    docs[slideIndex -1].className += " active";
}








//const btn = document.getElementById('menu-btn');
//const overlay = document.getElementById('overlay');
//const menu = document.getElementById('mobile-menu');
//const counts = document.querySelectorAll('.Count');









//function countUp() {
//counts.forEach((count) => {
  //count.innerText = '0';

  /////const updateCount = () => {
    //get count target
    //const target = +count.getAttribute('data-target');
     // get current countet value
     //const c = +count.innerText;
     //create an increment
     //const increment = target / 100;

     //if counter is less than target, add increment

     //if (c < target) {
        //round up  and set counter value
        //count.innerText =`${Math.ceil(c + increment)}`;
     //  // setTimeout(updateCount, 75);
    // } else{
        //count.innerText = target;
    // }
     
//};
//updateCount();
//});
//}

//countUp();

