var elem;
var a = true;
var lifeone = 20;
var lifetwo = 20;






function plusone(){
    lifeone = lifeone + 1;
    document.getElementById('life-player-one').innerHTML = lifeone;    
    

}


function minusone(){
    lifeone = lifeone - 1;
    document.getElementById('life-player-one').innerHTML = lifeone;    
    

}


function plustwo(){
    lifetwo = lifetwo + 1;
    document.getElementById('life-player-two').innerHTML = lifetwo;    
    

}

function minustwo(){
    lifetwo = lifetwo - 1;
    document.getElementById('life-player-two').innerHTML = lifetwo;    
    

}



function hiddenmanaone() {
    
    

    if (a) {
        elem = document.getElementById('mana-player-one').style.display = "flex";
        a = false;
    
}else{
    elem = document.getElementById('mana-player-one').style.display = "none";
    a = true;
    
}

}



function hiddenmanatwo() {
    
    

    if (a) {
        elem = document.getElementById('mana-player-two').style.display = "flex";
        a = false;
    
}else{
    elem = document.getElementById('mana-player-two').style.display = "none";
    a = true;
    
}

}



function isredone(){
    document.getElementById('top-block').style.backgroundColor = "#de0000";
}

function isgreenone(){
    document.getElementById('top-block').style.backgroundColor = "#008c28";
}

function isblueone(){
    document.getElementById('top-block').style.backgroundColor = "#00aab7";
}

function isblackone(){
    document.getElementById('top-block').style.backgroundColor = "#232323";
}

function iswhiteone(){
    document.getElementById('top-block').style.backgroundColor = "#e0e0e0";
}


function isredtwo(){
    document.getElementById('bottom-block').style.backgroundColor = "#de0000";
}

function isgreentwo(){
    document.getElementById('bottom-block').style.backgroundColor = "#008c28";
}

function isbluetwo(){
    document.getElementById('bottom-block').style.backgroundColor = "#00aab7";
}

function isblacktwo(){
    document.getElementById('bottom-block').style.backgroundColor = "#232323";
}

function iswhitetwo(){
    document.getElementById('bottom-block').style.backgroundColor = "#e0e0e0";
}








function reset(){
    lifeone = 20;
    document.getElementById('life-player-one').innerHTML = lifeone;
    lifetwo = 20;
    document.getElementById('life-player-two').innerHTML = lifetwo;


}