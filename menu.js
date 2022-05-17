
  let menuToggle = document.querySelector('.btn_menu');
  let menuToggleIcon = document.querySelector('.btn_menu i');
  let menu= document.getElementById('menu');


  menuToggle.addEventListener('click', e=> {
    menu.classList.toggle('show')
  })

