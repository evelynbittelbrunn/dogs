import React from 'react'
import styles from './Input.module.css'

const Input = ({
    label,
    type,
    name,
    value,
    onChange
}) => {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                className={styles.input}
            />
            <p className={styles.error}>Error</p>
        </div>
    )
}

export default Input