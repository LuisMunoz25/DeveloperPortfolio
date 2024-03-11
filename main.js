window.onload = () => {
    window.addEventListener('scroll', function (e) {
        if (window.scrollY > 100) {
            this.document.querySelector("header").classList.add('is-scrolling');
        } else {
            this.document.querySelector("header").classList.remove('is-scrolling');
        }
    })

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
        document.body.classList.toggle('no-scroll');
    });

    window.addEventListener('orientationchange', function () {
 
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
};

