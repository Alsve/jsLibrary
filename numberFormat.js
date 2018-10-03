// Author        : Alrayan
// Creation date : Okt 3 18,  18:57
// License       : BSD License v3
// Repositories  : https://github.com/Alsve/jsLibrary/

function numberFormat(strin, dec_long, ch_th, ch_dec) {
		if (typeof strin !== "string") {
				console.warn("Input is not string, max is int64");
				console.warn("Convert input to string");
        }

		function thousandSplit(str) {
			  var temp = "";
              return (str + "").split("").reverse()
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

		var inp = strin.split(".");
        	inp[0] = thousandSplit(inp[0]);
    
	return inp[0].reverse().join(ch_th + "") +
            (inp[1] ? (ch_dec + inp[1] + "0".repeat(dec_long))
            .slice(0, dec_long + 1) : dec_long === 0 ? 
			      "" : ch_dec + "0".repeat(dec_long));
}
