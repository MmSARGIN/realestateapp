import React from 'react';




const Slider = () => {



    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className="absolute w-full bg-blue-200">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active  float-left w-full">

                            <img
                                src="https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="block w-full h-screen "
                                alt="..."
                            />



                            <div>

                            </div>

                        </div>
                        <div className="carousel-item h-screen relative float-left w-full">
                            <img
                                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="block w-full"
                                alt="..."
                            />

                        </div>
                        <div className="carousel-item h-screen relative float-left w-full">
                            <img
                                src="https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg"
                                className="block w-full"
                                alt="..."
                            />

                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <div className='absolute opacity-40 rounded-md bg-teal-500 h-4/6 w-8/12 z-0'>

            </div>
            <div className='flex flex-col justify-around items-center relative z-20 h-3/6 w-8/12'>
                <div className='  flex justify-center items-center ml-10 h-5/6 w-full'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-6xl text-white'>Enjoy the profitly opportunities of RealEstateApp</h1>
                    </div>
                </div>
                <div className='text-white text-xl flex w-10/12 justify-evenly'>
                    <button className='bg-white text-teal-600 hover:bg-sky-100 p-2 w-3/12 rounded-full'>Get Started</button>
                    <button className='bg-white text-teal-600 hover:bg-sky-100 p-2 w-3/12 rounded-full'>Sign In</button>

                </div>

            </div>

        </div >





    )
}

export default Slider