import React, { useState } from 'react';
import styles from './FilterBar.module.scss';

const FilterBar = ({ onFilter }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchText(value);
        onFilter(value);
    };

    return (
        <div className={styles.filterBar}>
            <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default FilterBar;