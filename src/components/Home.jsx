import ram from "../assets/ram.jpg"
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div>
        <div className="">
            <div data-aos="fade-left" className="flex justify-center 
            md:justify-end">
                <img src={ram} 
                className="w-50 rounded-full
                sm:w-60 border-10 md:mt-20
                md:w-70 md:mr-5 lg:w-100 lg:mr-10
                lg:mt-10"/>
            </div>
            <div data-aos="fade-right" className="md:-mt-30">
                <h1 className="flex justify-center
                text-4xl mt-4 font-semibold
                md:text-5xl md:justify-start md:ml-11 md:-mt-70
                lg:text-6xl lg:-mt-100
                 ">
                    Muhammed Rameez
                </h1>
                <h2 className="flex justify-center
                text-xl mt-4 font-semibold
                md:text-2xl md:justify-start md:ml-11
                lg:text-3xl md:mt-6 lg:mt-8
                animate-slideInLeft animation-delay-200
                ">
                    Front End Developer
                </h2>
                <p className="text-center mt-4 text-sm font-semibold
                md:text-base md:text-start md:ml-11
                lg:text-lg md:mt-6 lg:mt-8
                animate-slideInLeft animation-delay-200">
                    I'm a passionate and motivated Front-End Developer <br />
                    with a strong interest in creating clean, responsive, and <br /> 
                    user-friendly websites. I love turning ideas into real-world <br />
                     web applications using HTML, CSS, JavaScript, React,  and <br />
                    Tailwind CSS. I'm currently looking for opportunities where <br />
                     I can contribute, learn from experienced developers,
                    and grow <br /> as a professional. I'm especially interested
                    in startups  <br />
                    and creative teams where I can make an impact
                </p>
                <div className="flex justify-center mt-8 mb-8
                 animate-slideInLeft animation-delay-200
                 ">
                  <div className="border border-black
                    bg-black rounded-full cursor-pointer">
                      <a href="rameez-resume.pdf" download>
                        <button className="text-white text-sm
                          font-semibold ml-3 mr-3 mb-2.5 mt-2
                          cursor-pointer">
                          Download Resume
                        </button>
                      </a>
                    
                  </div>                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
