import { useDispatch } from 'react-redux';
import { fromfilter } from '..//../redux/filtr';
import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ valueFilter }) => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(fromfilter(event.target.value));
  };
  return (
    <div className={css.container}>
      <h2 className={css.find_title}>Find contacts by name</h2>
      <input
        type="text"
        className={css.find_input}
        name="filter"
        value={valueFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={changeFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  filterChange: PropTypes.func,
};

export default Filter;
