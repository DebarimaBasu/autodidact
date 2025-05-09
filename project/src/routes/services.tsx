import { features } from "@/constants";

const Services = () => {
  return (
    <section className="relative mt-16 px-4 sm:px-6 lg:px-16 pb-10 border-b border-neutral-800">
      <div className="text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-wide mt-10 lg:mt-20">
          <span className="bg-gradient-to-r from-green-200 to-green-800 text-transparent bg-clip-text">
            OUR SERVICES
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <div className="flex gap-4 items-start">
              <div className="h-10 w-10 p-2 bg-slate-800 text-green-300 flex justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-300">{feature.text}</h5>
                <p className="text-sm text-neutral-400 mt-2">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
