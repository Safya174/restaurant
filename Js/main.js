if (document.querySelector(".mySwiper")) {
  new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button",
      prevEl: ".swiper-button-pr",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
    },
  });
}

if (document.querySelector(".mySwiper-menu")) {
  new Swiper(".mySwiper-menu", {
    loop: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-pr1",
      prevEl: ".swiper-button-ne1",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 4 },
    },
  });
}
$('#Home').click(function(e){
 e.preventDefault();
 $('body').css('overflow', 'hidden');
 $('body').animate({opacity:0, top: '-20px'},{
    duration:400,
    step: function(now,fx){
      if(fx.prop == 'top'){
         $('body').css('transform',`translateY(${now}px)`)
      }
    },
    complete: function(){
      window.location.href = "./index.html";
    }
 })

})
$('#Our-Vision').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step: function(now,fx){
      if(fx.prop == 'top'){
         $('body').css('transform',`translateY(${now}px)`)
      }
  },
    complete: function(){
      window.location.href = "./OUR Vision.html";
    }
  })
})
$('#Menu').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }
    },
    complete: function(e){
      window.location.href = "./Menu.html" 
    }
  })
})
$('#Specials').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }

    },
    complete: function(e){
      window.location.href = "./Specials.html" 
    }
  })
})
$('#Contact-Us').click(function(e){
  e.preventDefault()
  $('body').css('overflow','hidden');
  $('body').animate({opacity:0,top:'-20px'},{
    duration:400,
    step:function(now,fx){
      if(fx.prop == 'top')
      {
        $('body').css('transform',`translateY(${now})px`)
      }

    },
    complete: function(e){
      window.location.href = "./Contact Us.html" 
    }
  })
})
let CallckedCatg = "All";

$('.btn-categry').click(function(){
  let foodCatg = $(this).html();
  CallckedCatg = foodCatg;
  foodFliter();
})
function foodFliter() {
   if(CallckedCatg == 'All')
   {
     $('.filter').fadeIn(400)
   }
   else{
    $('.filter').fadeOut(200)
    $(`.filter[data-name="${CallckedCatg}"]`).show()
   }
}

