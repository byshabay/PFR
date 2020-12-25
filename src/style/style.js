function full(){
    document.getElementById('nav-full').style.display = 'none';
    document.getElementById('nav-mini').style.display = 'block';
}

function mini(){
    document.getElementById('nav-full').style.display = 'block';
    document.getElementById('nav-mini').style.display = 'none';
}

//---------------------СКРИПТ НА MENU 2 FULL--------------------------------------------------------

function min_full(){
     document.getElementById('min-menu-full').style.display = 'none';
     document.getElementById('min-menu-mini').style.display = 'block';
}

function min_mini(){
    document.getElementById('min-menu-mini').style.display = 'none';
    document.getElementById('min-menu-full').style.display = 'block';
}
//-----------------------СКРИПТ НА КНОПКИ В САБМЕНЮ----------------------------------------------------

function pres(){
    document.getElementById('min-menu-full__btn-1').style.color = '#E0585A';
    document.getElementById('min-menu-full__btn-2').style.color = '#1F3E76';
    document.getElementById('min-menu-full__btn-3').style.color = '#1F3E76';

    
    document.getElementById('present').style.display = 'block';
    document.getElementById('lection').style.display = 'none';
    document.getElementById('pract').style.display = 'none';


    document.getElementById('min-menu-full__btn-1').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-2').style.background = 'none';
    document.getElementById('min-menu-full__btn-3').style.background = 'none';

    document.getElementById('pres-ico').style.display = 'none';
    document.getElementById('pres-ico-red').style.display = 'block';
    document.getElementById('pdf-ico-red').style.display = 'none';
    document.getElementById('pract-ico-red').style.display = 'none';
    document.getElementById('pract-ico').style.display = 'block';
    document.getElementById('pdf-ico').style.display = 'block';

    

}
function pres_mini(){
    document.getElementById('pres-ico-mini').style.display = 'none';
    document.getElementById('pres-ico-red-mini').style.display = 'block';
    document.getElementById('pdf-ico-red-mini').style.display = 'none';
    document.getElementById('pract-ico-red-mini').style.display = 'none';
    document.getElementById('pract-ico-mini').style.display = 'block';
    document.getElementById('pdf-ico-mini').style.display = 'block';

    document.getElementById('min-menu-full__btn-4').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-5').style.background = 'none';
    document.getElementById('min-menu-full__btn-6').style.background = 'none';

    document.getElementById('present').style.display = 'block';
    document.getElementById('lection').style.display = 'none';
    document.getElementById('pract').style.display = 'none';

}

function lec(){
    document.getElementById('present').style.display = 'none';
    document.getElementById('lection').style.display = 'block';
    document.getElementById('pract').style.display = 'none';

    document.getElementById('min-menu-full__btn-2').style.color = '#E0585A';
    document.getElementById('min-menu-full__btn-1').style.color = '#1F3E76';
    document.getElementById('min-menu-full__btn-3').style.color = '#1F3E76';

    document.getElementById('min-menu-full__btn-2').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-1').style.background = 'none';
    document.getElementById('min-menu-full__btn-3').style.background = 'none';

    document.getElementById('pres-ico').style.display = 'block';
    document.getElementById('pres-ico-red').style.display = 'none';
    document.getElementById('pdf-ico-red').style.display = 'block';
    document.getElementById('pract-ico-red').style.display = 'none';
    document.getElementById('pract-ico').style.display = 'block';
    document.getElementById('pdf-ico').style.display = 'none';


}

function lec_mini(){
    document.getElementById('pres-ico-mini').style.display = 'block';
    document.getElementById('pres-ico-red-mini').style.display = 'none';
    document.getElementById('pdf-ico-red-mini').style.display = 'block';
    document.getElementById('pract-ico-red-mini').style.display = 'none';
    document.getElementById('pract-ico-mini').style.display = 'block';
    document.getElementById('pdf-ico-mini').style.display = 'none'; 

    document.getElementById('min-menu-full__btn-5').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-4').style.background = 'none';
    document.getElementById('min-menu-full__btn-6').style.background = 'none';

    document.getElementById('present').style.display = 'none';
    document.getElementById('lection').style.display = 'block';
    document.getElementById('pract').style.display = 'none';



}

