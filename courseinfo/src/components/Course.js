import React from 'react';

const Header = (props) => {
    return (
        <h3>{props.name}</h3>
    )
}

const Content = ({parts}) => {
    return (<>
        {parts.map(part => <Part key={part.id} part={part}/>)}
    </>)
}
const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Total = ({course}) => {
    const total = course.parts.reduce((value, elem) => value + elem.exercises, 0)
    return (
        <p><strong> total of {total} exercises</strong></p>
    )
}
const Course = (props) => {
    return (
        <>
            <Header name={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total course={props.course}/>
        </>)
}

export default Course;