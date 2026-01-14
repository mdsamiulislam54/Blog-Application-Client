import React from 'react'
import BannerCard from './BannerCard'
import { Button } from '@/components/ui/button'
import { LoaderPinwheel } from 'lucide-react'

const Banner = () => {
    return (

        <div className="min-h-screen w-full bg-no-repeat bg-cover bg-center relative" 
        style={{backgroundImage: `url("https://img.freepik.com/free-photo/top-view-female-hands-work-computer-blue-background_169016-18179.jpg?t=st=1768320676~exp=1768324276~hmac=16e8ac2d80d410e3794eee8b84ecf6e19b944c7ef2d3f34986fa988ea60f6e0b&w=1060")`}}

        >
            <div className='absolute inset-0 bg-black/70 z-1 '></div>
            <div className="container mx-auto px-4 flex flex-col items-center gap-10 py-20 text-center z-10 relative">

                <h1 className="font-extrabold uppercase leading-none text-[14vw] md:text-[12vw] relative">
                    {/* D */}
                    <span className="text-yellow-300">D</span>
                    {/* a */}
                    <span className="text-gray-100">a</span>
                    {/* i */}
                    <span className="text-indigo-500">i</span>
                    {/* l */}
                    <span className="text-sky-200">l</span>

                    {/* y - highlight */}
                    <span className="text-cyan-300 text-[15vw] animate-pulse">y</span>

                    {/* L */}
                    <span className="text-blue-400">L</span>
                    {/* a */}
                    <span className="text-gray-100">a</span>
                    {/* y */}
                    <span className="text-yellow-500 text-[15vw] animate-pulse">y</span>
                    {/* e */}
                    <span className="text-purple-300">e</span>
                    {/* r */}
                    <span className="text-green-400">r</span>
                    {/* s */}
                    <span className="text-amber-200">s</span>

                    {/* dot */}
                    <span className="text-gray-100 animate-pulse">.</span>

                    <span className="absolute top-0 right-10 transform -translate-y-1/2">
                        <LoaderPinwheel size={50} className='animate-spin text-gray-400'/>
                    </span>
                 
                </h1>


                <p className="text-white/90 text-lg md:text-2xl max-w-2xl">
                    Stories, Technology & Ideas — written layer by layer to help you
                    learn, grow and think better every day.
                </p>


                <p className="text-white/70 text-sm md:text-base tracking-widest uppercase">
                    Learn • Build • Inspire
                </p>
                <Button className="mt-2 bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 duration-300 cursor-pointer" size={'lg'}>
                    Read Latest Blogs
                </Button>

                {/* Cards Section */}
                <BannerCard />

            </div>
        </div>
    )
}

export default Banner
