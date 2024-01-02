import { useRef, useState } from "react";

function Body() {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const textRef = useRef();

    const handleOnChange = (e) => {
        setText(e.target.value);
        setError("");
    };

    const handleOnClick = () => {
        if (text.length < 5) {
            setError("5글자 미만입니다.");
            textRef.current.focus();
        } else {
            alert("입력완료");
            setText("");
        }
    };

    return (
        <div>
            <input ref={textRef} value={text} onChange={handleOnChange} />
            <button onClick={handleOnClick}>작성 완료</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
}

export default Body;
