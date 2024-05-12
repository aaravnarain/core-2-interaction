const blueCircle = document.getElementById('bluecircle');

  function add(a, b) {
    return a + b;
  }

  function makeItGreen() {
    blueCircle.style.backgroundColor = '#78bd5c';
  }

const recipe = {
    name: 'Aaravs Mint Lemonade',
    ingredients: [
      { ingredient: 'Lemon' },
      { ingredient: 'Water' },
      { ingredient: 'Sugar/Sweetner' },
      { ingredient: 'Ice cubes' },
      { ingredient: 'Mint leaves' },
    ],
    instructions: [
      'Squeeze 1 cup of lemon juice.',
      'In a pitcher, mix lemon juice, water, and sugar/sweetner until it fully dissolves.',
      'Add ice cubes and stir well.',
      'Blend the mint leaves and add to lemonade',
    ],
    makingTime: '8 minutes',
    bestServed: 'Chilled',
    serves: 6,
  };

  console.log(recipe);

  