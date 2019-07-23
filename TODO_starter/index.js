$('#form1').submit(function (e) {
    e.preventDefault();

    var todo_input = document.getElementById('todo-input');
    var todo_text = todo_input.value;

    addNewItem(todo_text);
    todo_input.value="";
});

function addNewItem(todo_text){ 
    var todo_card = document.createElement('div');
    
    function pickRandomColor
    console.log(randomColorList[0]);
 var color= randomColorList[Math.floor(Math.random() * randomColorList)]
 return color;
    todo_card.classList.add('todo_card');
    
    var randomColorList = [
     "rgb(255, 102, 255)", 
     "rgb(255, 128, 0)",
     "rgb(255, 255, 51)",
     "rgb(0, 255,0)", 
    
 ]

    var todo_text_elem = document.createElement("p");
    
    todo_text_elem.innerHTML = todo_text;
    
    todo_card.appendChild(todo_text_elem);
    
document.getElementById("container").appendChild(todo_card);



todo_card.addEventListener("click", function(){
      var todo_card_id = String(Math.random());
    todo_card.id = todo_card_id
    document.getElementById(todo_card_id).remove()
    });
}
function differentColor() {
    console.log("Executing differentColor()...")
    
}
