import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter'>
      <label className="filter__element">
        <input className="filter__checkbox" type="checkbox" name="checkbox" id="checkbox" />
        <span className="filter__slider"></span>
      </label>
      <label className="filter__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
