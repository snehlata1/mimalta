 

$('.slide-heading').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    dots:true, 
    
    responsive: [
    
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    
    });
 

$('.our-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow"> <i class="fas fa-angle-right"></i> </button>', 
      prevArrow: '<button class="back-arrow"> <i class="fas fa-angle-left"></i> </button>', 
    
    responsive: [
    
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    
    });

   
     