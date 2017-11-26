# jsLibrary
Repository for javascript collection made by Alsve.

## terbilang.js
Purpose of this program is to produce human readable string from float.

#### Example :
A float of 1000 would produce string "One thousand". But currently, the program were made in only Bahasa. You need to alter some of the parameter like the array of string to your language to suit your need.

#### Usage
Include the javascript file with tag and insert it wherever you need. The js only need vanila javascript library and only take two global variable name (i.e. _\_Terbilang_ and _Terbilang_).

```javascript 
Terbilang.apa(float) // <fn, string> to produce full string
Terbilang.seribu(int) // <fn, string> to produce Integer one thousand less to human readable string.
Terbilang.koma(float) // <fn, string> to produce human readable decimal string.
Terbilang.PRESISI_DESIMAL // <fn, integer> (default to 2) to set Decimal precision.
```
