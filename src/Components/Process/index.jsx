import steps from "@/lib/data/process";
const NestedFaq = () => {
  return (
    <div className="w-full bg-gray-50  ">
      <section className="w-[95%]  mx-auto py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl leading-14 font-cinema font-bold text-sky-400 mb-2">
          فرآیند تولید محصولات در
          <span className=" text-blue-900 mb-5 inline-block mx-1.5">شاردر</span>
        </h2>
        <p className="text-xl mt-5 font-semibold text-gray-500 mb-12">
          مراحل انجام تولید قطعه در شاردر
        </p>

        <div className="relative w-full">
          {/* desktop destination */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="hidden md:block absolute top-20 left-0 w-full h-10 z-0"
          >
            <path
              d="M0,60 C150,0 150,120 300,60 S450,0 600,60 750,120 900,60 1050,0 1200,60"
              fill="none"
              stroke="#302e2e"
              strokeWidth="2"
              strokeDasharray="6 8"
            />
          </svg>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-row md:flex-col  items-center md:text-center w-full md:w-auto relative"
              >
                {/* vertical lines in mobiles */}
                {index !== steps.length - 1 && (
                  <div className="block md:hidden absolute top-[4.5rem] right-[2rem] h-[60px] w-[1px] border-r-2 border-dashed border-gray-400  z-[-1]" />
                )}

                <div className="  flex items-center justify-center text-xl md:w-16 md:h-16  w-14 h-14 rounded-full bg-sky-500  shadow-md backdrop-blur-md shrink-0">
                  {step.icon}
                </div>

                <div className="mr-4 md:mr-0 text-right md:text-center md:mt-10">
                  <h3 className="font-semibold text-lg text-black  mt-1 mb-1 md:mt-5">
                    {step.title}
                  </h3>
                  <p className="text-md text-gray-600  max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NestedFaq;
