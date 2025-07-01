import insta from "../assets/blackinsta.png"
import fb from "../assets/blackfacebook.png"
import yt from "../assets/blackyt.png"
import github from "../assets/github.png"

const Hamburger = (props) => {
  return (
    <div className="fixed inset-0 flex items-center
     justify-center bg-purple-600 bg-opacity-60 z-50">
      <div className="bg-white w-96 p-4 rounded-md
        relative text-center">
        <div>
            <button onClick={() => props?.setHamburgerPop(false)} 
                className="absolute top-1 right-2 
                text-black text-5xl -mt-1 cursor-pointer">
                &times;
            </button>

            <div>
                <div className="text-4xl font-bold mt-14">
                    <div className="flex justify-center">
                        <a href="https://www.instagram.com/rameezmohammed_._"
                            target="_blank">
                            <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                             hover:text-purple-600">                            
                                <img src={insta} 
                                className="w-8 h-9 mt-1"/>
                                <h2>
                                    Instagram
                                </h2>
                            </h1>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/rameez.a.rasheed.549"
                            target="_blank">
                            <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                             hover:text-purple-600">                            
                                <img src={fb} 
                                className="w-8 h-9 mt-1 -ml-2.5"/>
                                <h2>
                                    Facebook
                                </h2>
                            </h1>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://www.youtube.com/@rameezmohammed4932"
                            target="_blank">
                            <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                             hover:text-purple-600">                            
                                <img src={yt} 
                                className="w-8 h-7 mt-2 -ml-7"/>
                                <h2>
                                    Youtube
                                </h2>
                            </h1>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://www.github.com/rameezmuhammed"
                            target="_blank">
                            <h1 className="flex mt-4 mb-4 cursor-pointer
                             hover:text-purple-600">                            
                                <img src={github} 
                                className="w-14 h-8 mt-1 -ml-14.5"/>
                                <h2>
                                    Github
                                </h2>
                            </h1>
                        </a>
                    </div>

                    {/* <div className="flex justify-center -ml-2">
                        <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                        hover:text-purple-600">
                            <img src={fb} 
                            className="w-8"/>
                            <h2>
                                Facebook
                            </h2>
                        </h1>
                    </div>
                    <div className="flex justify-center -ml-7">
                        <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                        hover:text-purple-600">
                            <img src={yt} 
                            className="w-8 h-6 mt-2.5"/>
                            <h2>
                                Youtube
                            </h2>
                        </h1>
                    </div>
                    <div className="flex justify-center -ml-16">
                        <h1 className="flex gap-2 mt-4 mb-4 cursor-pointer
                        hover:text-purple-600">
                            <img src={github} 
                            className="w-15 h-9 mt-0.5"/>
                            <h2 className="-ml-3">
                                Github
                            </h2>
                        </h1>
                    </div>            */}
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hamburger
