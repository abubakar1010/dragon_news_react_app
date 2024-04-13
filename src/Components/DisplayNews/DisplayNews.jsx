import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const DisplayNews = ({ element }) => {
  const { total_view, author, title, image_url, details, rating } = element;



  return (
    <div style={{border: "1px solid #E7E7E7"}} className=" shadow-xl mb-16 rounded-lg py-8 px-7">
      <div className=" bg-[#F3F3F3] flex items-center gap-4">
        <div>
          <img src={author.img} alt="" className=" w-10 h-10 rounded-full" />
        </div>

        <div>
          <p className=" text-[#403F3F] font-bold text-lg p-0 ">
            {author.name}
          </p>
          <p className=" text-[#706F6F] relative bottom-2 ">
            {author.published_date}
          </p>
        </div>
      </div>

      <div>
        <p className=" font-extrabold text-[#403F3F] text-xl py-5">{title}</p>
      </div>
      <div>
        <img src={image_url} alt="" className=" w-full" />
      </div>
      <div className=" py-8">
        <p className=" text-lg font-medium text-[#706F6F]">{details}</p>
        <p
          className=" text-[#FF8C47] font-bold text-lg cursor-pointer"
        >
          Read More
        </p>
      </div>

      <div style={{borderTop: "1px dashed #E7E7E7"}} className=" flex justify-between">
      <div className=" flex gap-4 items-center">
        <div className=" space-x-1">
            <FaStar className=" text-xl text-[#FF8C47]  "></FaStar>
            <FaStar className=" text-xl text-[#FF8C47]  "></FaStar>
            <FaStar className=" text-xl text-[#FF8C47]  "></FaStar>
            <FaStar className=" text-xl text-[#FF8C47]  "></FaStar>
            <FaStar className=" text-xl text-[#FF8C47]  "></FaStar>
        </div>
        <div>
            <p>{rating?.number}</p>
        </div>
      </div>
      <div className=" flex gap-4 items-center">
        <FaEye className=" text-xl text-[#706F6F] "></FaEye>
        <p className=" text-[#706F6F] text-xl">{total_view}</p>
      </div>
      </div>
    </div>
  );
};

DisplayNews.propTypes = {
  element: PropTypes.object,
};

export default DisplayNews;
