import Image from "next/image"
import AboutImage from '@/images/about.svg'

const AboutPage = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center h-screen-[40vh] bg-gradient-custom ">
        <div className="whitespace-nowrap py-10 ">
          <h1 className="text-center text-[10vw] font-bold uppercase mt-10 mb-6 leading-none">
            {/* ABOUT */}
            <span className="text-blue-400">A</span>
            <span className="text-blue-500">b</span>
            <span className="text-sky-400">o</span>
            <span className="text-cyan-300">u</span>
            <span className="text-blue-300">t</span>
    <br/>
            {/* space */}
            <span className="inline-block w-[2vw]"></span>

            {/* DAILYLAYERS */}
            <span className="text-red-300">D</span>
            <span className="text-yellow-400">a</span>
            <span className="text-gray-100">i</span>
            <span className="text-sky-200">l</span>
            <span className="text-blue-400 text-[12vw] animate-pulse">y</span>

            <span className="text-gray-200">L</span>
            <span className="text-yellow-300">a</span>
            <span className="text-purple-400 text-[12vw] animate-pulse">y</span>
            <span className="text-green-500">e</span>
            <span className="text-amber-300">r</span>
            <span className="text-slate-200">s</span>
          
          </h1>

        </div>
      </div>
      <div className="container mx-auto px-4">
        <div>
          <div className="lg:grid grid-cols-2 py-10">
            <div>
              <Image src={AboutImage} alt="About DailyLayers" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="mb-6 text-sm leading-relaxed">
                DailyLayers is a modern blog platform where ideas are shared one layer at a time.
                Here, we write about technology, personal growth, career development, and real-life experiences that actually matter.

                Our goal is simple — to make learning easier, clearer, and more practical.
                Whether you’re a developer, a learner, or someone who just loves reading meaningful content, DailyLayers is built for you.

                Every article is written with honesty, clarity, and real-world relevance — no unnecessary noise, just value.
              </p>
              <h2 className="text-xl font-bold mb-4">What We Do</h2>
              <p className="mb-6 text-sm leading-relaxed">
                We curate and create a wide range of articles, tutorials, and resources covering various programming languages, frameworks, and best practices. Our content is designed to be practical, engaging, and easy to understand, making it suitable for beginners and experienced developers alike.
              </p>
              <h2 className="text-xl font-bold mb-4">Join Our Community</h2>
              <p className="mb-6 text-sm leading-relaxed">
                We invite you to join our vibrant community of developers who are passionate about learning and sharing knowledge. Whether you are looking to enhance your skills, stay updated with the latest industry trends, or connect with like-minded individuals, DailyLayers is here to support you every step of the way.
              </p>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutPage