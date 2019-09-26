
document.body.onload = setBoard;

var app = document.getElementById('app')
var numberClicks = 1;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function marker() {
   console.log('functioning', numberClicks)
   numberClicks++;

   var q = this.id.split("-");
   var idx = (Number(q[0]) * 3 + Number(q[1]));

   if (numberClicks % 2) {
      this.innerHTML = 'O';
      arr[idx] = 1;
   } else {
      this.innerHTML = 'X';
      arr[idx] = 2;
   }

   console.log(idx);
   console.log(q);
   console.log(arr);
}

function setBoard() {
   // var element = document.createElement(tagName[, options]);
   var title = document.createElement('p');
   title.innerHTML = "Tic-Tac-Toe";
   title.className = "h1 text-center";
   app.appendChild(title);

   // Create Board Container
   var newDiv = document.createElement('div');
   newDiv.className = "container";
   for (let i = 0; i < 3; i++) {
      var rowDiv = document.createElement('div');
      rowDiv.className = "row justify-content-center";

      for (let j = 0; j < 3; j++) {
         var colDiv = document.createElement('div');
         colDiv.className = "col-3 border btn-lg";
         colDiv.id = i + "-" + j;
         colDiv.addEventListener('click', marker);
         rowDiv.appendChild(colDiv);
      }
      newDiv.appendChild(rowDiv);
   }
   app.appendChild(newDiv);
}

