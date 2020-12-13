//ФОРМА С ВОПРОСАМИ
var myArray = [
    {
        "first" : "Вопрос 1",
        "sec":[ "1", "2", "3", "4"]
     },
     {
        "first" : "Вопрос 2",
        "sec":[ "1", "2", "3", "4"]
     },
     {
        "first" : "Вопрос 3",
        "sec":[ "1", "2", "3", "4"]
     }
]
 
var out = document.getElementById('myForm');



build(myArray)

function build(data){
    for(var i = 0; i < data.length; i++){
        var question = `<div class="q1__box" id="q`+(i+1)+`__box"> 
                    <p> <span class="red">Вопрос ` + (i+1) +`</span> из ` + ( data.length) +`
                   </p> <label  class="text-h1 form__label">  ${data[i].first} </label> <br>  <ul class="form__input">`
        for (var j = 0; j < 4; j++){
            var  label =`
            <li class="q1__answ">
            <input  id = "`+ i + `.` + j +`" name = q"` + i +`" type = "radio" onclick="qq()"> 
                    <label for = "` + i + `.` + j +`">
                        ${data[i].sec[j]}
                    </label> <br>
                    </li>
                   `
            question += label
        }
        
        out.innerHTML += question + ` </ul>
        </div>`
    }
}

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






