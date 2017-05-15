
    // ücgen konum belirleme
    // büyük eşit falan  yap deger kontürlu

      $( document ).ready(function() {
                var boyut=$(document).height();
                var ucgen=$('.ucgen').height();
                var fark=boyut-ucgen;
                var mainblok=$('.main-blok').height()+$('.ucgen').height();
                var bottomdeger="";
                var deger="";
                if(fark>0)
                {
                  deger=(boyut-mainblok);
                  console.log("fark sıfırdan büyük");
                    bottomdeger=5;
                    
                }

                else if (fark===0) {
                  deger=5;
                  console.log("fark sıfıra eşit");
                   bottomdeger=2;
                }
                else {
                  deger=5;
                  console.log("fark - deger");
                  bottomdeger=1;
                }

                  $(".ucgen").css({"margin-top":deger+"px","margin-bottom":bottomdeger+"px"});
});


// hamburgen menu açılması fonksiyonu

$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});