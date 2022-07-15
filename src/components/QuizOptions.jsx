import React from 'react';

const QuizOptions = ({ title, onClick, selected }) => {
    return (
        <div
            className='shadow p-3 mb-5  rounded text-center'
            onClick={onClick}
            style={{
                
                background: selected ? 'yellow' : 'pink',
                cursor: 'pointer',
            }}
        >
            {title}
        </div>
    );
};

export default QuizOptions;
