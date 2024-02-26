document.addEventListener('DOMContentLoaded', () => {

 // !! !!STORAGE RESET FUNCTION!! !! //


 //localStorage.clear();


 ///---- JavaScript Availability ----///


 const jCheck = document.getElementById('jsCheck');
 jCheck.style.display = 'none';


 ///---- Loading Function -----///


 const loadingFunction = Timing => {
  const loading = document.getElementById('loadingWrapper');
  loading.style.display = 'block';
  setTimeout(() => loading.style.display = 'none', Timing);
 };


 ///---- Alert Modal Function ----///



 const alertModalFunction = Content => {
  document.getElementById('alertModalWrapper').style.display = 'block';
  document.getElementById('alertModal').style.transform = 'scale(1)';
  document.getElementById('alertModalContent').innerText = `${Content}`;

  document.getElementById('alertModalEscape').addEventListener('click', () => {
   document.getElementById('alertModal').style.transform = 'scale(0)';
   setTimeout(() => document.getElementById('alertModalWrapper').style.display = 'none', 50);
  });
 };

 ///---- Window Size Compatibility -----///


 const orientationFunction = () => {

  const orientationMessage = document.getElementById('orientationMessage');
  let affir_H;
  let affir_W;
  ///------- Landscape ------///

  window.innerWidth / window.innerHeight >= 1 && window.innerHeight >= 480 ? affir_H = true : affir_H = false;

  ///------- Portrait ------///

  window.innerHeight / window.innerWidth >= 1 && window.innerWidth >= 350 ? affir_W = true : affir_W = false;

  affir_W || affir_H ? orientationMessage.style.display = 'none' : orientationMessage.style.display = 'block';


 };
 orientationFunction();
 window.addEventListener('resize', orientationFunction);


 /// Stars drawing function
 const stxFunc = () => {
  /* The Stars Canvas */
  const starsCanvas = document.getElementById('starsCanvas');
  const stx = starsCanvas.getContext('2d');
  starsCanvas.width = starsCanvas.height = window.innerWidth * 10;
  stx.fillStyle = '#fff';

  for (let i = 0; i < 500; i++) {
   stx.globalAlpha = Math.random() * .8;
   stx.beginPath();
   stx.arc(Math.random() * starsCanvas.width, Math.random() * starsCanvas.width, Math.random() * 3, 0, 2 * Math.PI);
   stx.fill();
  }
 };
 stxFunc();


 const intro = () => {
  const logo = document.getElementById('logo');
  logo.classList.add('isOn');
  logo.style.opacity = 0;
  setTimeout(() => {
   logo.innerHTML = 'V';
   logo.style.opacity = 1;
  }, 500);
 };


 /* Intro */
 const atxFunc = () => {
  const arrowCanvas = document.getElementById('arrowCanvas');
  const atx = arrowCanvas.getContext('2d');

  setTimeout(() => arrowCanvas.style.opacity = .8, 2000);
  // Arrow canvas click event
  const introDiv = document.getElementById('introDiv');
  const Introvirginity = localStorage.getItem('virgin');
  const introEvent = () => {

   const logoContainer = document.getElementById('logoContainer');
   const pageContent = document.getElementById('pageContent');
   const navBtn = document.getElementById('navBtn');
   const profileCanvas = document.getElementById('profileCanvas');



   setTimeout(() => {
    introDiv.style.height = 0;
    introDiv.style.opacity = 0;
    logoContainer.classList.add('isScrolled');
    logoContainer.style.left = 0;
    pageContent.style.display = 'block';
    navBtn.style.display = 'block';
   }, 500);
   setTimeout(() => {
    document.body.style.overflow = 'scroll';
    introDiv.style.display = 'none';
    pageContent.style.opacity = 1;
    profileCanvas.style.opacity = 1;
    profileCanvas.style.width = '40px';

    navBtn.style.opacity = 1;
    navBtn.style.width = '60px';
   }, 1200);

   localStorage.setItem('virgin', 'isNot');


   intro();
  };
  arrowCanvas.addEventListener('click', introEvent);

  if (Introvirginity === 'isNot') {
   introEvent();
   arrowCanvas.remove();
   document.getElementById('starsCanvas').remove();
   document.querySelectorAll('.slogan').forEach(Element => {
    Element.remove();
   });

  }
  else {
   document.querySelectorAll('.slogan').forEach(Element => {
    Element.classList.add('isON');
   });
  }
  const y1 = 700,
   y2 = 1200,
   ymax1 = 1000,
   ymax2 = 1500,
   initialTime = Date.now(),
   duration = 2000,
   animate = () => {
    const elapsed = Date.now() - initialTime;
    const progress = Math.sin((elapsed % duration) / duration * Math.PI);
    const movingY1 = y1 + (ymax1 - y1) * progress;
    const movingY2 = y2 + (ymax2 - y2) * progress;
    // Canvas drawing setup
    atx.lineWidth = 200;
    atx.lineCap = 'round';
    atx.lineJoin = 'round';
    atx.clearRect(0, 0, arrowCanvas.width, arrowCanvas.height);
    // Draw the animated line
    atx.beginPath();
    atx.moveTo(100, movingY1);
    atx.quadraticCurveTo(200, 800, 1000, movingY2);
    atx.quadraticCurveTo(1800, 800, 1900, movingY1);
    atx.strokeStyle = '#fff';
    atx.stroke();

    // Continue the animation loop
    requestAnimationFrame(animate);
   };
  animate();
 };
 atxFunc();




 // Profile Picture Canvas
 const ptxFunc = () => {
  const profileCanvas = document.getElementById('profileCanvas');
  const ptx = profileCanvas.getContext('2d');
  ptx.fillStyle = '#333';
  ptx.beginPath();
  ptx.lineWidth = '50';
  ptx.moveTo(500, 2000);
  ptx.bezierCurveTo(-500, 500, 2500, 500, 1500, 2000);
  ptx.fill();
  ptx.fillStyle = '#ddd';
  ptx.beginPath();
  ptx.arc(1000, 500, 350, 0, 2 * Math.PI, );
  ptx.fill();
  ptx.closePath();
 }
 ptxFunc();


 /* The Navigation Button Trigger Procedure */
 const navBtn = document.getElementById('navBtn');
 let navBtnTrigger = 0;


 /* The Navigation Button Trigger Code */
 const menuActivation = () => {
  {
   /* Trigger ON */
   if (navBtnTrigger === 0) {
    navBtnTrigger = 1;

    /* The Wrapper/Content ON Action */
    document.body.style.overflow = 'hidden';
    document.getElementById('theWrapper').classList.add('isON');
    document.getElementById('navContent').classList.add('isON');
    document.getElementById('logo').innerHTML = 'Vitalest';
    document.getElementById('logo').classList.add('forMenu');
    document.getElementById('logoContainer').classList.add('forMenu');

    /* The Bars ON Action */
    const navBar = document.querySelectorAll('.navBar');
    for (let i = 0; i <= 2; i++) {
     const navBarNum = navBar[i];
     navBarNum.classList.add('s' + i);
    }

   }

   /* Trigger OFF */
   else if (navBtnTrigger === 1) {
    navBtnTrigger = 0;

    /* The Wrapper OFF Action */
    document.body.style.overflow = 'scroll';
    document.getElementById('theWrapper').classList.remove('isON');
    document.getElementById('navContent').classList.remove('isON');
    document.getElementById('logo').innerHTML = 'V';
    document.getElementById('logo').classList.remove('forMenu');
    document.getElementById('logoContainer').classList.remove('forMenu');

    /* The Bars OFF Action */
    const navBar = document.querySelectorAll('.navBar');
    for (let i = 0; i <= 2; i++) {
     const navBarNum = navBar[i];
     navBarNum.classList.remove('s' + i);
    }

   }
  }
 }
 navBtn.addEventListener('click', menuActivation);


 //----- Full Screen Mode ----//
 const fullScreenFunction = () => {
  const fullscreenTrigger = document.getElementById('fullscreenTrigger');


  const ftx = fullscreenTrigger.getContext('2d');
  fullscreenTrigger.width = 2000;
  fullscreenTrigger.height = 2000;


  ftx.beginPath();
  ftx.lineWidth = 100;
  ftx.fillStyle = '#000';
  ftx.lineJoin = 'round';
  ftx.lineCap = 'round';


  ftx.moveTo(700, 500);
  ftx.lineTo(700, 1500);
  ftx.lineTo(1300, 1500);
  ftx.lineTo(1300, 500);
  ftx.lineTo(700, 500);
  ftx.lineTo(700, 1500);


  ftx.moveTo(900, 300);
  ftx.lineTo(500, 300);
  ftx.lineTo(500, 800);


  ftx.moveTo(1100, 1700);
  ftx.lineTo(1500, 1700);
  ftx.lineTo(1500, 1200);
  ftx.stroke();


  fullscreenTrigger.addEventListener('click', () => document.body.requestFullscreen());
  document.body.addEventListener('fullscreenerror', () => alertModalFunction('Fullscreen Is Not Supported'));
 };
 fullScreenFunction();

 // Light/Dark Mode Theme Switch

 let trigger0 = localStorage.getItem('trigger');
 const staticThemeChange = () => {
  trigger0 = localStorage.getItem('trigger');
  const themeSwitchContainer = document.getElementById('themeSwitchContainer');
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;
  const introDiv = document.getElementById('introDiv');
  //----- Dark Mode -----//
  if (trigger0 === '0') {
   document.querySelector('meta[name="theme-color"]').setAttribute('content', '#030015');
   themeSwitchContainer.style.backgroundColor = '#000B21';
   themeSwitch.style.backgroundColor = '#FFFDE4';
   themeSwitch.style.transform = 'translateX(100%)';
   body.style.backgroundColor = '#111';
   body.style.color = '#fff';
   body.style.textShadow = '0 0 .25px #fff';
   introDiv.classList.add('night');

  }

  //----- Light Mode -----//
  else if (trigger0 === '1') {
   document.querySelector('meta[name="theme-color"]').setAttribute('content', '#D6F0FD');
   themeSwitchContainer.style.backgroundColor = '#CAEFF5';
   themeSwitch.style.backgroundColor = '#F9FF4E';
   themeSwitch.style.transform = 'translateX(0)';
   body.style.backgroundColor = '#eee';
   body.style.color = '#000';
   body.style.textShadow = '0 0 .25px #000';
   introDiv.classList.remove('night');

  } else if (trigger0 === null) {
   localStorage.setItem('trigger', '1');
  }
 };
 const themeChange = () => {

  loadingFunction(2000);
  trigger0 = localStorage.getItem('trigger');

  //-------Dark Mode--------//
  if (trigger0 === '0') {


   localStorage.setItem('trigger', 1);
  }
  //-------Light Mode-------//
  else if (trigger0 === '1') {


   localStorage.setItem('trigger', 0);
  }
 };
 document.getElementById('themeSwitchContainer').addEventListener('click', themeChange);
 document.getElementById('themeSwitchContainer').addEventListener('click', staticThemeChange);
 staticThemeChange();



 /* The Articles Animation */


 // Intersection Observer setup
 const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (entry.isIntersecting) {
    entry.target.classList.add("isOn");
   } else {
    entry.target.classList.remove("isOn");
   }
  });
 }, { threshold: 0 });

 const lazyDivs = document.querySelectorAll(".shadowBox");
 lazyDivs.forEach(div => {
  observer.observe(div);
 });

 //---- The AOD Expand Function ----//


 const expandFunc = () => {
  let isOn = false;

  document.getElementById('expandAOD').addEventListener('click', () => {
   if (!isOn) {
    document.getElementById('articleODay').style.height = 'auto';
    document.getElementById('expandAOD').classList.add('expanded');
    document.styleSheets[1].cssRules[56].style.opacity = '0';
    isOn = true;
   } else {
    document.getElementById('articleODay').style.height = '800px';
    document.getElementById('expandAOD').classList.remove('expanded');
    document.styleSheets[1].cssRules[57].style.opacity = '1';
    isOn = false;
   }
  });
 };

 expandFunc();


});
