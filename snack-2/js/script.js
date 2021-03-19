var squadre = [
    {
      nome: 'fiorentina',
      punti_fatti: 0,
      falli_subiti: 0
    },
    {
      nome: 'juventus',
      punti_fatti: 0,
      falli_subiti: 0
    },
    {
      nome: 'catania',
      punti_fatti: 0,
      falli_subiti: 0
    }
  ];

var squadreOutput = [
  {
    nome: '',
    falli_subiti: 0
  },
  {
    nome: '',
    falli_subiti: 0
  },
  {
    nome: '',
    falli_subiti: 0
  }
];

for (var i = 0; i < squadre.length; i++) {
  squadre[i].punti_fatti = Math.floor( Math.random() * 99 ) + 1;
  squadre[i].falli_subiti = Math.floor( Math.random() * 99 ) + 1;
}

for (var i = 0; i < squadre.length; i++) {
  squadreOutput[i].nome = squadre[i].nome;
  squadreOutput[i].falli_subiti = squadre[i].falli_subiti;
}

console.log(squadreOutput);
