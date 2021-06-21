var elem;
var a = true;
var lifeone = 20;
var lifetwo = 20;
var lifethree = 20;
var lifefour = 20;
var numrandom;



function whostart() {

    numrandom = Math.floor(Math.random() * 2);

    if (numrandom == 0) {
        alert("HA SALIDO CARA!!");
    } else {
        alert("HA SALIDO CRUZ!!");
    }




}

function plusone(){
    lifeone = lifeone + 1;
    document.getElementById('pone').innerHTML = lifeone;
}

function minusone(){
    lifeone = lifeone - 1;
    document.getElementById('pone').innerHTML = lifeone;
}

function plustwo(){
    lifetwo = lifetwo + 1;
    document.getElementById('ptwo').innerHTML = lifetwo;
}

function minustwo(){
    lifetwo = lifetwo - 1;
    document.getElementById('ptwo').innerHTML = lifetwo;
}

function plusthree(){
    lifethree = lifethree + 1;
    document.getElementById('pthree').innerHTML = lifethree;
}

function minusthree(){
    lifethree = lifethree - 1;
    document.getElementById('pthree').innerHTML = lifethree;
}

function plusfour(){
    lifefour = lifefour + 1;
    document.getElementById('pfour').innerHTML = lifefour;
}

function minusfour(){
    lifefour = lifefour - 1;
    document.getElementById('pfour').innerHTML = lifefour;
}


function onlyreset() {
    lifeone = 20;
    lifetwo = 20;
    lifethree = 20;
    lifefour = 20;
    location.reload();
}