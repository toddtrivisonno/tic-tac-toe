
document.body.onload = setBoard;

var app = document.getElementById('app')
var numberClicks, arr, status;

function reset() {
   var resetBtn = document.createElement('p');
   resetBtn.innerHTML = "Reset";
   resetBtn.className = "btn btn-dark btn-lg m-1 col-6";
   resetBtn.addEventListener('click', setBoard);
   app.appendChild(resetBtn);
}

function checkWin() {
   // console.log('check if someone wins')
   // console.log(arr);
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

   for (let i = 0; i < wins.length; i++) {
      var a = checkVal(wins[i][0], wins[i][1], wins[i][2]);
      if (a) {
         status = "win";
         $('#alert').show();
         document.getElementById('alert').innerHTML = "Player " + a + " wins!";
         arr.fill(3);
         reset();
         break;
      }
   }
   // no winner, check for tie
   if (numberClicks == 10 && status == "") {
      $('#alert').show();
      document.getElementById('alert').innerHTML = "This game is Cat!";
      arr.fill(3);
      reset();
   }

}

function checkVal(a, b, c) {
   // if any == 0 return 0
   if (arr[a] == 0 || arr[b] == 0 || arr[c] == 0) {
      return 0;
   }
   // if the sum of a b c == 3 return 1
   var sum = arr[a] + arr[b] + arr[c];
   if (sum == 3) {
      return 1;
   }

   if (sum == 6) {
      return 2;
   }
   return 0;
}

function marker() {
   // console.log('functioning', numberClicks)
   var q = this.id.split("-");
   var idx = (Number(q[0]) * 3 + Number(q[1]));
   if (arr[idx] === 0) {
      numberClicks++;
      if (numberClicks % 2) {
         this.innerHTML = 'O';
         document.getElementById('playTurn').innerHTML = "Player 1's Turn (X)";
         arr[idx] = 2;
      } else {
         this.innerHTML = 'X';
         document.getElementById('playTurn').innerHTML = "Player 2's Turn (O)";
         arr[idx] = 1;
      }
      checkWin();
   }
}

function setBoard() {

   app.innerHTML = "";
   arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
   numberClicks = 1;
   status = "";

   var title = document.createElement('p');
   title.innerHTML = "Tic-Tac-Toe";
   title.className = "h2 text-center m-1 p-3";
   app.appendChild(title);

   var playerTurn = document.createElement('p');
   playerTurn.innerHTML = "Player 1's Turn (X)";
   playerTurn.className = "h4 text-center";
   playerTurn.id = "playTurn";
   app.appendChild(playerTurn);

   

   // Create Board Container
   var newDiv = document.createElement('div');
   newDiv.className = "container";
   for (let i = 0; i < 3; i++) {
      var rowDiv = document.createElement('div');
      rowDiv.className = "row justify-content-center";

      for (let j = 0; j < 3; j++) {
         var colDiv = document.createElement('div');
         colDiv.className = "col-3 border btn-lg";
         colDiv.setAttribute("style", "height: 100px");
         colDiv.id = i + "-" + j;
         colDiv.addEventListener('click', marker);
         rowDiv.appendChild(colDiv);
      }
      newDiv.appendChild(rowDiv);
   }
   app.appendChild(newDiv);

   var alertEnd = document.createElement('div');
   alertEnd.className = "alert alert-info alert-dismissible m-2";
   alertEnd.id = "alert";
   app.appendChild(alertEnd);
   $('#alert').hide();
}


