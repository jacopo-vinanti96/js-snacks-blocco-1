var biciclette = [
{
  nome: 'graziella',
  peso: 2000
},
{
  nome: 'atala',
  peso: 5000
},
{
  nome: 'cippalippa',
  peso: 8000
}
];

biciLegg = biciclette[0];

for (var i = 0; i < biciclette.length; i++) {
  if ( biciLegg.peso > biciclette[i].peso ) {
    biciLegg = biciclette[i];
  }
}

console.log(biciLegg);
