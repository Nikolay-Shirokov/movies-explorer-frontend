import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm/>
      <Preloader/>
      <MoviesCardList/>
    </main>
  );
}

export default SavedMovies;
