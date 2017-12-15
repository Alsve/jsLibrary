// Author        : Alrayan
// Creation date : Dec 9 17,  09:36
// License       : BSD License v3
// Repositories  : https://github.com/Alsve/jsLibrary/

window.onload = function() {
    
    var TicTacToe = {};
    // State of turn
    TicTacToe.turn = 0;
    // Null marking
    TicTacToe.nmark = '~';
    // Player marking
    TicTacToe.pmark = ['O', 'X'];
    // Array of state stored here
    TicTacToe.state = [];
    // Array of button id
    TicTacToe.boardid = [];
    // String tag id to write info
    TicTacToe.infoid = "info";
    // Localization
    TicTacToe.infostr = ["INFO : ",
                         "GAME BERAKHIR "
                       + "SILAHKAN RESET",
                         "r e s e t",
                         "Salah jalan!",
                         "telah jalan.",
                         "MENANG!",
                         "SERI"];
    
    for (var i = 0; i < 9; i++) {
      TicTacToe.state.push(this.nmark);
      TicTacToe.boardid.push('c' + (i + 1));
    }
    
    /* 
     * Initialize function state
     */
    TicTacToe.init = function() {
      for (var id in this.state) {
        this.state[id] = this.nmark;
        this.turn = 0;
      }
      
      this.draw();
    };
    
    /* 
     * Write something to tag with id of "info"
     */
    TicTacToe.writeInfo = function(str) {
      document.getElementById(this.infoid)
              .innerHTML = this.infostr[0] + str;
    }
    
    /* 
     * Write state to button array 
     *   with id from TicTacToe.boardid 
     */
    TicTacToe.draw = function() {
      for (var id in this.boardid) {
        var elem = document
          .getElementById(this.boardid[id]);
        elem.innerHTML = this.state[id];
      }
    }
    
    /*
     * Take turn of pressed button
     *  arg[0] = event trigger.
     */
    TicTacToe.takeTurn = function(e) {
      var cnt = 0;
      for (var i = 0; i < 9; i++)
        if (this.state[i] === this.nmark)
          cnt++;
      
      if (cnt == 0) {
        this.writeInfo(this.infostr[6] + ", "
                       + this.infostr[1]);
        return 6;
      }
      if (this.isWin(this.pmark[0]) 
      === this.pmark[0]
        | this.isWin(this.pmark[1]) 
      === this.pmark[1]) {
        
        this.writeInfo(this.infostr[1]);
        return 1;
      }
      
      var elem = e.target;
      var loc = parseInt(elem.id[elem.id.length - 1]) - 1;
      var valid = this.state[loc] != this.pmark[0]
               && this.state[loc] != this.pmark[1];
      
      if (!valid) {
        this.writeInfo(this.infostr[3]);
        return 3;
      }
      
      this.state[loc] = this.pmark[this.turn];
      this.writeInfo(
        this.pmark[this.turn] + " " 
      + this.infostr[4]);
      
      if (this.isWin(this.pmark[this.turn]) 
          == this.pmark[this.turn])
        this.writeInfo(this.pmark[this.turn] + " "
                     + this.infostr[5]);
      
      this.turn = (this.turn + 1) % 2;
      this.draw();
    };
    
    /*
     * Check winning from TicTacToe.state
     *  arg[0] = TicTacToe.pmark[i]
     */
    TicTacToe.isWin = function (pm) {
      var win = '0';
      
      var cnt = 0;
      for (var i = 0; i < 3; i++) {
        if (cnt == 3)
          break;
        
        cnt = 0;
        for (var j = 0; j < 3; j++)
          if (this.state[i * 3 + j] == pm)
            cnt++;
          else
            break;
      }
      
      if (cnt == 3)
        win = pm;
      
      cnt = 0;
      for (var i = 0; i < 3; i++) {
        if (cnt == 3)
          break;
        
        cnt = 0;
        for (var j = 0; j < 3; j++)
          if (this.state[i + j * 3] == pm)
            cnt++;
          else
            break;
      }
      
      if (cnt == 3)
        win = pm;
      
      cnt = 0;
      for (var i = 0; i < 3; i++)
        for (var j = i; j < 3; j++)
          if (this.state[i * 3 + j] == pm) {
            cnt++;
            break;
          } else {
            break;
          }
      
      if (cnt == 3)
        win = pm;
      
      cnt = 0;
      for (var i = 0; i < 3; i++)
        for (var j = 2 - i; j > -1; j--)
          if (this.state[i * 3 + j] == pm) {
            cnt++;
            break;
          } else {
            break;
          }
      
      if (cnt == 3)
        win = pm;
      
      return win;
    }
    
    for (var id in TicTacToe.boardid) {
      var elem = document
                 .getElementById(TicTacToe.boardid[id]);
      elem.addEventListener("click", 
                            (e) => TicTacToe.takeTurn(e));
    }
    
    document.getElementById("reset")
            .addEventListener("click", 
                              () => {
      TicTacToe.init();
      TicTacToe.writeInfo(TicTacToe.infostr[2]);
    });
    
    // Exec init
    TicTacToe.init();
}
