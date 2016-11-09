var myPages = 1;
//changes the first image to the second image 
function change() {
    myPages = myPages + 1;
    var image = document.getElementById('slide')
    if (myPages == 2){
        image.src = "bondfirespread2.jpg"
    }else if (myPages == 3){
        image.src = "bondfirespread3.jpg" 
    }else if (myPages == 4){
        image.src = "bondfirespread4.jpg" 
    }else if (myPages == 5){
        image.src = "bondfirespread5.jpg" 
    }else if (myPages == 6){
        image.src = "bondfirespread6.jpg" 
    }else if (myPages == 7){
        image.src = "bondfirespread7.jpg" 
    }else if (myPages == 8){
        image.src = "bondfirespread8.jpg" 
    }else if (myPages == 9){
        image.src = "bondfirespread9.jpg" 
    }else if (myPages == 10){
        image.src = "bondfirespread10.jpg" 
    }else if (myPages == 11){
        image.src = "bondfirespread11.jpg" 
    }   
} 
    
    