# jsLibrary
Repository for javascript collection made by Alsve.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/cahyadsn/disc_id/master/LICENSE)
[![GitHub forks](https://img.shields.io/github/forks/Alsve/jsLibrary)](https://github.com/Alsve/jsLibrary/network)
[![GitHub stars](https://img.shields.io/github/stars/Alsve/jsLibrary)](https://github.com/Alsve/jsLibrary/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/Alsve/jsLibrary)](https://github.com/Alsve/jsLibrary/issues)

## terbilang.js
Purpose of this program is to produce human readable string from float.

#### Performance
The performance observed is around O(n).

#### Example :

  * A float of 1000 would produce string "One thousand"

  * A float of 1234 would produce string "One thousand two hundred thirthy four"

  * Etc, but currently only made in bahasa, you could alter Terbilang.units and other array string to your language

#### Usage
Include the javascript file with script tag and insert it wherever you need. The js only need vanila javascript library and only take two global variable name (i.e. _\_Terbilang_ and _Terbilang_).

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
