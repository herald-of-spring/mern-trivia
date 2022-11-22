export const getSingleQuestion = (query) => {
    return fetch(`https://the-trivia-api.com/api/questions
    ?categories=
    arts_and_literature,
    film_and_tv,
    food_and_drink,
    general_knowledge,
    geography,
    history,
    science,
    music,
    society_and_culture,
    sport_and_leisure
    &limit=1
    &region=US
    &difficulty=easy`);
  };
  