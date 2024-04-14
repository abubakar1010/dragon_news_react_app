import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import MainContent from "../../Components/MainContent/MainContent";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";

const HomeLayout = () => {
    return (
        <div className=" grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div className="  ">
                <LeftSideBar />
            </div>
            <div className="  col-span-2 ">
                <MainContent />
            </div>
            <div className="  ">
                <RightSideBar />
            </div>
        </div>
    );
};

export default HomeLayout;