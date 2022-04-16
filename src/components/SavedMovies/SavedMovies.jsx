import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="movies">
      <SearchForm/>
      <MoviesCardList itSavedMovies={true}/>
    </main>
  );
}

export default SavedMovies;
