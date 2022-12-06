function turnon(){
    document.getElementById('image').src='images/on.gif';
    document.getElementById('heading').style.fontFamily='cursive';
    document.getElementById('heading').style.color='orange';
}

function turnoff(){
    document.getElementById('image').src='images/off.gif';
    document.getElementById('heading').style.fontFamily='Serif, Sans-serif,';
    document.getElementById('heading').style.color='black';
   
}


function clickme(){
    document.getElementById('para1').innerHTML='Hey whatsupp';
    document.getElementById('para1').style.backgroundColor='yellow';
}

function hideme(){
    
    document.getElementById('image').style.visibility='hidden';
}

function showme(){
    
    document.getElementById('image').style.visibility='visible';
}

function hide2me(){
    
    document.getElementById('para1').style.display='none';
}


