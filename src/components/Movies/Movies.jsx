import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  return (
    <main className="movies">
      <SearchForm/>
      <Preloader/>
    </main>
  );
}

export default Movies;
