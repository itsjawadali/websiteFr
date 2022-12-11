burgerresp = document.querySelector('.burgerresp')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav_list')
rightnav = document.querySelector('.rightnav')

burgerresp.addEventListener('click', ()=>{
    nav_list.classList.toggle('v-classresp');
    rightnav.classList.toggle('v-classresp');
    navbar.classList.toggle('h-navresp');

} 
)