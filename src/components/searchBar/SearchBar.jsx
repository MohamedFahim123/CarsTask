import PropTypes from 'prop-types';
import styles from './searchBar.module.css';
import { useState } from 'react';
export default function SearchBar({ loading, currCars ,currData, setCurrCars, setLastItem, setFirstItem }) {
    const [search, setSearch] = useState('');
    const handleChangeInput = (e) => {
        setSearch(e.target.value);
        setCurrCars(currData);
        setFirstItem(0);
        setLastItem(12);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFirstItem(0);
        setLastItem(12);
        const filteredData = currCars?.filter(
            car =>
                car?.car?.toLowerCase()?.startsWith(search.toLocaleLowerCase()) ||
                car?.car_model?.toLowerCase()?.startsWith(search.toLocaleLowerCase()))
        setCurrCars(filteredData);
    };

    return (<div className="container">
        <div className="row">
            <div className="col-12">
                <form onSubmit={handleSubmit} className={styles.form__handler}>
                    <div className={`${styles.form_icon}`}>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            placeholder='Search By Car Name'
                            value={search}
                            onChange={handleChangeInput}
                            className={`form-control ${styles.form_input}`}
                        />
                    </div>
                    <button className={`${styles.form__button}`} disabled={loading} type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
    )
}



SearchBar.propTypes = {
    currData: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    setFirstItem: PropTypes.func,
    setLastItem: PropTypes.func,
    setCurrCars: PropTypes.func,
    currCars: PropTypes.array,
};