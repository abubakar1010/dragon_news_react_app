import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  console.log(data);
  return (
    <>
      <div className=" ">
        <p className=" text-3xl font-bold text-[#403F3F]">All Category</p>

        <div className=" space-y-6 flex flex-col">
          {data.map((element) => (
            <Link
              className=" text-[#9F9F9F] font-bold no-underline pl-10 duration-700 hover:bg-[#E7E7E7]  hover:py-7 hover:duration-700 hover:text-[#403F3F] "
              key={element.id}
            >
              {element.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
