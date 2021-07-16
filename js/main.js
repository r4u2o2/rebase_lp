$(function(){
    
    // ------
    // Rental Price tab
    // -----

    $('#tab01').on('click', function(){
        console.log('34クリック');
        $('.tab-line').css('background', '#EBEBEB');
        $('#tab01 > .tab-line').css('background', '#B3EFB3');
        $('.tab-box > li').css('font-size', '14px');
        $('.tab01').css('font-size', '33px');
        $('.slider').css('display', 'none');
        $('.people34').css('display', 'block');
    });
    $('#tab02').on('click', function(){
        console.log('12クリック');
        $('.tab-line').css('background', '#EBEBEB');
        $('#tab02 > .tab-line').css('background', '#B3EFB3');
        $('.tab-box > li').css('font-size', '14px');
        $('.tab02').css('font-size', '33px');
        $('.slider').css('display', 'none');
        $('.people12').css('display', 'block');
    });
    $('#tab03').on('click', function(){
        console.log('ソロクリック');
        $('.tab-line').css('background', '#EBEBEB');
        $('#tab03 > .tab-line').css('background', '#B3EFB3');
        $('.tab-box > li').css('font-size', '14px');
        $('.tab03').css('font-size', '30px');
        $('.slider').css('display', 'none');
        $('.soro').css('display', 'block');
    });

    // ------
    // Q&A
    // -----

    //アコーディオンをクリックした時の動作
    $('.qa-title').on('click', function() {//タイトル要素をクリックしたら
        console.log('QAクリック');
    var findElm = $(this).next('.answer');//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
      
    if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('close');//クラス名を除去し
    }else{//それ以外は
      $(this).addClass('close');//クラス名closeを付与
    }
  });
});