Array.prototype.includesCi = function (name) {
  let String = name.toLowerCase(); // Girilen değer küçük harfe çevirildi.
  let array = []; // Orjinal Array değişmesin istediğimiz için yeni bir array oluşturduk.
  for (let i = 0; i < this.length; i++) {
    array[i] = this[i].toLowerCase(); // Array içindeki değerler küçük harfe çevirildi.
    if (array[i] == String) {
      return true; // Girilen değer ve Array içindeki değer karşılaştırıldı.
    } else {
      return false;
    }
  }
};
