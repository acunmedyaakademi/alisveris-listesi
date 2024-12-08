alert("Alışveriş Listesi");

let alisverisListesi = [];

for (let i = 1; i <= 5; i++) {
     let alinacaklar = prompt(`Almak istediğiniz ${i}. ürünü giriniz!`);
    
     alisverisListesi.push(alinacaklar);

 }
console.log("Alisveris Listesi:", alisverisListesi);
