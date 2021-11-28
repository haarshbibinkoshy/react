import React, { useEffect, useState } from 'react'
import "./NavBar.css"
function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY>100) {
                handleShow(true)
            }else{handleShow(false)}
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div>
        <div className={`navbar ${show&&"nav_black"}`}>
        <img className="user" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="user"/>
            <img src="https://img.icons8.com/external-itim2101-fill-itim2101/64/000000/external-movie-mobile-technology-itim2101-fill-itim2101.png"/>
            <a href="https://icons8.com/icon/egMHu4HyyQTS/movie">Movie icon by Icons8</a>
            </div>
        </div>
    )
}

export default Navbar

