(() => {
  console.log("SVG script file loaded");
  let svgs = document.querySelectorAll('svg');

  function logThisSVG() {
    console.log(this.id);
  }
  svgs.forEach(svg => svg.addEventListener('click', logThisSVG));

  //  SIGN IN ICON
  let signIn = document.getElementById('signIn_icon');

  function moveArrow() {
    let arrow = document.getElementById('arrow');
    arrow.classList.add('move');
    console.log('Arrow moved!')
    setTimeout(() => arrow.classList.remove('move'), 600);
  }
  signIn.addEventListener('click', moveArrow);

  
  //  SIGN UP ICON
  let signUp = document.getElementById('signUpSvg');

  function shadow() {
    signUp.classList.add('shadow');
    console.log('Shadow added!');
    setTimeout(() => signUp.classList.remove('shadow'), 200);
  }
  signUp.addEventListener('click', shadow);


  //  CHECKED ICON
  let circle = document.getElementById('checkedSvg');

  function iconBigger() {
    circle.classList.add('bigger');
    console.log("checked is bigger");
    setTimeout(() => circle.classList.remove('bigger'), 500);
  }
  circle.addEventListener('click', iconBigger);

  //  CROSSED ICON
  let circleCross = document.getElementById('crossedSvg');

  function circleRed() {
    circleCross.classList.add('rotate');
    console.log("circle is red");
    setTimeout(() => circleCross.classList.remove('rotate'), 1500);
  }
  circleCross.addEventListener('mouseover', circleRed);

  //  HOME ICON
  let home = document.getElementById('homeSvg');

  function disappear() {
    home.classList.add('noHouse');
    console.log("house is disappeared");
    setTimeout(() => home.classList.remove('noHouse'), 1500);
  }
  home.addEventListener('click', disappear);

  //  PIN ICON
  let pin = document.getElementById('pinSvg');

  function pinskew() {
    pin.classList.add('pinMove');
    console.log("pin skewed");
    setTimeout(() => pin.classList.remove('pinMove'), 500);
  }
  pin.addEventListener('click', pinskew);

  //  YOUTUBE ICON
  let youtube = document.getElementById('youtubeSvg');

  function iconBig() {
    youtube.classList.add('bigger');
    console.log("icon is bigger");
    setTimeout(() => youtube.classList.remove('bigger'), 500);
  }
  youtube.addEventListener('click', iconBig);

  //  LOCK ICON
  let lockSvg = document.getElementById('lockSvg');

  function openTheLock() {
  	let lock = document.getElementById('loop');
    lock.classList.add('openLock');
    console.log("Lock is now opened");
    setTimeout(() => lock.classList.remove('openLock'), 1000);
  }
  lockSvg.addEventListener('click', openTheLock);

  //  MAIL ICON
  let mailSvg = document.getElementById('mailSvg');

  function openTheMail() {
  	let top = document.getElementById('top');
    top.classList.add('openMail');
    console.log("Mail is now opened");
    setTimeout(() => top.classList.remove('openMail'), 1000);
  }
  mailSvg.addEventListener('click', openTheMail);

  //  LIKE ICON
  let likeSvg = document.getElementById('likeSvg');

  function likeIt() {

    likeSvg.classList.add('moveHand');
    console.log("Like It");
    setTimeout(() => likeSvg.classList.remove('moveHand'), 500);
  }
  likeSvg.addEventListener('click', likeIt);





})();