function MainActorsPage(actor) {
  const { DateOfBirth, Age, Movies, OscarWinningFilms, FavoriteDish, InterestingFact } = actor;

  const moviesList = Movies.map(movie => `<li>${movie}</li>`).join('');
  const oscarWinningFilmsList = OscarWinningFilms.map(film => `<li>${film}</li>`).join('');

  return `
    <h1>${actor}</h1>
    <h2>Actor Details</h2>
    <ul>
      <li><b>Date of Birth:</b> ${DateOfBirth}</li>
      <li><b>Age:</b> ${Age}</li>
      <li><b>Movies:</b> ${moviesList}</li>
      <li><b>Oscar-winning Films:</b> ${oscarWinningFilmsList}</li>
      <li><b>Favorite Dish:</b> ${FavoriteDish}</li>
      <li><b>Interesting Fact:</b> ${InterestingFact}</li>
    </ul>
  `;
}

export default MainActorsPage;