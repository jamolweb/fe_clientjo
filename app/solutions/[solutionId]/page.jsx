import Image from "next/image";
import { solutionData } from "./SolutionData";

const SolutionDetails = ({ params }) => {
  const solution = solutionData.find((item) => item.id === params.solutionId);
  if (!solution) return <p>Loading...</p>;

  return (
    <div className="w-full">
      {/* Title Section */}
      <div className="w-full bg-white pt-24">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-center text-gray-900">
            {solution.title}
          </h1>
        </div>
      </div>

      {/* Content Sections */}
      {solution.data.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className={`w-full ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div
              className={`flex flex-col ${
                index % 2 === 0
                  ? "lg:flex-row items-center"
                  : "lg:flex-row-reverse items-center"
              } gap-12 lg:gap-24`}
            >
              {/* Text Content */}
              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                }`}
              >
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-gray-900">
                  {item.title}
                </h2>
                <p className="text-lg lg:text-xl leading-relaxed text-gray-700">
                  {item.description}
                </p>
              </div>

              {/* Image Content */}
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl shadow-lg">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-lg">
                        No image available
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionDetails;
