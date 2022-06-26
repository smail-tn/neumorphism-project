let Api = "https://api.github.com/users/ElzeroWebSchool/repos";
let themeToggler = document.querySelector('.theme__toggler')  ; 
let navToggler = document.querySelector('.nav__toggler') ; 


themeToggler.addEventListener('click' , function() { 
    let  i = this.firstElementChild ; 
    replacer(i ,"fa-moon" , "fa-sun");
    // Toggler dark theme class 
    document.body.classList.toggle('dark-theme')
})

function replacer(el , class1 ,class2) { 
    if (el.classList.contains(class1)) { 
        el.classList.replace(class1 , class2)
    }else { 
        el.classList.replace(class2 ,class1)
    }
}

navToggler.addEventListener('click' ,function() { 
    let  i = this.firstElementChild ; 
    let nav = document.querySelector('.nav');
    nav.classList.toggle('show') ; 
    replacer(i ,"fa-bars" , "fa-times")
    window.onscroll = function() { 
        if(nav.classList.contains('show')) {
            nav.classList.remove('show')
            i.classList.replace('fa-times' ,"fa-bars")
        }
    }
})







