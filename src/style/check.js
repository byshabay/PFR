 //скрипт проверки
 function check1(){
    $(".l-1").css({
            'opacity' : '1'
        });    
    
    $(".l-2").css({
            'color' : '#8D9EB9',
            'opacity' : '1',
            'font-weight' : 'normal'
        });    
    $("input").prop('disabled', false);    

            var q1 = document.myform.q1.value;
            var q2 = document.myform.q2.value;
            var q3 = document.myform.q3.value;
            var q4 = document.myform.q4.value;
            var q5 = document.myform.q5.value;
            var q6 = document.myform.q6.value;
            var q7 = document.myform.q7.value;
            var q8 = document.myform.q8.value;
            var q9 = document.myform.q9.value;
            var q10 = document.myform.q10.value;
            var q11 = document.myform.q11.value;
            var q12= document.myform.q12.value;
            var q13= document.myform.q13.value;
            var q14 = document.myform.q14.value;
            var q15 = document.myform.q15.value;
            var q16= document.myform.q16.value;
            var q17= document.myform.q17.value;
            var q18 = document.myform.q18.value;



        
   

    var count = 0;
    
    if(q1 == 'a'){
        document.getElementById("a-r-1-1").style.display = "block";
        count ++;
        var res_1= $(".l-a-1").text();

    } 
    else if(q1 == 'b') 
    {
        document.getElementById("a-f-1-1").style.display = "block";
        var res_1= $(".l-b-1").text();

    }else if(q1 == 'c')
     {
        document.getElementById("a-f-1-1").style.display = "block";
        var res_1= $(".l-c-1").text();
    } 

    document.getElementById("q2__box").style.display = "block";
    document.getElementById("q1-question").style.opacity = "0.3";
    document.getElementById("q1__box").style.display = "none";

   
    if(q2 == 'a'){
        document.getElementById("a-r-1-2").style.display = "block";
        q2__style();
        count ++;
        var res_2= $(".l-a-2").text();
    } else if(q2 == 'b'){
        document.getElementById("a-f-1-2").style.display = "block";
        q2__style();
        var res_2= $(".l-b-2").text();
    } else if(q2 == 'c'){
        document.getElementById("a-f-1-2").style.display = "block";
        q2__style();
        var res_2= $(".l-c-2").text();
    }

    if(q3 == 'a'){
        document.getElementById("a-r-1-3").style.display = "block";
        q3__style();
        count ++;
        var res_3= $(".l-a-3").text();
    } else if(q3 == 'b'){
        document.getElementById("a-f-1-3").style.display = "block";
        q3__style();
        var res_3= $(".l-b-3").text();
    }else if(q3 == 'c'){
        document.getElementById("a-f-1-3").style.display = "block";
        q3__style();
        var res_3= $(".l-c-3").text();
    }
    if(q4 == 'a'){
        document.getElementById("a-r-1-4").style.display = "block";
        q4__style();
        count ++;
        var res_4= $(".l-a-4").text();
    } else if(q4 == 'b'){
        document.getElementById("a-f-1-4").style.display = "block";
        q4__style();
        var res_4= $(".l-b-4").text();
    } else if(q4 == 'c'){
        document.getElementById("a-f-1-4").style.display = "block";
        q4__style();
        var res_4= $(".l-c-4").text();
    }  

    if(q5 == 'a'){
        document.getElementById("a-r-1-5").style.display = "block";
        q5__style();
        count ++;
        var res_5= $(".l-a-5").text();
    } else if(q5 == 'b'){
        document.getElementById("a-f-1-5").style.display = "block";
        q5__style();
        var res_5= $(".l-b-5").text();
    } else if(q5 == 'c'){
        document.getElementById("a-f-1-5").style.display = "block";
        q5__style();
        var res_5= $(".l-c-5").text();
    }  
    if(q6 == 'a'){
        document.getElementById("a-r-1-6").style.display = "block";
        q6__style();
        count ++;
        var res_6= $(".l-a-6").text();
    } else if(q6 == 'b'){
        document.getElementById("a-f-1-6").style.display = "block";
        q6__style();
        var res_6= $(".l-b-6").text();
    } else if(q6 == 'c'){
        document.getElementById("a-f-1-6").style.display = "block";
        q6__style();
        var res_6= $(".l-c-6").text();
    } 
    
    if(q7 == 'a'){
        document.getElementById("a-r-1-7").style.display = "block";
        q7__style();
        count ++;
        var res_7= $(".l-a-7").text();
    } else if(q7 == 'b'){
        document.getElementById("a-f-1-7").style.display = "block";
        q7__style();
        var res_7= $(".l-b-7").text();
    } else if(q7 == 'c'){
        document.getElementById("a-f-1-7").style.display = "block";
        q7__style();
        var res_7= $(".l-c-7").text();
    } 

    if(q8 == 'a'){
        document.getElementById("a-r-1-8").style.display = "block";
        q8__style();
        count ++;
        var res_8= $(".l-a-8").text();
    } else if(q8 == 'b'){
        document.getElementById("a-f-1-8").style.display = "block";
        q8__style();
        var res_8= $(".l-b-8").text();
    } else if(q8 == 'c'){
        document.getElementById("a-f-1-8").style.display = "block";
        q8__style();
        var res_8= $(".l-c-8").text();
    } 

    if(q9 == 'a'){
        document.getElementById("a-r-1-9").style.display = "block";
        q9__style();
        count ++;
        var res_9= $(".l-a-9").text();
    } else if(q9 == 'b'){
        document.getElementById("a-f-1-9").style.display = "block";
        q9__style();
        var res_9= $(".l-b-9").text();
    } else if(q9 == 'c'){
        document.getElementById("a-f-1-9").style.display = "block";
        q9__style();
        var res_9= $(".l-c-9").text();
    } 

    if(q10 == 'a'){
        document.getElementById("a-r-1-10").style.display = "block";
        q10__style();
        count ++;
        var res_10= $(".l-a-10").text();
    } else if(q10 == 'b'){
        document.getElementById("a-f-1-10").style.display = "block";
        q10__style();
        var res_10= $(".l-b-10").text();
    } else if(q10 == 'c'){
        document.getElementById("a-f-1-10").style.display = "block";
        q10__style();
        var res_10= $(".l-c-10").text();
    } 
    if(q11 == 'a'){
        document.getElementById("a-r-1-11").style.display = "block";
        q11__style();
        count ++;
        var res_11= $(".l-a-11").text();
    } else if(q11 == 'b'){
        document.getElementById("a-f-1-11").style.display = "block";
        q11__style();
        var res_11= $(".l-b-11").text();
    } else if(q11 == 'c'){
        document.getElementById("a-f-1-11").style.display = "block";
        q11__style();
        var res_11= $(".l-c-11").text();
    } 
    if(q12 == 'a'){
        document.getElementById("a-r-1-12").style.display = "block";
        q12__style();
        count ++;
        var res_12= $(".l-a-12").text();
    } else if(q12 == 'b'){
        document.getElementById("a-f-1-12").style.display = "block";
        q12__style();
        var res_12= $(".l-b-12").text();
    } else if(q12 == 'c'){
        document.getElementById("a-f-1-12").style.display = "block";
        q12__style();
        var res_12= $(".l-c-12").text();
    } 

    if(q13 == 'a'){
        document.getElementById("a-r-1-13").style.display = "block";
        q13__style();
        count ++;
        var res_13= $(".l-a-13").text();
    } else if(q13 == 'b'){
        document.getElementById("a-f-1-13").style.display = "block";
        q13__style();
        var res_13= $(".l-b-13").text();
    } else if(q13 == 'c'){
        document.getElementById("a-f-1-13").style.display = "block";
        q13__style();
        var res_13= $(".l-c-13").text();
    } 

    if(q14 == 'a'){
        document.getElementById("a-r-1-14").style.display = "block";
        q14__style();
        count ++;
        var res_14= $(".l-a-14").text();
    } else if(q14 == 'b'){
        document.getElementById("a-f-1-14").style.display = "block";
        q14__style();
        var res_14= $(".l-b-14").text();
    } else if(q14 == 'c'){
        document.getElementById("a-f-1-14").style.display = "block";
        q14__style();
        var res_14= $(".l-c-14").text();
    } 

    if(q15 == 'a'){
        document.getElementById("a-r-1-15").style.display = "block";
        q15__style();
        count ++;
        var res_15= $(".l-a-15").text();
    } else if(q15 == 'b'){
        document.getElementById("a-f-1-15").style.display = "block";
        q15__style();
        var res_15= $(".l-b-15").text();
    } else if(q15 == 'c'){
        document.getElementById("a-f-1-15").style.display = "block";
        q15__style();
        var res_15= $(".l-c-15").text();
    } 
    if(q16 == 'a'){
        document.getElementById("a-r-1-16").style.display = "block";
        q16__style();
        count ++;
        var res_16= $(".l-a-16").text();
    } else if(q16 == 'b'){
        document.getElementById("a-f-1-16").style.display = "block";
        q16__style();
        var res_16= $(".l-b-16").text();
    } else if(q16 == 'c'){
        document.getElementById("a-f-1-16").style.display = "block";
        q16__style();
        var res_16= $(".l-c-16").text();
    } 
    if(q17 == 'a'){
        document.getElementById("a-r-1-17").style.display = "block";
        q17__style();
        count ++;
        var res_17= $(".l-a-17").text();
    } else if(q17 == 'b'){
        document.getElementById("a-f-1-17").style.display = "block";
        q17__style();
        var res_17= $(".l-b-17").text();
    } else if(q17 == 'c'){
        document.getElementById("a-f-1-17").style.display = "block";
        q17__style();
        var res_17= $(".l-c-17").text();
    } 
    if(q18 == 'a'){
        document.getElementById("a-r-1-18").style.display = "block";
        q18__style();
        count ++;
        var res_18= $(".l-a-18").text();
        var res = Math.round( (100 * count) / 18 );
        document.querySelector('.pract__res-int').textContent = "   " + res + "%";
    } else if(q18 == 'b'){
        document.getElementById("a-f-1-18").style.display = "block";
        q18__style();
        var res_18= $(".l-b-18").text();
        var res = Math.round( (100 * count) / 18 );
        document.querySelector('.pract__res-int').textContent = "   " + res + "%";
    } else if(q18 == 'c'){
        document.getElementById("a-f-1-18").style.display = "block";
        q18__style();
        var res_18= $(".l-c-18").text();
        var res = Math.round( (100 * count) / 18 );
        document.querySelector('.pract__res-int').textContent = "   " + res + "%";
    } 

    
    $("#q-1-a-1").css({
        'color': '#8D9EB9'
    });
    $("#q-1-a-1-a").css({
        'color': '#8D9EB9'
    });
    var res = Math.round( (100 * count) / 18 );
    $('#q1-question').removeAttr("disabled");
    localStorage.setItem("res", res);
    localStorage.setItem("res_1", res_1);
    localStorage.setItem("res_2", res_2);
    localStorage.setItem("res_3", res_3);
    localStorage.setItem("res_4", res_4);
    localStorage.setItem("res_5", res_5);

    localStorage.setItem("res_6", res_6);
    localStorage.setItem("res_7", res_7);
    localStorage.setItem("res_8", res_8);
    localStorage.setItem("res_9", res_9);
    localStorage.setItem("res_10", res_10);

    localStorage.setItem("res_11", res_11);
    localStorage.setItem("res_12", res_12);
    localStorage.setItem("res_13", res_13);
    localStorage.setItem("res_14", res_14);
    localStorage.setItem("res_15", res_15);
    localStorage.setItem("res_16", res_16);
    localStorage.setItem("res_17", res_17);
    localStorage.setItem("res_18", res_18);


}