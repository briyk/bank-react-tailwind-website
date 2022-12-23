import { robot, discount } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`flex flex-col md:flex-row ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} dm:px-16 flex-col px-6 xl:px-0`}
      >
        <div className="bg-discount-gradient mb-2 flex flex-row rounded-[10px] py-[6px] px-[4px]">
          <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
          <p className={`${styles.paragraph} mx-2 uppercase`}>
            <span className="text-white"> $20 </span>
            Discount for <span className="text-white"> 1 Month </span>
            Account
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="flex-1 font-poppins text-[52px] font-bold text-white ss:text-[72px]">
            The Next <br className="hidden sm:block" />
            <span className="text-gradient">Generation</span>{" "}
            <br className="hidden sm:block" />
          </h1>
          <div className="mr-0 hidden ss:flex md:mr-4">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins text-[52px] font-bold text-white ss:text-[68px]">
          {" "}
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} relative my-10 md:my-0`}
      >
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] h-[100%] w-[100%]"
        />

        {/* gradient start */}
        <div className="pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]" />
        <div className="white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full" />
        <div className="blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
