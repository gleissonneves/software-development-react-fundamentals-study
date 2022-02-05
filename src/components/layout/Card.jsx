import React from "react";
import './Card.css';

export default (props) => {
    const { title, color } = props;
    const styleCard = {
        backgroundColor: color || 'hsl(0, 53%, 70%)',
        borderColor: color || 'hsl(0, 53%, 70%)',
    }

    return (
        <article className='card' style={styleCard}>
            <h1> { title } </h1>
            
            <section className="card-content">
                { props.children }
            </section>
        </article>
    );
}