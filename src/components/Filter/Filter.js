import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filter, filterChange }) => {
  return (
    <div className={css.container}>
      <h2 className={css.find_title}>Find contacts by name</h2>
      <input
        type="text"
        className={css.find_input}
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filterChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
