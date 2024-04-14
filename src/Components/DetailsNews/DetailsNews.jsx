import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import NavBar from "../../Pages/Shared/NavBar/NavBar";
import RightSideBar from "../RightSideBar/RightSideBar";


const DetailsNews = () => {

    const {id} = useParams()
    return (
        <>
            <Header />
            <NavBar />

            <div className=" grid grid-cols-1 lg:grid-cols-4">
                <div className=" col-span-3">
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideBar />
                </div>
            </div>

        </>
    );
};

export default DetailsNews;