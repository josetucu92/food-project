import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className='container'>

            <div className="info">
                <h1>All Your Food. One Place.</h1> 
                
                    <Link to='/home' className='btn'>
                        Press to START!
                    </Link>
                
            </div>
        </div>
    )
}
