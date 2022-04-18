
window.addEventListener('load', (event) => {

    elements = document.getElementsByClassName("hobbyDiv");
    for(var i = 0; i < elements.length; i++){
             elements[i].addEventListener("click", onClick);
    }

    
    function onClick(event){
  
        if(event.target.id=='soccerImg'){
            if(event.target.state='0'){
            document.getElementsByClassName("hobbyDiv").item(2).innerHTML='<p>Soccer</p>';
            event.target.state='1';
            }else{
                document.getElementsByClassName("hobbyDiv").item(2).innerHTML='<img class="hobby-image"id="soccerImg" src="images/001-soccer.png" alt="iphone-mockup">';
                event.target.state='0';
            }
        console.log(event.target.id);}
        else if(event.target.id=='chessImg'){
            if(event.target.state='0'){
            document.getElementsByClassName("hobbyDiv").item(0).innerHTML='<p>Chess</p>';
            event.target.state='1';
            }else{
                document.getElementsByClassName("hobbyDiv").item(0).innerHTML=' <img class="hobby-image" id="chessImg"src="images/001-chess.png" alt="iphone-mockup">';
                event.target.state='0';
            }
        }
        else{
            if(event.target.state='0'){
            document.getElementsByClassName("hobbyDiv").item(1).innerHTML='<p>Drawing</p>';
            event.target.state='1';
            }else{
                document.getElementsByClassName("hobbyDiv").item(1).innerHTML='<img class="hobby-image"id="pencilImg" src="images/001-pencil.png" alt="iphone-mockup">';
                event.target.state='0';
            }
        }
    };  


  

});
    