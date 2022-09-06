import React, { useState, useEffect } from "react";

const Card = (props) => {

    const [product, setproduct] = useState();
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Bearer 00D8d000005BGrx!AQEAQA6LXuxhc6MRzbaTmd5cuAT7Kifzq58l1sYwiaarN717V8MeC9d6.mWTISAAH.9h.kRpbP_B7P2OMF9WjGS12Inz74PS' },


    };
    useEffect(() => {

        fetch('https://rea3-dev-ed.my.salesforce.com/services/apexrest/Property', requestOptions)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                // setproduct(json);
            })


    }, []);

    console.log(props);
    return <div>
        {product ? product.map((i) => (
            <div className="h-a w-full border-b-2 flex justify-center items-center">
                <div class="flex h-5/6 w-5/6 rounded-lg justify-center ">
                    <div class="flex flex-col h-full md:flex-row w-full rounded-lg  shadow-lg">
                        <img class=" w-full md:h-auto object-cover md:w-96 rounded-t-lg md:rounded-none md:rounded-l-lg" alt="" />
                        <div class="p-6 flex flex-col justify-around h-full">
                            <h5 class="text-gray-900 text-xl font-medium"></h5>
                            <p class="text-gray-700 text-base">
                                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>
                            <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                            <div className="bg-sky-400 hover:bg-sky-500 rounded-md flex justify-center p-2">
                                <button className="text-xl w-full h-full text-white">View Details</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )) : console.log('gelmedi')
        }
    </div>;
};

export default Card;
