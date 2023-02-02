import { useState, useRef } from 'react'
import useInput from '../../hooks/useInput/useInput'
import inputAutoHeight from './inputAutoHeight'

import styles from './InputWithBtn.module.scss'

const Input = ({ required, className, placeholder }) => {

    const label = useRef(null)

    const [input, setInput] = useState(useRef(null))

    const { value, onChange } = useInput('')

    const blurHandler = ({ target: value }) => value.value && label.current.classList.add('d-none')

    const focusHandler = ({ target: value }) => value.value && label.current.classList.remove('d-none')

    inputAutoHeight(input)

    return (
        <div className="position-relative d-flex">
            <textarea
                ref={e => setInput(e)}
                value={value}
                onChange={onChange}
                onBlur={blurHandler}
                onFocus={focusHandler}
                required={required}
                className={`input ${className} ${styles.input}`}
                autoComplete="false"
                rows="1"
            ></textarea>
            <label ref={label} className={`input__label ${styles.inputLabel}`}>{placeholder}</label>
        </div>
    )
}

export default Input