var Index_slides = 0 /* setting Index_slides to 1*/
display_image(Index_slides); /* calls display_image to display the first image*/

function display_image(n) { /*when the user clicks display_image the function will subtract one or add one to Index_slides*/
    plus(Index_slides += n);

}

function plus(n) {
    var a;
    var x = document.getElementsByClassName("pic_Slides");
   /* if (n> x.length) {Index_slides = 1}
    if (n < 1) {Index_slides = x.length} ;*/
    Index_slides += n;
    Index_slides = Index_slides % x.length ;
    for (a =0; a< x.length; a++ ) {
        x[a].style.display = "none";
    }
    
    x[Index_slides ].style.display = "block";
}
