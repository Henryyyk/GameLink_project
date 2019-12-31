$('document').ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000, // ele só aceita o tem e mili segundos 
        center: true,
        responsive: {
            0: { // de 0px até 360px ele mostrará apenas 1 item
                items: 1 
            },

            360: { // de 360px a 1000px ele mostrará 3 itens
                items: 1
            },

            1000: { // de 1000px pra cima ele mostrara 5 itens
                items: 1
            }
        }
    })

    $('.menu').click(function(){
        $('ul').toggleClass('active')
    })
})