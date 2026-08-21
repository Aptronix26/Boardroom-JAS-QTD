(function(){
  const main=document.querySelector('main.main');if(main&&!main.id)main.id='main-content';
  if(!document.querySelector('.ui-skip-link')){const skip=document.createElement('a');skip.className='ui-skip-link';skip.href='#main-content';skip.textContent='Skip to dashboard';document.body.prepend(skip)}
  const sync=()=>document.querySelectorAll('.nav button').forEach(button=>button.classList.contains('active')?button.setAttribute('aria-current','page'):button.removeAttribute('aria-current'));
  document.querySelector('.nav')?.addEventListener('click',()=>requestAnimationFrame(sync));sync();
})();
