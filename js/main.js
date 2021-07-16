$(function(){
    // ------
    // アニメーション
    // -----
    // 1. 要素の位置を取得
    var cctPosY01 = $('.concept-text').offset().top;
    console.log('cctPosY01:' + cctPosY01);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(cctPosY01- $(window).height() < dy)
    {
        $('.concept').addClass('fade-in');
    }
    });

    // 1. 要素の位置を取得
    var rcmPosY01 = $('.recommend-box').offset().top;
    console.log('rcmPosY01:' + rcmPosY01);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(rcmPosY01- $(window).height() < dy)
    {
        $('.recommend-set').addClass('fade-in');
    }
    });

    // 1. 要素の位置を取得
    var rsnPosY01 = $('.reason01').offset().top;
    var rsnPosY02 = $('.reason02').offset().top;
    var rsnPosY03 = $('.reason03').offset().top;
    console.log('rsnPosY01:' + rsnPosY01);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(rsnPosY01- $(window).height() < dy)
    {
        $('.reason01').addClass('fade-in');
    }
    if(rsnPosY02- $(window).height() < dy){
        $('.reason02').addClass('fade-in-second');
    }
    if(rsnPosY03- $(window).height() < dy){
        $('.reason03').addClass('fade-in-third');
    }
    });


    // 1. 要素の位置を取得
    var prcPosY01 = $('.wrapper').offset().top;
    console.log('prcPosY01:' + prcPosY01);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(prcPosY01- $(window).height() < dy)
    {
        $('.wrapper').addClass('fade-in');
    }
    });

    // 1. 要素の位置を取得
    var htrPosY01 = $('.howto01').offset().top;
    var htrPosY02 = $('.howto02').offset().top;
    var htrPosY03 = $('.howto03').offset().top;
    var htrPosY04 = $('.howto04').offset().top;
    var htrPosY05 = $('.howto05').offset().top;
    // console.log('htrPosY01:' + htrPosY01);

    // 2. スクロール位置取得
    $(window).on('scroll', function(){
        var dy = $(this).scrollTop();
        // console.log('dy' + dy);
    // 3. 条件文
    // console.log($(window).height());
    // 4. 対象要素にクラスの付与
    if(htrPosY01- $(window).height() < dy)
    {
        $('.howto01').addClass('fade-in');
    }
    if(htrPosY02- $(window).height() < dy)
    {
        $('.howto02').addClass('fade-in-second');
    }
    if(htrPosY03- $(window).height() < dy)
    {
        $('.howto03').addClass('fade-in-third');
    }
    if(htrPosY04- $(window).height() < dy)
    {
        $('.howto04').addClass('fade-in-fourth');
    }
    if(htrPosY05- $(window).height() < dy)
    {
        $('.howto05').addClass('fade-in-fifth');
    }
    });


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



    // 4日後の日付表示
    var date = new Date();
    date.setDate(date.getDate() + 4);
    var year  = date.getFullYear();
    var month = date.getMonth() + 1;
    var day   = date.getDate();
    var week = date.getDay();

    var week_ja= new Array("日","月","火","水","木","金","土");
        
    $(window).on('load', function(){
    // console.log('ロード');
    // console.log(month + '月');
    console.log(week_ja[week] + '曜日');
    $('.month').text(month);
    $('.day').text(day);
    $('.week').text('（' + week_ja[week] + '）');
    $('.banner').addClass('right-in');
    $('.date').addClass('bottom-in');
    });
    
});