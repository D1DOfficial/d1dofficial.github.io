document.addEventListener('DOMContentLoaded', () => {



/* JavaScript Check */



const jCheck = document.querySelector('.jsCheck');
jCheck.classList.add('ON');



 /* The Navigation Button Trigger Procedure */



 const navBtn = document.querySelectorAll('.navBtn');
 let navBtnTrigger = 0;


 /* The Navigation Button Trigger Code */


 navBtn.forEach((div) => {
  div.addEventListener('click', () => {


   /* Trigger ON */


   if (navBtnTrigger == 0) {
    navBtnTrigger = 1;


    /* The Wrapper/Content ON Action */


    const navContent = document.querySelector('.navContent');
    const theWrapper = document.querySelector('.theWrapper');
    theWrapper.classList.add('isON');
    navContent.classList.add('isON');


    /* The Bars ON Action */


    const navBar = document.querySelectorAll('.navBar');
    for (var i = 0; i <= 2; i++) {
     const navBarNum = navBar[i];
     navBarNum.classList.add('s' + i);
    }

    for (var i = 0; i <= 2; i++) {
     const newI = i + 3;
     const navBarNum = navBar[newI];
     navBarNum.classList.add('s' + i);
    }

   }


   /* Trigger OFF */


   else if (navBtnTrigger = 1) {
    navBtnTrigger = 0;


    /* The Wrapper OFF Action */


    const navContent = document.querySelector('.navContent');
    const theWrapper = document.querySelector('.theWrapper');
    theWrapper.classList.remove('isON');
    navContent.classList.remove('isON');


    /* The Bars OFF Action */


    const navBar = document.querySelectorAll('.navBar');
    for (var i = 0; i <= 2; i++) {
     const navBarNum = navBar[i];
     navBarNum.classList.remove('s' + i);
    }

    for (var i = 0; i <= 2; i++) {
     const newI = i + 3;
     const navBarNum = navBar[newI];
     navBarNum.classList.remove('s' + i);
    }
   }

  });
 });



 /* The Articles Animation */



 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
   if (entry.isIntersecting) {
    entry.target.closest(".article").classList.add("isOn");
   } else {
    entry.target.closest(".article").classList.remove("isOn");
   }
  });
 }, { threshold: .05 });
 const lazyDivs = document.querySelectorAll(".article");
 lazyDivs.forEach((div) => {
  if (div) { // Ensure img exists before observing
   observer.observe(div);
  }
 });






});
