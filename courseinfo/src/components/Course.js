import React from 'react';
import Content from "./Content";
import Total from "./Total";
import Header from "./Header";



const Course = (props) => {
    return (
        <>
            <Header name={props.course.name}/>
            <Content parts={props.course.parts}/>
            <Total course={props.course}/>
        </>)
}

export default Course;