function pract(){
    document.getElementById('present').style.display = 'none';
    document.getElementById('lection').style.display = 'none';
    document.getElementById('pract').style.display = 'block';


    document.getElementById('min-menu-full__btn-3').style.color = '#E0585A';
    document.getElementById('min-menu-full__btn-2').style.color = '#1F3E76';
    document.getElementById('min-menu-full__btn-1').style.color = '#1F3E76';

    document.getElementById('min-menu-full__btn-3').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-2').style.background = 'none';
    document.getElementById('min-menu-full__btn-1').style.background = 'none';

    document.getElementById('pres-ico').style.display = 'block';
    document.getElementById('pres-ico-red').style.display = 'none';
    document.getElementById('pdf-ico-red').style.display = 'none';
    document.getElementById('pract-ico-red').style.display = 'block';
    document.getElementById('pract-ico').style.display = 'none';
    document.getElementById('pdf-ico').style.display = 'block';


}

function pract_mini(){
    document.getElementById('present').style.display = 'none';
    document.getElementById('lection').style.display = 'none';
    document.getElementById('pract').style.display = 'block';

    document.getElementById('pres-ico-mini').style.display = 'block';
    document.getElementById('pres-ico-red-mini').style.display = 'none';
    document.getElementById('pdf-ico-red-mini').style.display = 'none';
    document.getElementById('pract-ico-red-mini').style.display = 'block';
    document.getElementById('pract-ico-mini').style.display = 'none';
    document.getElementById('pdf-ico-mini').style.display = 'block';

    document.getElementById('min-menu-full__btn-6').style.background = '#FAE8E9';
    document.getElementById('min-menu-full__btn-5').style.background = 'none';
    document.getElementById('min-menu-full__btn-4').style.background = 'none';
}



function about(){
    
    document.getElementById('main__main-box-2').style.display = 'none';
    document.getElementById('main__main-box').style.display = 'block';
    document.getElementById('main__btn-1').style.color = '#E0585A';
    document.getElementById('main__btn-2').style.color = '#1F3E76';
    document.getElementById('main__btn-1').style.border = '2px solid #E1E9F5';
    document.getElementById('main__btn-1').style.borderBottom = '2px solid #fff';
    document.getElementById('main__btn-2').style.border = 'none';
    document.getElementById('main__btn-2').style.borderBottom = '2px solid #E1E9F5';
}

function plan(){
    document.getElementById('main__main-box').style.display = 'none';
    document.getElementById('main__main-box-2').style.display = 'flex';
    document.getElementById('main__btn-1').style.color = '#1F3E76';
    document.getElementById('main__btn-1').style.border = 'none';
    document.getElementById('main__btn-2').style.color = '#E0585A';
    document.getElementById('main__btn-2').style.border = '2px solid #E1E9F5';
    document.getElementById('main__btn-2').style.borderBottom = '2px solid #fff';
    document.getElementById('main__btn-1').style.borderBottom = 'none';

    full();
}


// СКРИПТ НА НИЖНИЕ КНОПКИ ПРАКТИЧЕСКОГО ЗАНЯТИЯ 
function answer(){
    $(".main__object").css({
        'flex': '1',
        'height': 'auto'
    });
    $("#main__answer").css({
        'display': 'block'
        
    });
    $("#main__show-answer").css({
        'display': 'none'
        
    });
    $("#main__dt-show-answer").css({
        'display': 'block'
        
    });
    
    
}
function answer1(){
    $(".main__object").css({
        
        'height': '90%'
    });
    $("#main__answer").css({
        'display': 'none'
        
    });
    $("#main__show-answer").css({
        'display': 'block'
        
    });
    $("#main__dt-show-answer").css({
        'display': 'none'
        
    });
    
    
}

$(function(){
    $('.myprint').click(function(){             //при клике на что срабатывает печать
       // document.querySelector('.res-print').style.display = "block";
    var html_to_print=$('.res-print').html();    //что печатаем
    var iframe=$('<iframe id="print_frame">');
        
    $('body').append(iframe);
    var doc = $('#print_frame')[0].contentDocument || $('#print_frame')[0].contentWindow.document;
    var win = $('#print_frame')[0].contentWindow || $('#print_frame')[0];
    doc.getElementsByTagName('body')[0].innerHTML=html_to_print;
    win.print();
    $('iframe').remove();
    });
    });