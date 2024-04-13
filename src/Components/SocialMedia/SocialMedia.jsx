
import { FaFacebook, FaLinkedin,FaXTwitter } from "react-icons/fa6";


const SocialMedia = () => {
    return (
        <>
            <div className=" mt-12">
                <p className=" text-2xl font-bold">Find Us On</p>
                <div>
                    <div style={{"border": "1px solid"}} className=" flex items-center pl-7 gap-3 rounded-t-lg text-center">
                        <FaFacebook className=" text-blue-500 text-xl" />
                        <p className=" text-light-blue-500 text-xl font-medium">Facebook</p>
                    </div>
                    <div style={{"border": "1px solid", "borderBottom":0, "borderTop": 0}} className=" flex items-center pl-7 gap-3 text-center">
                        <FaXTwitter className="text-xl" />
                        <p className="text-xl font-medium">Twitter</p>
                    </div>
                    <div style={{"border": "1px solid"}} className="  flex items-center pl-7 gap-3 rounded-b-lg text-center">
                        <FaLinkedin className="text-xl" />
                        <p className="text-xl font-medium">LinkedIn</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialMedia;