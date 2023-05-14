import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import '../App.css'

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
                <div className="container">
                    <p className="navbar-brand mb-0">Navbar</p>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className="nav-link m-0">Home</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link m-0">Link</p>
                            </li>
                        </ul>
                    </div>
                    <button className='carticon btn ms-auto outline-none'>
                        <div><code>{props.data.length}</code></div>
                        <FaShoppingCart size='1.5rem' color='White' />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
