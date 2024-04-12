import { Button } from "@material-tailwind/react";
import Marquee from "react-fast-marquee";


const BreakingNews = () => {

    return (
        <>
            <div className=" flex items-center bg-[#F3F3F3] py-4 px-4 ">
            <Button className=" border-none bg-[#D72050] w-fit ">Latest</Button>
            <Marquee speed={100} pauseOnHover={true}>
                <p className=" mr-12">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
                <p className=" mr-12">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
                <p className=" mr-12">
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                </p>
            </Marquee>
            </div>
        </>
    );
};

export default BreakingNews;