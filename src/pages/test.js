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
    var count = 0;
    for(var i = 0; i < data.length; i++){
        
        var question = `<div class="q1__box" id="q`+(i+1)+`__box"> 
                    <p> <span class="red">Вопрос ` + (i+1) +`</span> из ` + ( data.length) +`
                   </p> <label  class="text-h1 form__label">  ${data[i].first} </label> <br> `
        for (var j = 0; j < 3; j++){
            var  label =`
            <li class="q1__answ">
            <input value =  ${data[i].sec[j].value}  id = "`+ i + `.` + j +`" name = q` + (i+1) +`" type = "radio" onclick = "val('` + i + `.` + j +`')"> 
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
    var button = document.getElementById("q1-question");
    $("#q1-question").click(function(){
        
        document.getElementById("pract__res").style.display = "block";
        document.getElementById("q1-question").style.display = "none";
        document.getElementById("myForm").style.display = "none";
        for(var t = 0; t < data.length; t++){
            if (arrRes[t] == 'a'){
                count ++;
            }
        }
        
        document.querySelector('.pract__res-int').textContent = " Правильных ответов  " + count + " из " +  data.length;
        document.querySelector('.pract__res-int-print').textContent = " Правильных ответов  " + count + " из " +  data.length;
        });
    return count;
   
}
let arrRes = [];
let arrResText = [];
function val(data){
    var text = data.charAt(0);
    var value = data.charAt(2);
    arrRes.push(myArray[text].sec[value].value);
    arrResText.push(myArray[text].sec[value].text);
}
function prints(data){
    var print =  document.getElementById("print_din");
    for(var i = 0; i < data.length; i++){
        var answ = `<span> 
        <p>` + (i+1) +`. ${data[i].first} : <p> <br> <br>
        ВАШ ОТВЕТ: <br>
        <span>
        ` + arrResText[i] +`
        </span> <br> <br> <br>
         `
         print.innerHTML += answ;

    }
   
    
}

function start(){
    document.getElementById("text-1-1").style.display = "none";
    document.getElementById("btn-1-1").style.display = "none";
    document.myform.style.display = "block";
    document.getElementById("q1-question").style.display = "block";
  //  build(myArray, 0)
}  






