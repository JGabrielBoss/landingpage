//JQuery
$(document).ready(function () {
    //Animação de destaque do botão
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    //Animações do site
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');

        //essa variavel verifica se a tela esta no começo
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        //Se a posição da janela for menor que 0 o header não tem sombra
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        //Loop para saber qual seção o usuário está
        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    //Animação da imagem  e shape da home
    ScrollReveal().reveal('.home-logo', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.shape', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    //Animação do CTA
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    //Animação dos serviços
    ScrollReveal().reveal('.service', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    //Animação dos projetos
    ScrollReveal().reveal('.car', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.projects-image', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    //Animação do titulo e subtitulo
    ScrollReveal().reveal('.section-title', {
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.section-subtitle', {
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.project-content', {
        duration: 2000,
        distance: '20%'
    });
});
