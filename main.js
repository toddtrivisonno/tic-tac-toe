
document.body.onload = setBoard;

var app = document.getElementById('app')
var numberClicks = 1;
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var status = "";

function checkWin() {
   console.log('check if someone wins')
   console.log(arr);
   var wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ]
   console.log(typeof status);

   for (let i = 0; i < wins.length; i++) {
      var a = checkVal(wins[i][0], wins[i][1], wins[i][2]);
      if (a) {
         status = "win";
         alert("Player " + a + " wins!");
         break;
      }
   }
   // no winner, check for tie
   if (numberClicks == 10 && status == "") {
      alert("cat game");
   }
   
}

function checkVal(a, b, c) {
   // if any == 0 return 0
   if(arr[a] == 0 || arr[b] == 0 || arr[c] == 0){
      return 0;
   }
   // if the sum of a b c == 3 return 1
   var sum = arr[a] + arr[b] + arr[c];
   if(sum == 3){
      return 1;
   }
   if(sum == 6){
      return 2;
   }
   return 0;
   //  -----   a b c = 6 return 2
}

function marker() {
   // console.log('functioning', numberClicks)
   var q = this.id.split("-");
   var idx = (Number(q[0]) * 3 + Number(q[1]));
   if (arr[idx] === 0) {
      numberClicks++;
      if (numberClicks % 2) {
         this.innerHTML = 'O';
         arr[idx] = 2;
      } else {
         this.innerHTML = 'X';
         arr[idx] = 1;
      }
      checkWin();
   }
   // console.log(idx);
   // console.log(q);
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

