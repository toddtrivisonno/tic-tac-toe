
document.body.onload = setBoard;
var app = document.getElementById('app')

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

      for (let i = 0; i < 3; i++) {
         var colDiv = document.createElement('div');
         colDiv.className = "col-3 border btn-lg";
         colDiv.innerHTML = "Button";
         rowDiv.appendChild(colDiv);
      }
      newDiv.appendChild(rowDiv);
   }
   app.appendChild(newDiv);
}

