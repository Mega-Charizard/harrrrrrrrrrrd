canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

img_width=300;
img_height=100;
img_x=100;
img_y=100;



var img_image;





function add()
{
    background_imgTag = new Image(); //defining a variable with a new image 
    background_imgTag.onload = uploadBackground(); // setting a function, onloading this variable 
    background_imgTag.src = img_image; // load image 
   


}


function uploadBackground()
{
    ctx.drawImage(background_imgTag,img_x,img_y,img_width,img_height);
    
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if((keyPressed>=97 && keyPressed<=122)||(keyPressed>=65 && keyPressed<=90))
        {
           alphabetkey();
           
        }

        else if (keyPressed>=48 && keyPressed<=57)
        {
            numberkey();
        }

        else if (keyPressed>=37 && keyPressed<=40)
        {
            arrowkey();
        }

        else if ( (keyPressed== 17) || (keyPressed==18 || keyPressed==27))
        {
            specialkey();
        }

        else 
        {
            otherkey();
        }
    }


    function numberkey()
    {
        img_image="numkey.png";
        add();
    }


    function arrowkey()
    {
        img_image="Arrkey.png";
        add();
    }


    function alphabetkey()
    {
        img_image="Alpkey.png";
        add();
    }


    function otherkey()
    {
        img_image="otherkey.png";
        add();
    }


    function spkey()
    {
        img_image="spkey.png";
        add();
    }