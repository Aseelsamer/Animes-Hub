'use strict';

Movies.all=[];
function Movies(name,category){
  this.name=name;
  this.category=category;
  this.randomNumber=0;
  Movies.all.push(this);
}

Movies.prototype.randomNumber = function(){

  this.randomNumber= getRandomNumber();
};


function getRandomNumber(){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var container1= document.getElementById('container');
var tableE1= document.createElement('table');
container1.appendChild(tableE1);
function renderTable(){

  var headerRow=document.createElement('tr');
  tableE1.appendChild(headerRow);

  var td1=document.createElement('td');
  td1.textContent='Anime Title';
  headerRow.appendChild(td1);

  var td2=document.createElement('td');
  td2.textContent='Category';
  headerRow.appendChild(td2);

  var td3=document.createElement('td');
  td3.textContent='Random Season';
  headerRow.appendChild(td3);

  var td4=document.createElement('td');
  td4.textContent='Remove';
  headerRow.appendChild(td4);
}

renderTable();

var myForm= document.getElementById('myForm');
myForm.addEventListener('submit',AddToList);

function AddToList(event){
  event.preventDefault();

  for (var i=0;i<Movies.all.length;i++){

    var dataRow=document.createElement('tr');
    var td1=document.createElement('td');
    tableE1.appendChild(dataRow);
    dataRow.append(td1);
    td1.textContent=this.name;



    var td5=document.createElement('td');
    tableE1.appendChild(dataRow);
    dataRow.append(td5);
    td5.textContent=this.category;


    var td6=document.createElement('td');
    tableE1.appendChild(dataRow);
    dataRow.append(td6);
    td6.textContent=this.randomNumber;


    var removeBtn= document.createElement('button');
    dataRow.append(removeBtn);
    removeBtn.textContent='X';
  }


}

// removeBtn.addEventListener('button', function remove(e){
//     if (e.target !== )
//     var index;
//     for (var i=0;i<Movies.all.length;i++){

//     }
// })