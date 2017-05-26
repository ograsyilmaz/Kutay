
// ücgen konum belirleme
// büyük eşit falan  yap deger kontürlu

$(document).ready(function () {
  var boyut = $(window).innerHeight();
  var ucgen = $('.ucgen').innerHeight();

  var mainblok = $('.main-blok').innerHeight() + $('.ucgen').innerHeight();
  var fark = boyut - mainblok;
  var bottomdeger = "";
  var deger = "";
  console.log(boyut + "-" + mainblok);
  if (fark > 0) {
    bottomdeger = 20;
    deger = boyut - (mainblok + bottomdeger);
    console.log(deger + "deger");

    console.log("fark sıfırdan büyük");
  }

  else if (fark === 0) {
    bottomdeger = 0;
    deger = boyut - (mainblok + bottomdeger);


    console.log("fark sıfıra eşit");
    bottomdeger = 2;
  }
  else {
    deger = 0;
    console.log("fark - deger");
    bottomdeger = 0;
  }

  $(".ucgen").css({ "margin-top": deger + "px", "margin-bottom": bottomdeger + "px" });
});


// hamburgen menu açılması fonksiyonu

$('#toggle').click(function () {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});


// Porfolio  seçmek için yazılan kod

$(function () {
  var selectedClass = "";
  $(".portfolio-list>li").click(function () {

    selectedClass = $(this).attr('id');
    $(".portolio-item-list").fadeTo(100, 0.1);
    $(".portolio-item-list div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $(".portolio-item-list").fadeTo(300, 1);
    }, 300);

  });
});



$(function () {
  $(".ucgen").click(function () {
    var top = $(".portfolio").offset() +10;
  


    $("body,html").animate({
      scrollTop: top.top
    });



  });
});

