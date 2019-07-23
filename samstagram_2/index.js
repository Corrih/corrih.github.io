$("#form_id").submit(function (e) { /* the id form_id is submitted, it will run this function*/
    e.preventDefault(); /* this will prevent the entrie page from refreshing, when a form is submitted */
 
    var s = document.createElement('div');/* this variable is for the white box*/
    var x = document.createElement('img'); /* this is for the image element. */
    x.classList.add('x');
    var whitebox = document.createElement("div");
    s.classList.add("whitebox");
    /*  var c = document.getElementById('specific').value;
      s.src = c; */

  
    var x = document.createElement('img'); /* creating a variable, x to create an element to store element */
    var y = document.getElementById('image-input').value; /* to store the value of the image link in y */
    x.src = y;

    
    var sleepy_elem = document.createElement("p"); /* creating a new p element and storing it in a variable */
    sleepy_elem.innerHTML = document.getElementById('text-input').value; /* innerHTML is how we edit the text*/ 
    s.appendChild(x);
    s.appendChild(sleepy_elem);
    document.getElementById("container").appendChild(s);


    /* i had to add this because image_input was only declared in the function addNewItem*/
    sleepy_elem.addEventListener("click", function () {  
        var sleepy_elm_id = String(Math.random());
        sleepy_elm_id = " ";
        sleepy_elm_id.remove()

    }); 
});
