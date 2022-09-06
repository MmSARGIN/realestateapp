import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
    // const [users, setusers] = useState();
    // const [isLogged, setisLogged] = useState(true);
    const notify = () => {
        toast.success("Login Success", {
            position: toast.POSITION.TOP_CENTER
        });
    };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        },
        onSubmit: values => {
            // fetch('http://localhost:3001')
            // .then(res => res.json())
            // .then(data => {
            //   console.log(data);
            //   setusers(data);
            // })
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(values)
            }
            console.log(values);
            fetch('http://localhost:3001/users', options)
                .then(res => console.log(res))
            notify()
        },
    });
    return (
        <div className='flex justify-center h-c w-full'>
            <div className='flex bg-gradient-to-r  to-teal-100 from-teal-300  items-center justify-center w-full'>
                <ToastContainer />
                <div className='flex justify-center bg-gradient-to-r rounded-l-lg to-teal-300 from-teal-300 items-center w-3/12 h-3/4'>
                    <h1 className='text-white text-5xl font-semibold'>Enjoy Us For Big Opportunities</h1>
                </div>
                <div className="flex flex-col p-6 rounded-r-lg shadow-lg h-3/4 bg-white w-8/12">
                    <div className='flex justify-center pb-9'>
                        <h1 className='text-3xl text-teal-500'>Sign In</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-group mb-6">
                                <input type="text"
                                    id="firstName"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-teal-300 focus:outline-none"
                                    aria-describedby="emailHelp123" placeholder="First name" />
                            </div>
                            <div className="form-group mb-6">
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-teal-300 focus:outline-none"
                                    aria-describedby="emailHelp124" placeholder="Last name" />
                            </div>
                        </div>
                        <div className="form-group mb-6">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-teal-300 focus:outline-none"
                                placeholder="Email address" />
                        </div>
                        <div className="form-group mb-6">
                            <input id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-teal-300 focus:outline-none"
                                placeholder="Password" />
                        </div>

                        <button
                            className="
      w-full
      px-6
      py-2.5
      bg-teal-300
      text-white
      font-semibold
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-teal-400 hover:shadow-lg
      focus:bg-teal-400 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-teal-400 active:shadow-lg
      transition
      duration-150
      ease-in-out">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;
