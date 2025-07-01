import primekitchen from "../assets/primekitchen.jpeg"
import secondseller from "../assets/secondseller.jpeg"
import portfolio from "../assets/portfolio.jpeg"

const Projects = () => {
  return (
    <div className="animate-slideInLeft animation-delay-200">
      <div className="mb-10">
        <div data-aos="fade" className="flex justify-center mb-15 mt-20">
            <h1 className="text-4xl font-bold">
                Projects
            </h1>
        </div>
        <div data-aos="fade-right" className="flex justify-center">
            <div className="grid grid-cols-1 rounded shadow-lg">
                <img src={primekitchen}
                className="w-90 mt-4 mb-4
                rounded-lg ml-4 mr-4
                sm:w-110 md:w-140 lg:w-180"/>
                <div className="mt-4 ml-4"> 
                    <h1 className="text-xl font-bold">
                        Prime Kitchen ( Restaurant Website )
                    </h1>
                    <p className="w-88 mt-2 text-sm font-semibold">
                        A restaurant website that enhance the costumers for
                        their favourite dishes. We are offering a wide 
                        varieties of foods such as Veg items, Non-Veg items,
                        Hot drinks, Cool drinks etc...
                    </p>
                    <div className="flex mt-4 mb-4 text-sm 
                    font-semibold text-white gap-4">
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                HTML
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                CSS
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                REACT
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                TAILWIND CSS
                            </p>                            
                        </h3>
                    </div>
                    <div className="flex justify-center mb-6 mt-6
                     text-white font-semibold">
                        <a href="https://rameezmuhammed.github.io/Prime-Kitchen/"
                        target="blank" rel="noopener noreferrer">
                            <button className="text-sm border
                                border-orange-600 bg-orange-600 pl-3 pr-3
                                rounded-full hover:bg-red-600 cursor-pointer">
                                Go to the Website
                            </button>
                        </a>                        
                    </div>
                </div>          
            </div>            
        </div> 

        <div data-aos="fade-right" className="flex justify-center mt-10">
            <div className="grid grid-cols-1 rounded shadow-lg">
                <img src={secondseller}
                className="w-90 mt-4 mb-4
                rounded-lg ml-4 mr-4
                sm:w-110 md:w-140 lg:w-180"/>
                <div className="mt-4 ml-4"> 
                    <h1 className="text-xl font-bold">
                        Second Seller ( Online Marketplace )
                    </h1>
                    <p className="w-88 mt-2 text-sm font-semibold">
                        An online marketplace for Cars, Bikes, Phones, 
                        Furnitures and Electronics. Costumers can buy 
                        and sell products via Second Seller.
                    </p>
                    <div className="flex mt-4 mb-4 text-sm 
                    font-semibold text-white gap-4">
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                HTML
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                CSS
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                REACT
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                TAILWIND CSS
                            </p>                            
                        </h3>
                    </div>
                    <div className="flex justify-center mb-6 mt-6
                     text-white font-semibold">
                        <a href="https://rameezmuhammed.github.io/Second-Seller/"
                        target="blank" rel="noopener noreferrer">
                            <button className="text-sm border
                                border-purple-600 bg-purple-600 pl-3 pr-3
                                rounded-full hover:bg-purple-900 cursor-pointer">
                                Go to the Website
                            </button>
                        </a>                        
                    </div>


                </div>          
            </div>            
        </div>

        <div data-aos="fade-right" className="flex justify-center mt-10">
            <div className="grid grid-cols-1 rounded shadow-lg">
                <img src={portfolio}
                className="w-90 mt-4 mb-4
                rounded-lg ml-4 mr-4
                sm:w-110 md:w-140 lg:w-180"/>
                <div className="mt-4 ml-4"> 
                    <h1 className="text-xl font-bold">
                        Personal Portfolio
                    </h1>
                    <p className="w-88 mt-2 text-sm font-semibold">
                        My own personal portfolio that others need to know
                        about me. Who am I ? What do I do ? You can know 
                        everything about me.  
                    </p>
                    <div className="flex mt-4 mb-4 text-sm 
                     font-semibold text-white gap-4">
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                HTML
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                CSS
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                REACT
                            </p>                            
                        </h3>
                        <h3 className="border bg-black rounded">
                            <p className="ml-2 mr-2">
                                TAILWIND CSS
                            </p>                            
                        </h3>
                    </div>
                    <div className="flex justify-center mb-6 mt-6
                     text-white font-semibold">
                        <a href="https://rameezmuhammed.github.io/Personal-Portfolio/"
                        target="blank" rel="noopener noreferrer">
                            <button className="text-sm border
                                border-black bg-black pl-3 pr-3
                                rounded-full hover:text-base cursor-pointer">
                                Go to the Website
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

export default Projects
