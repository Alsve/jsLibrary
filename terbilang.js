// Author        : Alrayan
// Creation date : Nov 27 17,  04:36
// License       : BSD License v3
// Repositories  : https://github.com/Alsve/jsLibrary/

   // Membuat kelas
    var _Terbilang = {}
    
    var Terbilang = _Terbilang;
    
    // Deklarasi variable kelas
    _Terbilang.floorNumber = 0;
    _Terbilang.comma = 0.0;
    
    // DEKLARASI KONSTANTA
    // Lokalisasi angka
    _Terbilang.LOCALE = 'id';
    // Format angka belakang koma
    _Terbilang.PRESISI_DESIMAL = 2;
    
    // Mengembalikan unit satuan khusus methode this.seribu(input)
    _Terbilang.unitSeribu = ["", "puluh", "ratus"];
    // Unit satuan dalam Bahasa Indonesia
    _Terbilang.units = [ ""          ,"ribu"      ,"juta" 
                       ,"milyar"    ,"triliun"   ,"kuadriliun"
                       ,"kuantiliun","sekstiliun","septiliun"
                       ,"oktiliun"  ,"noniliun"  ,"desiliun"   ];
    
    // Mengembalikan angka dalam Bahasa Indonesia
    _Terbilang.angka = [ ""       ,"satu"    ,"dua" ,"tiga" 
                        ,"empat"  ,"lima"    ,"enam","tujuh"
                        ,"delapan","sembilan"                ];
    
    // Khusus untuk methode this.seribu(input)
    _Terbilang.replaceWith = {"satu ratus"         : "seratus",
                              "satu puluh satu"    : "sebelas",
                              "satu puluh dua"     : "dua belas",
                              "satu puluh tiga"    : "tiga belas",
                              "satu puluh empat"   : "empat belas",
                              "satu puluh lima"    : "lima belas",
                              "satu puluh enam"    : "enam belas",
                              "satu puluh tujuh"   : "tujuh belas",
                              "satu puluh delapan" : "delapan belas",
                              "satu puluh sembilan": "sembilan belas",
                              "satu puluh"         : "sepuluh"};
    
    // khusus untuk methode this.apa(input)
    // Dibedakan supaya tidak berat perulangannya
    _Terbilang._replaceWith = {"satu ribu"         : "seribu"};
    
    // Menghitung jumlah berapa seribu
    _Terbilang.jumlah_perseribu = function(input) {
      var count;
      
      for (count = 0; input > 1000; count++)
        input /= 1000;
      
      return count;
    }
    
    // Mengembalikan string seribu dalam B. Indonesia
    _Terbilang.seribu = function(input) {
      if (input > 999 || isNaN(input)) return "";
      
      input = parseInt(input);
      
      var len = (input + "").length, i;
      var digArr = [], ret = [], strret = "";
      
      // memecah integer menjadi array digit
      for (i = 0; i < len; i++) {
        digArr.push(input % 10);
        input = parseInt(input / 10);
      }
      
      // membuat string seribuan
      for (i = len; i > 0;) {
        if (digArr[i] !== 0 && (i + 1) <= len)
          ret.push(this.unitSeribu[i]);
        ret.push(this.angka[digArr[--i]]);
      }
      
      strret = ret.join(" ");
      
      // Membetulkan string
      for (var key in this.replaceWith) {
        if (this.replaceWith.hasOwnProperty(key))
          strret = strret.replace(key, this.replaceWith[key]);
      }
      
      return strret;
    }
    
    // Mengembalikan string koma dalam Bahasa Indonesia
    _Terbilang.koma = function(input) {
      if (isNaN(input)) return "";
      input = input - Math.floor(input);
      input = input.toPrecision(this.PRESISI_DESIMAL);
      input = input.split(".").slice(1)[0];
      
      // Deklarasi variable
      var strret = "koma ", i;
      
      if (input.length === 0) return "";
      
      // Membuat string koma
      for (i = 0; i < input.split('').length; i++) {
        var temp = parseInt(input.charAt(i));
        if (temp !== 0) strret += " " + this.angka[temp];
        else strret += " nol";
      }
           
      return strret;
    }
    
    // Mengembalikan string dari angka input dalam B.Indonesia
    _Terbilang.apa = function(input) {
      this.floorNumber = Math.floor(input);
      this.comma = input - this.floorNumber;
      
      input = this.floorNumber;
      
      // Deklarasi variable
      var strret = "", i, seribuArr = [], ret = [];
      var jmlPerseribu = this.jumlah_perseribu(this.floorNumber);
      
      // Memecah integer menjadi array perseribu terbalik
      // input => 123000 => [0, 123]
      // input => 123321 => [321, 123]
      for (i = 0; i < jmlPerseribu + 1; i++) {
        if (input !== 1000)
          seribuArr.push(input % 1000);
        else {
          seribuArr.push(0);
          seribuArr.push(1);
        }
        input = Math.floor(input / 1000);
      }
      
      // Membuat string dari seribuArr
      for (i = seribuArr.length; i > 0;) {
        if (seribuArr[i] !== 0 && (i + 1) <= seribuArr.length)
          ret.push(this.units[i]);
        ret.push(this.seribu(seribuArr[--i]));
      }
      
      strret = ret.join(' ');
      // Tambahkan koma
      strret += " " + this.koma(this.comma);
      
      // Membetulkan string seribu
      for (var key in this._replaceWith) {
        if (this._replaceWith.hasOwnProperty(key))
          strret = strret.replace(key, this._replaceWith[key]);
      }
      
      return strret;
    }
    
    _Terbilang.format = function(input) {
      if (isNaN(input)) return "";
      return input.toLocaleString(this.LOCALE);
    }
