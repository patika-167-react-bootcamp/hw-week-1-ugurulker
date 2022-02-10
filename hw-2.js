Array.prototype.includesCi = function(name) {
    let String = name.toLowerCase(); // Girilen değer küçük harfe çevirildi.
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toLowerCase(); // Array içindeki değerler küçük harfe çevirildi.
      if(this[i] == String){
          return true; // Girilen değer ve Array içindeki değer karşılaştırıldı.
      } else {
          return false;
      }
    };
};