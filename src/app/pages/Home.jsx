import React from 'react'
import Blogs from './Blogs'
import Navbar from '../components/Navbar'
const Home = () => {
    return (
        <div className="bg min-h-screen font-inter">
            <Navbar />
            <Blogs />
        </div>
    )
}

export default Home
