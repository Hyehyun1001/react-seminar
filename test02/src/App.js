// App.js
import React, { useState } from 'react';
import Viewer from './components/Viewer';
import Controller from './components/Controller';

function hds369(number) {
    const numberStr = number.toString();
    return numberStr.includes('3') || numberStr.includes('6') || numberStr.includes('9');
}

function App() {
    const [count, setCount] = useState(0);
    const handleSetCount = (value) => {
        setCount(count + value);

        if (hds369(count + value)) {
            alert('빵!');
        }
    };

    return (
        <div className="App">
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller handleSetCount={handleSetCount} />
            </section>
        </div>
    );
}

export default App;
