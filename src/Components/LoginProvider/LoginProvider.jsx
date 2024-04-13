import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const LoginProvider = () => {
    return (
        <>
            <div>
                <p className=" text-2xl font-bold">Login With</p>
                <div>
                    <div style={{"border": "1px solid #0096FF"}} className=" flex items-center justify-center gap-3 rounded-lg text-center">
                        <FaGoogle className=" text-blue-500 text-xl" />
                        <p className=" text-light-blue-500 text-xl font-medium">Login with Google</p>
                    </div>
                    <div style={{"border": "1px solid"}} className=" mt-4 flex items-center justify-center gap-3 rounded-lg text-center">
                        <FaGithub className="text-xl" />
                        <p className="text-xl font-medium">Login with GitHub</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginProvider;