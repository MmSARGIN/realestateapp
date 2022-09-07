import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return <div className="flex items-center md:z-10 md:fixed w-full  bg-white justify-between h-auto">

        <div className="flex flex-col md:flex-row w-full h-full justify-around items-center">
            <div className="flex justify-center w-4/12 ">
                <h1 className="flex justify-center hover:bg-sky-500 cursor-pointer bg-white text-sky-500 hover:text-white border-none font-semibold rounded-3xl border-black p-2 border w-2/4">RealEstateApp</h1>
            </div>
            <div className="flex flex-col h-full md:flex-row text-gray-500 items-center justify-around w-7/12">
                <div className="text-xl hover:text-sky-400 cursor-pointer w-1/12 flex justify-center px-5 py-2.5 rounded-full">
                    <Link to='/about' >
                        <div className="w-full h-full px-5 py-2.5">Home
                        </div>
                    </Link>
                </div>

                <div className="text-xl hover:text-sky-400 cursor-pointer w-1/12 flex justify-center px-5 py-2.5 rounded-full">
                    <Link to='/properties' >
                        <div className="w-full h-full px-5 py-2.5">Sale
                        </div>
                    </Link>
                </div>
                <div className="text-xl hover:text-sky-400 cursor-pointer w-1/12 flex justify-center px-5 py-2.5 rounded-full">
                    <Link to='/about' >
                        <div className="w-full h-full px-5 py-2.5">AboutUs
                        </div>
                    </Link>
                </div>
                <div className="text-xl hover:text-sky-400 cursor-pointer w-1/12 flex justify-center px-5 py-2.5 rounded-full">
                    <Link to='/about' >
                        <div className="w-full h-full px-5 py-2.5">Contact
                        </div>
                    </Link>
                </div>

            </div>
            <div className="flex w-4/12 justify-center">
                <div className="h-full w-2/4">
                    <Link className="flex justify-center items-center w-full h-full hover:bg-sky-400 bg-sky-500 rounded-full" to='/about'>

                        <div className="flex justify-center p-1 items-center w-full h-full ">
                            {/* <div className="flex justify-center items-center w-4/12 h-full rounded-full  hover:bg-teal-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div> */}
                            {/* <div className="flex justify-center items-center w-4/12 h-10 rounded-full  hover:bg-teal-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>


                    </div> */}
                            <div className="flex justify-center items-center w-4/12 h-full rounded-full  ">
                                <h1 className="text-white">Login</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="WHITE" className=" w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>;
};

export default Navbar;
