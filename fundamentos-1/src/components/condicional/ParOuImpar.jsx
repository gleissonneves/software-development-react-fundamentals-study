import React from 'react';

export default (props) => {
    const { num } = props;
    const isPar = num % 2 === 0;
    
    return (
        <div>
            {isPar ? <span> Par </span> : <span> Ímpar </span>}
        </div>
    )
}