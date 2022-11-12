function countWords(sentence) {
  let counter = 0;
  let arr = sentence.split(` `);

  arr.forEach((word) => {
    if (!word.match(/[&*+=_?^${}()|[\]\\]/g)) {
      counter++;
    }
  });

  return counter;
}

console.log(countWords(`Saat meng*ecat tembok, Agung dib_antu oleh Raihan.`)); //5
console.log(countWords(`Berapa u(mur minimal[ untuk !mengurus ktp?`)); //3
console.log(
  countWords(`Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.`) //4
);
