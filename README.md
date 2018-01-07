# jsLibrary
Repository for javascript collection made by Alsve.

[![GitHub license](https://img.shields.io/badge/license-BSD-blue.svg)](https://raw.githubusercontent.com/cahyadsn/disc_id/master/LICENSE)
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
[Try it yourself here.](https://jsbin.com/kudifum/5/edit?html,js,output)

## tictactoe.js
This is a two players javascript version of TicTacToe game.

#### Performance
The performance observed is O(1).

#### Explanation
Tic-tac-toe (also known as noughts and crosses or Xs and Os) is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. [See more](https://en.wikipedia.org/wiki/Tic-tac-toe)

![TicTacToe Illust](https://upload.wikimedia.org/wikipedia/commons/f/f6/Tic_Tac_Toe.png)

(Illustration cited of wikipedia.org)

#### Usage
Include the javascript file with script tag and insert it wherever you need. The js only need vanilla javascript library and only take one global variable name (i.e _TicTacToe_)

Also the javascript need some tweakings of button id array which will be stored in _TicTacToe.boardid_ that comprise sorted ids incrementally from 0 = top left most button to 8 = right bottom most button. 

Localization could also be done by altering _TicTacToe.infostr_ which now is currently filled with string in bahasa.

_TicTacToe.infoid_ should set accordingly to tag id which will containt information about event in the game.

[Try it yourself here.](http://jsbin.com/qadetiwazi/1/edit?html,output)

## SimonGame.html
This is a game where you remember sequence of appeared color on the board.

#### Performance
The performance observed is O(1)

#### Explanation
Simon is an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with software programming by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the series. If the user succeeds the series becomes progressively longer and more complex. Once the user fails, the game is over. [See more](https://en.wikipedia.org/wiki/Simon_(game))

![Simon Illust](https://upload.wikimedia.org/wikipedia/commons/9/99/OriginalSimon.jpg)

(Illustration doc of wikipedia.org)

#### Usage
Just download the html to alter it to suit your need or to play it. The snapshot version is also available. _See bottom of this section_

[Try it yourself here.](http://jsbin.com/rudewa/10/edit?html,output)
