// import React from "react";
// import "../pages/HomeP.css";


// function Design (){
//   //register the scroll event
//   window.addEventListener('scroll', onScroll, false);

// //Get all the section reference
// var sectionOne = document.querySelector('#section-1');
// var sectionTwo = document.querySelector('#section-2');
// var sectionThree = document.querySelector('#section-3');
// var sectionFour = document.querySelector('#section-4');
// var sectionFive = document.querySelector('#section-5');

// //Calculate their individual height
// var SectionOneHeight = getComputedStyle(sectionOne).height.split('px')[0];
// var SectionTwoHeight = getComputedStyle(sectionTwo).height.split('px')[0];
// var SectionThreeHeight = getComputedStyle(sectionThree).height.split('px')[0];
// var SectionFourHeight = getComputedStyle(sectionFour).height.split('px')[0];
// // var SectionFiveHeight = getComputedStyle(sectionFive).height.split('px')[0];

// //calculate the checkpoint where item need to be modified
// var checkPointOne = parseFloat(SectionOneHeight);
// var checkPointTwo = checkPointOne + parseFloat(SectionTwoHeight);
// var checkPointThree = checkPointTwo + parseFloat(SectionThreeHeight);
// var checkPointFour = checkPointThree + parseFloat(SectionFourHeight);
// return(



// //Scroll logic
// function onScroll() {
//   //get the current scrollbar position
//   var scrollBarPosition = window.pageYOffset | document.body.scrollTop
//   console.log(scrollBarPosition + ' : ' + checkPointOne)
//     //First section is already fixed
//   if (scrollBarPosition >= 0 && scrollBarPosition < checkPointOne) {
//     removeClass(sectionTwo, sectionThree)
//   } else if (scrollBarPosition > checkPointOne && scrollBarPosition <= checkPointTwo) {
//     addClass(sectionTwo, sectionThree, checkPointTwo)
//     removeClass(sectionThree, sectionFour)
//   } else if (scrollBarPosition > checkPointTwo && scrollBarPosition <= checkPointThree) {
//     addClass(sectionThree, sectionFour, checkPointThree)
//     removeClass(sectionFour, sectionFive)
//   } else if (scrollBarPosition > checkPointThree && scrollBarPosition <= checkPointFour) {
//     addClass(sectionFour, sectionFive, checkPointFour)
//   }

// }

// function addClass(elemOne, elemTwo, margin) {
//   elemOne.classList.add('fixed');
//   elemTwo.style.marginTop = (margin) + 'px';
// }

// function removeClass(elemOne, elemTwo) {
//   elemOne.classList.remove('fixed');
//   elemTwo.style.marginTop = '0px';
// }


// )

// }

// export default Design