$("#form_id").submit(function(e) {
    e.preventDefault();
    var x = document.createElement('IMG');
    var y = document.getElementById('link_input').value;
    x.src = y;
  
    var containerDiv = document.getElementById('container').appendChild(x);
  /*  if (y === 'https://pet-uploads.adoptapet.com/c/f/9/420132627.jpg') {
        document.getElementById('container').appendChild(x);
    }
     else {
      var containerDiv = document.getElementById('container1').appendChild(x);
    } 
There is an issue with my code. 'container' is not in the right position. Its suppose under the first link, but I do not know what I did wrong */


  
});
