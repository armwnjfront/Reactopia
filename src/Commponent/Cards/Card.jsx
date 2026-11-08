import imgg from "../../../img/images.jpg";
import imggg from "../../../img/download.jpg";
import imgggg from "../../../img/download (1).jpg"

const Card = ({ image, title, description }) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 items-center justify-center py-6 ">
        <div className="max-w-sm w-[250px] p-3 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full h-48 object-cover rounded-3xl"
            src={image}
            alt={title}
          />
          <div className="p-1">
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mb-4 text-gray-700 text-sm">{description}</p>
            <button className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
              Read-more
            </button>
          </div>
        </div>

        <div className="max-w-sm w-[250px] p-3 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full h-48 object-cover rounded-3xl"
            src={imgg}
            alt={title}
          />
          <div className="p-1">
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mb-4 text-gray-700 text-sm">{description}</p>
            <button className="inline-flex items-center px-1 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
              Read-more
            </button>
          </div>
        </div>

        <div className="max-w-sm w-[250px] p-3 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full h-48 object-cover rounded-3xl"
            src={imggg}
            alt={title}
          />
          <div className="p-1">
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mb-4 text-gray-700 text-sm">{description}</p>
            <button className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
              Read-more
            </button>
          </div>
        </div>

        <div className="max-w-sm w-[250px] p-3 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg w-full h-48 object-cover rounded-3xl"
            src={imgggg}
            alt={title}
          />
          <div className="p-1">
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mb-4 text-gray-700 text-sm">{description}</p>
            <button className="inline-flex items-center px-2 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none">
              Read-more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
