import { useEffect, useState } from "react";
import DisplayNews from "../DisplayNews/DisplayNews";

const News = () => {

    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

//   console.log(data);

    return (
        <>
            <div>
                {
                    data.map( element => <DisplayNews key={element._id} element={element} />)
                }
            </div>
        </>
    );
};

export default News;
