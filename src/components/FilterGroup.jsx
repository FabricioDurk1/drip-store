// src/components/FilterGroup.jsx
import React from 'react';
import styles from './FilterGroup.module.css';

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.title}>{title}</h3>
      <hr className={styles.divider} />
      <ul className={styles.optionsList}>
        {options.map((option, index) => (
          <li key={index} className={styles.optionItem}>
            <input
              type={inputType}
              id={`${title}-${index}`}
              name={title}
              value={option.value || option.text}
              className={styles.input}
            />
            <label htmlFor={`${title}-${index}`} className={styles.label}>
              {option.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterGroup;
