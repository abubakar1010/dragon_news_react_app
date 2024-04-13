import { Button } from "@material-tailwind/react";
import KidZone from "../KidZone/KidZone";
import LoginProvider from "../LoginProvider/LoginProvider";
import SocialMedia from "../SocialMedia/SocialMedia";
import bgImage from "../../assets/bg.png"


const RightSideBar = () => {
    return (
        <>
            <div>
                <LoginProvider />
                <SocialMedia />
                <KidZone />
                <div style={{"backgroundImage": `url(${bgImage})`}} className={`text-center px-10 py-16 text-white space-y-12 `}>
                    <h1>Create an Amazing Newspaper</h1>
                    <p className=" text-lg">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className=" border-none bg-[#D72050] ">Learn More</Button>
                </div>
            </div>
        </>
    );
};

export default RightSideBar;