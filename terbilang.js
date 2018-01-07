// Author        : Alrayan
// Creation date : Nov 27 17,  04:36
// License       : BSD License v3
// Repositories  : https://github.com/Alsve/jsLibrary/

var Terbilang = function(input) {
    this.in = isNaN(input) ? 0 : input;
    this.out = "";
}

Terbilang.async = function(input, callback) {
    return Promise.resolve(new Terbilang(input))
                  .then(x => {x.what(); return x;})
                  .then(x => {callback(x); return x;});
}

// CONSTANT DECLARATION
// Decimal precision and formatting
Terbilang.PRECISION = 2;

// Zero dan comma locale
Terbilang.null = "nol"
Terbilang.comma = "koma"

// Delimiter
Terbilang.delim = '.'
// Decimal Delimiter
Terbilang.decDelim = ','

// Units locale for value less than thousand
Terbilang.unitsThousand = ["ratus", "puluh", ""];

// Units locale for every thousand
Terbilang.units = [ ""          ,"ribu"      ,"juta" 
                   ,"milyar"    ,"triliun"   ,"kuadriliun"
                   ,"kuantiliun","sekstiliun","septiliun"
                   ,"oktiliun"  ,"noniliun"  ,"desiliun"   ];
  
// Number locale
Terbilang.numberWords = [ ""       ,"satu"    ,"dua" ,"tiga" 
                         ,"empat"  ,"lima"    ,"enam","tujuh"
                         ,"delapan","sembilan"                ];
    
// Replacement string
Terbilang.replaceWith = {"satu ratus"         : "seratus",
                         "satu puluh satu"    : "sebelas",
                         "satu puluh dua"     : "dua belas",
                         "satu puluh tiga"    : "tiga belas",
                         "satu puluh empat"   : "empat belas",
                         "satu puluh lima"    : "lima belas",
                         "satu puluh enam"    : "enam belas",
                         "satu puluh tujuh"   : "tujuh belas",
                         "satu puluh delapan" : "delapan belas",
                         "satu puluh sembilan": "sembilan belas",
                         "satu puluh"         : "sepuluh",
                         "satu ribu"          : "seribu"};

/*
 * Sync version of Terbilang.prototype.thousand
 */
Terbilang.thousand = function(input) {
    return Terbilang.prototype.thousand.apply(null, [input]);
}

/*
 * Sync version of Terbilang.prototype.decimal
 */
Terbilang.decimal = function(input) {
    return Terbilang.prototype.decimal.apply(null, [input]);
}

/*
 * Sync version of Terbilang.prototype.rectify
 */
Terbilang.rectify = function(input) {
    return Terbilang.prototype.rectify.apply(null, [input]);
}

/*
 * Sync version of Terbilang.prototype.what
 */
Terbilang.what = function(input) {
    var inp = input.split(".");
    inp[0] = inp[0] == 0 ? "nol" : 
             Terbilang.prototype
              .core.thousandSplit.apply(null, [input.split(".")[0]])
              .map(x => Terbilang.thousand(x))
              .map((x, i) => x === "" ? "" : x + " " + Terbilang.units[i])
              .reverse().join(" ");
    inp[0] += " " + Terbilang.decimal(inp[1]);
  
    return (inp[0] = Terbilang.rectify(
                        inp[0].replace(/\s+/g, " ")
                              .replace(/\s$/, ""))
           );
}

/*
 * Sync version of Terbilang.prototype.format
 */
Terbilang.format = function(input) {
    var inp = input.split(".");
        inp[0] = Terbilang.prototype.core
                          .thousandSplit.apply(null, [inp[0]]);
    return inp[0].reverse().join(Terbilang.delim) +
            (inp[1] ? (Terbilang.decDelim 
                      + inp[1] + "0".repeat(Terbilang.PRECISION))
            .slice(0, Terbilang.PRECISION + 1) : 
            Terbilang.PRECISION === 0 ? "" : 
            Terbilang.decDelim + "0".repeat(Terbilang.PRECISION));
}

/*
 * Core functor that transform and return raw and unrectified words
 * @args : <Integer>
 * @return : <String> raw and unrectified words
 */
Terbilang.prototype.core = function(input) {
    return this.core.thousandSplit(input)
      .map(x => Terbilang.thousand(x))
      .map((x, i) => x === "" ? "" : x + " " + Terbilang.units[i])
      .reverse().join(" ");
}

Terbilang.prototype.core.thousandSplit = function(input) {
  var temp = "";
  return (input + "").split("").reverse()
      .reduce((p, c, i, a) => {
		if (a.length == (i + 1))
			return p.concat(temp + c)
            
		if ((i + 1) % 3 === 0) {
			let pp = p.concat(temp + c);
			temp = "";
			return pp;
        }
		temp += c;
		return p;
    }, []).map(x => x.split("").reverse().join(""));
}

/*
 * Thousand functor transform 
 * @args : <Integer>
 * @return : <String>
 */
Terbilang.prototype.thousand = function(input) {
    if (input > 999) return "";
    if (input == 0) return "";
  
    return ("0".repeat(3) + input).slice(-3).split("").map((x, i) => {
            if (x === "0") return "";

            return Terbilang.numberWords[parseInt(x)] +
                   " " +
                   Terbilang.unitsThousand[i];
            }).filter(x => x !== "").join(" ");
}

/*
 * Decimal functor transform decimal number into words
 * @args : <Integer>
 * @return : <String> Word of number
 */
Terbilang.prototype.decimal = function(input) {
    if (Terbilang.PRECISION === 0) return "";
    return Terbilang.comma + " "  + 
           ((input ? input : "") + "0".repeat(Terbilang.PRECISION))
               .slice(0, Terbilang.PRECISION).split("")
               .map(x => {
                   if (x === "0") return Terbilang.null;
                   return Terbilang.numberWords[parseInt(x)];
               }).join(" ");
}

/*
 * Rectify functor replace input string that include key word 
 *     to value word in Terbilang.replaceWith.
 * @args : <String> 
 * @return : <String> The rectified string object.
 */
Terbilang.prototype.rectify = function(input) {
    Object.keys(Terbilang.replaceWith)
      .forEach(x => input = input.replace(new RegExp(x, 'g'), 
                                          Terbilang.replaceWith[x]));
  
    return input;
}

/*
 * Format functor return string number with thousand delimitor
 * @return : <String>
 */
Terbilang.prototype.format = function() {
    var inp = this.in.split(".");
        inp[0] = this.core.thousandSplit(inp[0]);
    return inp[0].reverse().join(Terbilang.delim) +
            (inp[1] ? (Terbilang.decDelim 
                      + inp[1] + "0".repeat(Terbilang.PRECISION))
            .slice(0, Terbilang.PRECISION + 1) : 
            Terbilang.PRECISION === 0 ? "" : 
            Terbilang.decDelim + "0".repeat(Terbilang.PRECISION));
}

/*
 * Rewrite this.out as a result,
 * @return : <String> Word of number from this.in
 */
Terbilang.prototype.what = function() {
    this.out = this.in.split(".")[0] == 0 ? "nol" : this.core(this.in.split(".")[0]);
    this.out += " " + this.decimal(this.in.split(".")[1]);
  
    return (this.out = this.rectify(
                        this.out.replace(/\s+/g, " ")
                                .replace(/\s$/, ""))
           );
}
