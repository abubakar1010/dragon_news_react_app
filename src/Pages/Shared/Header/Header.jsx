import moment from "moment";
import logo from "../../../assets/logo.png"

const Header = () => {
    return (
        <>
            <div className=" text-center my-12">
                <img src={logo} alt="" />
                <div>
                    <p className=" text-[#706F6F] text-lg mt-5 mb-4">Journalism Without Fear or Favour</p>
                    <p className=" text-xl text-[#403F3F]">{moment().format("dddd, MMMM D, YYYY")}</p>
                </div>
            </div>
        </>
    );
};

export default Header;