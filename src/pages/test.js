var myArray = [
    {
        "first" : "Вопрос 1",
        "sec1": "Ответ 1 - 1",
        "sec2": "Ответ 1 - 2",
        "sec3": "Ответ 1 - 3",
        "sec4": "Ответ 1 - 4"
     },
     {
        "first" : "Вопрос 2",
        "sec1": "Ответ 2 - 1",
        "sec2": "Ответ 2 - 2",
        "sec3": "Ответ 2 - 3",
        "sec4": "Ответ 2 - 4"
     },
     {
        "first" : "Вопрос 3",
        "sec1": "Ответ 3 - 1",
        "sec2": "Ответ 3 - 2",
        "sec3": "Ответ 3 - 3",
        "sec4": "Ответ 3 - 4"
     }
]
 
var out = document.getElementById('myForm');
build(myArray)

function build(data){
    for(var i = 0; i < data.length; i++){
        var label = `
                    <p> Вопрос ` + (i+1) +`
                    <p>  ${data[i].first} </p>
                    <input id = "` + i +`" type = "radio"> 
                    <label for = "` + i +`">
                        ${data[i].first}
                    </label> <br>`
        out.innerHTML += label 
    }
}




