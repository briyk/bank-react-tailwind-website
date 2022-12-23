const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`hover:shadow-woke rounded-[10px] bg-gradient-to-br from-[#9dedf0] via-[#5ce1e6] to-[#33bbcf] py-4 px-6 font-poppins text-[18px] font-medium text-primary outline-none transition-shadow duration-300 ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
