$(function() {
    

    
// MISE EN PLACE DE LA NAVIGATION DU MENU PAR ANCRES ET ADAPTATION DU MENU LORS DE LA NAVIGATION //
    
    $(document).on("scroll", onScroll);
    
    //navigation fluide vers l'ancre
    
    $('header a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    // Element menu "active" lors de la navigation sur section correspondante
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('header a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('header a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    
// AFFICHAGE DES PROJETS EN FONCTION DE L'ELEMENT SELECTIONNE DS LE MENU INTERNE //
    
    $('#projets li').on('click', function(e) {
        e.preventDefault();
        var file = $('#projets li');
        file.each(function() {
            $(this).removeClass('select');
        });
        $('figcaption').each(function() {
            $(this).removeClass('inactive');
        });
        
        $(this).addClass('select');
        
        if ( $('#creative').hasClass('select') ) {
            var nonCreative = $('figcaption[class!="creative"]');
            nonCreative.each(function() {
                $(this).addClass('inactive');
            });
        } else if ( $('#corporate').hasClass('select') )  {
            var nonCorporate = $('figcaption[class!="corporate"]');
            nonCorporate.each(function() {
                $(this).addClass('inactive');
            })
        } else if ( $('#portfolio').hasClass('select') )  {
            var nonPortfolio = $('figcaption[class!="portfolio"]');
            nonPortfolio.each(function() {
                $(this).addClass('inactive');
            })
        }
    });
});

