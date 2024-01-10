import React from 'react';

const Controller = ({ handleSetCount }) => {
    return (
        <div>
            <button onClick={() => handleSetCount(1)}>버튼</button>
        </div>
    );
};

export default Controller;
