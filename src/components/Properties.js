import React, { useState, useEffect } from "react";
import Card from "./Card";

const Properties = (props) => {

    const [product, setproduct] = useState();
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer 00D8d000005BGrx!AQEAQEFAFOolawM4HXM4SpQ1O_GeyEPjtZmstf2SZvBdaN6LENWuk0MU1lraAu5UqrDmMPEEZqooRaTg4yNRK3ksMnB8erSy' },


    };
    // 'https://rea3-dev-ed.my.salesforce.com/services/apexrest/Property'
    // requestOptions = gonderilecek
    useEffect(() => {

        fetch("https://rea3-dev-ed.my.salesforce.com/services/apexrest/Property", requestOptions)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setproduct(json);
            })


    }, []);
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return <div className="flex flex-col items-center justify-center w-full h-c bg-sky-200">
        <div className="flex justify-start items-center w-full  h-full mt-16 overflow-auto">
            <div className="flex w-full h-full justify-center items-center overflow-auto">
                <div className="flex  flex-col w-5/6 justify-start items-center h-full">
                    {product ? product.map((i) => (
                        <div className="flex bg-white min-h-1/2 max-h-1/2 mb-5 p-2 border-2 border-blue-300 flex-col md:flex-row w-full rounded-lg  shadow-lg">
                            <img className=" w-2/6 min-h-72 h-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
                                src={i.Image_URL__c}
                                alt="" />
                            <div className="p-2  h-full text-sky-400 w-4/6 flex flex-col items-center justify-between ">
                                <div className="flex justify-center items-center w-full">
                                    <h5 className=" text-sky-600 text-2xl font-semibold">
                                        {i.Name}
                                    </h5>
                                </div>
                                <div className="flex border-2 p-4 flex-col w-full h-3/4 items-center justify-evenly">
                                    <div className="flex border-b-2 w-full justify-between items-center">
                                        <h1>Description </h1>
                                        <p className=" text-sky-500 text-xl">
                                            {i.Property_Description__c}
                                        </p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Price</h1>
                                        <p className="text-sky-500 text-xl">
                                            {formatter.format((i.Price__c))}
                                            $</p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Type</h1>
                                        <p className="text-sky-500 text-xl">
                                            {i.Type__c}
                                        </p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Address</h1>
                                        <p className="text-sky-500 text-xl">
                                            {i.Address__c}
                                        </p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Consultant Name</h1>
                                        <p className="text-sky-500 text-xl">
                                            {i.Personal__r.Name}
                                        </p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Consultant Email</h1>
                                        <p className="text-sky-500 text-xl">
                                            {i.Personal__r.Consultant_Email__c}
                                        </p>
                                    </div>
                                    <div className="flex border-b-2 w-full justify-between">
                                        <h1>Consultant Phone</h1>
                                        <p className="text-sky-500 text-xl">
                                            {i.Personal__r.Consultant_Phone__c}
                                        </p>
                                    </div>

                                </div>
                                <div className="bg-sky-400 w-full hover:bg-sky-500 rounded-md flex justify-center p-2">
                                    <button className="text-xl w-full h-full text-white">View Details</button>
                                </div>
                            </div>

                        </div>
                    )) : <div className="flex w-full h-full justify-center items-center">
                        <h1 className="text-white text-6xl">
                            ↻ LOADING...
                        </h1>
                    </div>}
                </div>
            </div>
        </div>
    </div>;
};

export default Properties;
