import { features } from "@/constants";



const services = () => {
  return (
    
      <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
        <div className="text-center">
          
        <h2 className="text-7xl sm:text-9xl lg:text-7xl mt-10 lg:mt-20 tracking-wide font-bold">
            
            <span className="bg-gradient-to-r from-green-200 to-green-800 text-transparent bg-clip-text">
              OUR SERVICES
            </span>
            </h2>
         
        </div>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-slate-800 text-green-300 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl font-semibold text-gray-400">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  


export default services


