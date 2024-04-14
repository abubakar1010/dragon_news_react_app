import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <NavBar />
            <HomeLayout />
        </div>
    );
};

export default Home