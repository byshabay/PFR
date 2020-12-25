//ФОРМА С ВОПРОСАМИ
var myArray = [
    {
        "first" : "Вопрос 1",
        "sec":[
            {"text":"1", "value":"a"},
            {"text":"2", "value":"b"},
            {"text":"3", "value":"c"},
        ]
     },
     {
        "first" : "Вопрос 2",
        "sec":[
            {"text":"1", "value":"a"},
            {"text":"2", "value":"b"},
            {"text":"3", "value":"c"},
        ]
     },
     {
        "first" : "Вопрос 3",
        "sec":[
            {"text":"1", "value":"a"},
            {"text":"2", "value":"b"},
            {"text":"3", "value":"c"},
        ]
     },
     {
        "first" : "Вопрос 4",
        "sec":[
            {"text":"1", "value":"a"},
            {"text":"2", "value":"b"},
            {"text":"3", "value":"c"},
        ]
     }
]
//ПРАВЫЙ БЛОК С ВОПРОСАМИ 

var rightMenu = document.getElementById('test__raz');

right(myArray)
function right(data){
    for(var i = 0; i < data.length; i++){
        var menuItem = `<li class="test__rz-li">
                           <span class="test__quest-li  text-h1"> Вопрос ` + (i+1) +`</span>
                           <br>  ${data[i].first} 
                        </li>
        `

        rightMenu.innerHTML += menuItem
    }
   
}
 
var out = document.getElementById('myForm');



build(myArray)

function build(data){
    for(var i = 0; i < data.length; i++){
        var question = `<div class="q1__box" id="q`+(i+1)+`__box"> 
                    <p> <span class="red">Вопрос ` + (i+1) +`</span> из ` + ( data.length) +`
                   </p> <label  class="text-h1 form__label">  ${data[i].first} </label> <br> `
        for (var j = 0; j < 3; j++){
            var  label =`
            <li class="q1__answ">
            <input value =  ${data[i].sec[j].value}  id = "`+ i + `.` + j +`" name = q` + (i+1) +`" type = "radio"> 
                    <label for = "` + i + `.` + j +`">
                        ${data[i].sec[j].text}
                        
                    </label> <br>
                    </li>
                   `
            question += label
        }
        
        out.innerHTML += question + ` </ul>
        </div>`
    }
}

function check1(data){
    var count = 0;
    for(var t = 0; t < data.length; t++){
        for(var r = 0; r < 3; r++){
            if (data[t].sec[r].value == 'a'){
                count++;
            }
        }
        
    }
    var res = Math.round( (100 * count) /  data.length );
    document.querySelector('.pract__res-int').textContent = "   " + res + "%";
}



// function check1(data){
//     var button = document.getElementById("q1-question");
//     button.innerHTML = "here";
//     $(".l-1").css({
//         'opacity' : '1'
//     });    

// $(".l-2").css({
//         'color' : '#8D9EB9',
//         'opacity' : '1',
//         'font-weight' : 'normal'
//     });    
// $("input").prop('disabled', false);  
//     document.getElementById("q"+(i+2)+"__box").style.display = "block";
//     document.getElementById("q1-question").style.opacity = "0.3";
//     document.getElementById(+"q"+(i+1)+"__box").style.display = "none";
// }






