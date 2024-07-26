import React from 'react';
import styles from './FilterBar.module.scss';

const FilterBar = () => {
    return (
        <div className={styles.filterBar}>
            <input type="text" placeholder="Search..." />
            <button>Filter</button>
        </div>
    );
};

export default FilterBar;
