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
                        var q1 = myArray[0].sec.value;
                        var q2 = myArray[1].sec.value;
                        var q3 = myArray[2].sec.value;
                        // var q4 = document.myform.q4.value;
                        // var q5 = document.myform.q5.value;
                       
                      //  myArray[4].sec.value;

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
                        // if(q4 == 'a'){
                        //     document.getElementById("a-r-1-4").style.display = "block";
                        //     q4__style();
                        //     count ++;
                        //     var res_4= $(".l-a-4").text();
                        // } else if(q4 == 'b'){
                        //     document.getElementById("a-f-1-4").style.display = "block";
                        //     q4__style();
                        //     var res_4= $(".l-b-4").text();
                        // } else if(q4 == 'c'){
                        //     document.getElementById("a-f-1-4").style.display = "block";
                        //     q4__style();
                        //     var res_4= $(".l-c-4").text();
                        // }  
                        
                        // if(q5 == 'a'){
                        //     document.getElementById("a-r-1-5").style.display = "block";
                        //     q5__style();
                        //     count ++;
                        //     var res_5= $(".l-a-5").text();
                        //     var res = Math.round( (100 * count) / 5 );
                        //     document.querySelector('.pract__res-int').textContent = "   " + res + "%";
                        // } else if(q5 == 'b'){
                        //     document.getElementById("a-f-1-5").style.display = "block";
                        //     q5__style();
                        //     var res_5= $(".l-b-5").text();
                        //     var res = Math.round( (100 * count) / 5 );
                        //     document.querySelector('.pract__res-int').textContent = "   " + res + "%";
                        // } else if(q5 == 'c'){
                        //     document.getElementById("a-f-1-5").style.display = "block";
                        //     q5__style();
                        //     var res_5= $(".l-c-5").text();
                        //     var res = Math.round( (100 * count) / 5 );
                        //     document.querySelector('.pract__res-int').textContent = "   " + res + "%";
                        // } 

                       
                        $("#q-1-a-1").css({
                            'color': '#8D9EB9'
                        });
                        $("#q-1-a-1-a").css({
                            'color': '#8D9EB9'
                        });
                        $('#q1-question').removeAttr("disabled");
                        // localStorage.setItem("res", res);
                        // localStorage.setItem("res_1", res_1);
                        // localStorage.setItem("res_2", res_2);
                        // localStorage.setItem("res_3", res_3);
                        // localStorage.setItem("res_4", res_4);
                        // localStorage.setItem("res_5", res_5);
                    
                    }