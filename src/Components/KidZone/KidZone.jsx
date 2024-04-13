import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const KidZone = () => {
  return (
    <>
      <div className=" my-12">
        <p className=" text-2xl font-bold">Q-zone</p>
        <div>
          <div className=" space-y-12 ">
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default KidZone;
