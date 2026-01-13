import React from 'react'

const BannerCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full ">

            <div className="bg-gray-600  rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
             
                <p className="text-gray-100 text-sm">
                    JavaScript, React, Backend, Prisma & real-world projects.
                </p>
            </div>

            <div className="bg-gray-600  rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
              
                <p className="text-gray-100 text-sm">
                    Job tips, learning roadmap & developer career advice.
                </p>
            </div>

            <div className="bg-gray-600  rounded-2xl p-6 shadow-md hover:-translate-y-1 transition">
               
                <p className="text-gray-100 text-sm">
                    Real experiences, lessons & personal growth journeys.
                </p>
            </div>

           

        </div>
    )
}

export default BannerCard