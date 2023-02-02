import Input from "../Input/Input"
import Button from "../Button/Button"

const InputWithBtn = ({ inputClass, inputPlaceholder, inputReq, btnClass, btnInner }) => {
    return (
        <div className="d-flex">
            <Input className={inputClass} placeholder={inputPlaceholder} required={inputReq} />
            <Button className={btnClass} children={btnInner} />
        </div>
    )
}

export default InputWithBtn