import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className='filter active-element'>
      <label className="filter__element">
        <input className="filter__checkbox" type="checkbox" name="shortfilm" id="checkbox" checked={props.checked} onChange={props.handleChange}/>
        <span className="filter__slider"></span>
      </label>
      <label className="filter__label" htmlFor="checkbox">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
