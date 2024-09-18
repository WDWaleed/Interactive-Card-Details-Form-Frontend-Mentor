const Success = ({ formVisible, setFormVisible }) => {
  return (
    <section
      className={`${
        formVisible ? "hidden" : "block"
      } mt-16 flex flex-col items-center justify-center gap-4 p-8 xl:float-right  xl:m-auto xl:max-w-md xl:grow`}
    >
      <img src="images/icon-complete.svg" alt="Success" />
      <h1 className="mt-4 text-3xl">THANK YOU!</h1>
      <p className="text-custom text-DarkGrayishViolet">
        We&apos;ve added your card details
      </p>
      <a
        href="https://wdwaleed.github.io/Interactive-Card-Details-Form-Frontend-Mentor/"
        className="mt-8 w-full rounded-lg bg-VeryDarkViolet p-4 text-center text-custom font-medium text-LightGrayishViolet transition-opacity duration-200 hover:opacity-[.95]"
      >
        Continue
      </a>
    </section>
  );
};
export default Success;