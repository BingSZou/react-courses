import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    console.log("I am at hoe page");
    return (
        <div className="jumbotron">
            <h1>Plural sight susana page</h1>
            <p>React, Redux and React Router for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn More
            </Link>
        </div>
    )
}

export default HomePage
