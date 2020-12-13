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
        var question = `
                    <p> Вопрос ` + (i+1) +` из ` + ( data.length) +`
                    <p>  ${data[i].first} </p>`
        for (var j = 0; j < 4; j++){
            var  label =`<input  id = "`+ i + `.` + j +`" name = "` + i +`" type = "radio"> 
                    <label for = "` + i + `.` + j +`">
                        ${data[i].sec[j]}
                    </label> <br>
                   `
            question += label
        }
        
        out.innerHTML += question
    }
}




