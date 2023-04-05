import React, { Fragment } from 'react'

const layout = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
    "space"
];

const Keyboard = ({ styles, input, setInput, show, setShow }) => {
    const [capsLock, setCapsLock] = React.useState(false)
    const [keylayout, setKeylayout] = React.useState(layout)

    const onKeyClick = (key) => {
        switch (key) {
            case "backspace":
                setInput(input.slice(0, -1))
                break
            case "caps":
                break
            case "enter":
                setInput(input + "\n")
                break
            case "space":
                setInput(input + " ")
                break
            case "done":
                break
            default:
                setInput(input + key)
                break
        }
    }

    const onCapsLock = () => {
        setKeylayout(keylayout.map((key) => {
            if (key.length === 1) {
                return capsLock ? key.toLowerCase() : key.toUpperCase()
            }
            return key
        }))
        setCapsLock(!capsLock)
    }
    console.log('capsLock', keylayout)

    const renderButton = (key) => {
        switch (key) {
            case "backspace":
                return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">backspace</i></button>
            case "caps":
                return <button className={`keyboard__key keyboard__key--wide keyboard__key--activatable ${capsLock && 'keyboard__key--active'}`} style={{ ...styles.keyboardKey }} onClick={onCapsLock}><i className="material-icons">keyboard_capslock</i></button>
            case "enter":
                return <button className="keyboard__key keyboard__key--wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">keyboard_return</i></button>
            case "space":
                return <button className="keyboard__key keyboard__key--extra-wide" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}><i className="material-icons">space_bar</i></button>
            case "done":
                return <button className="keyboard__key keyboard__key--wide keyboard__key--dark" style={{ ...styles.keyboardKey }} onClick={() => setShow(false)}><i className="material-icons">check_circle</i></button>
            default:
                return <button className="keyboard__key" style={{ ...styles.keyboardKey }} onClick={() => onKeyClick(key)}>{key}</button>
        }
    }

    return (
        <>
            {
                show &&
                <div className='keyboard' style={{ ...styles?.keyboard }}>
                    <div className="keyboard__keys" style={{ ...styles?.keyboardKeys }}>
                        {keylayout.map((key) => (
                            <Fragment key={key}>
                                {
                                    ['backspace', 'p', 'enter', '?'].indexOf(key.toLowerCase()) > -1 ? <>
                                        {renderButton(key)}
                                        <br />
                                    </> : renderButton(key)
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default Keyboard