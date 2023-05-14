import React from 'react'

const Home = (props) => {
    // console.log("home", props.data);
    return (
        <div className="container">
            <h2 className='text-center py-3'>Home Component</h2>
            <div className='row'>
                <div className="card col-3 p-0">
                    <img src="https://images.unsplash.com/photo-1682018667453-b8d127e055b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className='d-flex justify-content-between py-2 mb-4'>
                            <span>I-phone</span>
                            <span>Price: $1000.00</span>
                        </div>
                        <div className='d-flex justify-between'>
                            <button
                                onClick={
                                    () => props.addToCartHandler({ price: 1000, name: "iphone 11" })
                                }
                                className="btn btn-primary">
                                Add to cart
                            </button>
                            <button
                                onClick={
                                    () => props.removeToCartHandler({ price: 1000, name: "iphone 11" })
                                }
                                className="btn btn-secondary ms-auto">
                                Remove to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
