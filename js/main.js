// var testEditor;

$(function(){
  'use strict'
  var sidebar = $('#sidebar'),//选择侧栏
    mask = $('.mask'),
    sidebar_trigger = $('#sidebar_trigger'),
    backButton = $('.back-to-top'),
    knowMeBtn = $('#knowMe');
  function showSideBar() 
  {
    mask.fadeIn();
    sidebar.css('right', 0);
    // sidebar.animate({'right' : 0});
  }

  function hideSideBar() 
  {
    mask.fadeOut();
    sidebar.css('right', -sidebar.width());
  }

  sidebar_trigger.on('click', showSideBar);
  mask.on('click', hideSideBar);
 
  // knowMeBtn.on('click', function () {
  //   window.location.href="knowMe.html";
  // });

  const docStyle = document.documentElement.style
  const aElem = document.querySelector('a')
  const boundingClientRect = aElem.getBoundingClientRect()

  aElem.onmousemove = function(e) {

    const x = e.clientX - boundingClientRect.left
    const y = e.clientY - boundingClientRect.top
    
    const xc = boundingClientRect.width/2
    const yc = boundingClientRect.height/2
    
    const dx = x - xc
    const dy = y - yc
    
    docStyle.setProperty('--rx', `${ dy/-1 }deg`)
    docStyle.setProperty('--ry', `${ dx/10 }deg`)
    
  }

  aElem.onmouseleave = function(e) {
    
    docStyle.setProperty('--ty', '0')
    docStyle.setProperty('--rx', '0')
    docStyle.setProperty('--ry', '0')
    
  }

  aElem.onmousedown = function(e) {
    
    docStyle.setProperty('--tz', '-25px')
    
  }

  document.body.onmouseup = function(e) {
    
    docStyle.setProperty('--tz', '-12px')
    
  }
 
})
