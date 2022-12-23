import styles from "../style";
import { arrowUp } from "../assets/index";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px] shadow-md  `}
  >
    <div
      className={`${styles.flexCenter} getStarted h-[100%] w-[100%] flex-col rounded-full bg-primary `}
    >
      <p
        className={`${styles.flexStart} text-gradient flex-row font-poppins text-[18px] font-medium leading-[23px] `}
      >
        <span className="mr-2">Get</span>
        <img src={arrowUp} alt="Get Started" className="h-[24px] w-[24px]" />
      </p>
      <p className="text-gradient font-poppins text-[18px] font-medium leading-[23px]">
        Started
      </p>
    </div>
  </div>
);

export default GetStarted;
