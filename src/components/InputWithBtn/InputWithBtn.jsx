import Input from "../Input/Input"
import Button from "../Button/Button"

const InputWithBtn = ({ inputClass, inputPlaceholder, inputReq, btnClass, btnInner }) => {
    return (
        <div className="d-flex">
            <Input className={`input-with-btn ${inputClass ? inputClass : ''}`} placeholder={inputPlaceholder} required={inputReq} />
            <Button className={`button-with-input ${btnClass ? btnClass : ''}`} children={btnInner} />
        </div>
    )
}

export default InputWithBtn