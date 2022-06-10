function Input({ inputFn, placeholderText, buttonFn, buttonText }) {
    return (
        <div>
            <input onChange={inputFn} placeholder={placeholderText}></input>
            <button onClick={buttonFn}>{buttonText}</button>
        </div>
    )
}

export default Input;