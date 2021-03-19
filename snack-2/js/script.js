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

for (var i = 0; i < squadre.length; i++) {
  for (var j = 1; j < 3; j++) {
    squadre[i][j] = Math.floor( Math.random() * 99 ) + 1;
  }
}
