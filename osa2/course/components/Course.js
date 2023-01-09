import React from 'react'

const Header = ({ course_name }) => {
    return <h3>{course_name}</h3>
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part =>
                <Part key={part.id} part_name={part.name} part_exercises={part.exercises} />)}
        </div>
    )
}

const Part = ({ part_name, part_exercises }) => {
    return (
        <p>
            {part_name} {part_exercises}
        </p>
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, e) => {
        return sum + e.exercises
    }, 0)
    return (
        <div>
            <b>Total of {total} exercises</b>
        </div>
    )
}

const Course = ({ courses }) => {
    return (
        <div key={courses.id}>
            <Header course_name={courses.name} />
            <Content parts={courses.parts} />
            <Total parts={courses.parts} />
        </div>
    )
}

export default Course