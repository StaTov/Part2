import React from 'react';

const Total = ({course}) => {
    const total = course.parts.reduce((value, elem) => value + elem.exercises, 0)
    return (
        <p><strong> total of {total} exercises</strong></p>
    )
}

export default Total;