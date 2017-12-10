# jsLibrary
Repository for javascript collection made by Alsve.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cahyadsn/disc_id/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/Alsve/jsLibrary.svg)](https://github.com/Alsve/jsLibrary/network)
[![GitHub stars](https://img.shields.io/github/stars/Alsve/jsLibrary.svg)](https://github.com/Alsve/jsLibrary/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Alsve/jsLibrary.svg)](https://github.com/Alsve/jsLibrary/issues)

## terbilang.js
Purpose of this program is to produce human readable string from float.

#### Performance
The performance observed is around O(n).

#### Example :

  * A float of 1000 would produce string "One thousand"

  * A float of 1234 would produce string "One thousand two hundred thirthy four"

  * Etc, but currently only made in bahasa, you could alter Terbilang.units and other array string to your language

#### Usage
Include the javascript file with script tag and insert it wherever you need. The js only need vanilla javascript library and only take two global variable name (i.e. _\_Terbilang_ and _Terbilang_).

```javascript 
Terbilang.apa(float) // <fn, string> to produce full string
Terbilang.format(float) // <fn, string> to produce string with set delimiter:
                        //              Terbilang.delimiter and Terbilang.decimalDelimiter.
Terbilang.koma(float) // <fn, string> to produce human readable decimal string.
Terbilang.PRESISI_DESIMAL // <integer> (default to 2) to set Decimal precision.
Terbilang.delimiter // <char> with value of '.' or ','
Terbilang.decimalDelimiter // <char> with value of '.' or ','
```
[Try it yourself here.](https://jsbin.com/qovava/6/edit?html,output)

## tictactoe.js
This is javascript version of TicTacToe game.

#### Performance
The performance observed is O(1)

#### Explanation
Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. [See more](https://en.wikipedia.org/wiki/Tic-tac-toe)

![TicTacToe Illust](https://upload.wikimedia.org/wikipedia/commons/f/f6/Tic_Tac_Toe.png)

#### Usage
Include the javascript file with script tag and insert it wherever you need. The js only need vanilla javascript library and only take one global variable name (i.e _TicTacToe_)

Also the javascript need some tweaking with button array id which will be stored in _TicTacToe.boardid_ that comprise sorted ids incrementally from 0 = top left most button to 8 = right bottom most button. 

Localization could also be done by altering _TicTacToe.infostr_ which now is currently filled with string in bahasa.

_TicTacToe.infoid_ should set accordingly to tag which will containt information about event in the game.

[Try it yourself here.](http://jsbin.com/bogakudova/3/edit?html,output)
