const Success = ({formVisible, setFormVisible}) => {
  return (
    <section className={`${formVisible ? "hidden" : "block"} mt-16 p-8 xl:max-w-md xl:m-auto xl:float-right xl:grow flex flex-col  justify-center items-center gap-4`}>
      <img src="/images/icon-complete.svg" alt="Success" />
      <h1 className="text-3xl mt-4">THANK YOU!</h1>
      <p className="text-DarkGrayishViolet text-custom">
        We&apos;ve added your card details
      </p>
      <a
        href="/"
        className="w-full text-center bg-VeryDarkViolet p-4 mt-8 rounded-lg text-custom font-medium text-LightGrayishViolet transition-opacity duration-200 hover:opacity-[.95]"
      >
        Continue
      </a>
    </section>
  );
};
export default Success;
