const Form = ({
  name,
  setName,
  cardNumber,
  setCardNumber,
  month,
  setMonth,
  year,
  setYear,
  CVC,
  setCVC,
  isValidCardNumber,
  setIsValidCardNumber,
  isValidMonth,
  setIsValidMonth,
  isValidYear,
  setIsValidYear,
  isValidCVC,
  setIsValidCVC,
  formVisible,
  setFormVisible,
}) => {
  const validateForm = () => {
    const cardNumberRegex = /^(\d{4} ){3}\d{4}$/;
    setIsValidCardNumber(cardNumberRegex.test(cardNumber) ? true : false);

    const cvcRegex = /^\d{3,4}$/;
    setIsValidCVC(cvcRegex.test(CVC) && CVC.trim() !== "" ? true : false);

    month !== "" && month >= 1 && month <= 12
      ? setIsValidMonth(true)
      : setIsValidMonth(false);

    year !== "" && year >= 1 && year <= 99
      ? setIsValidYear(true)
      : setIsValidYear(false);
  };

  const handleValidationAndSubmission = () => {
    validateForm(); // Run the validation function

    // Check the conditions after validation
    if (
      isValidCardNumber &&
      isValidMonth &&
      isValidYear &&
      isValidCVC &&
      name.trim() !== ""
    ) {
      setFormVisible(false);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`${
        formVisible ? "block" : "hidden"
      } mt-16  p-8 xl:max-w-md xl:m-auto xl:float-right xl:grow`}
    >
      <label
        htmlFor="name"
        className="inline-block text-[0.9rem] uppercase font-bold tracking-wider text-VeryDarkViolet w-full"
      >
        Cardholder Name
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={21}
          type="text"
          id="name"
          name="name"
          placeholder="e.g. WDWaleed"
          className="text-custom py-3 px-4 mt-1.5 border-2 border-LightGrayishViolet rounded-lg w-full font-medium"
        />
      </label>
      <label
        htmlFor="card-number"
        className="inline-block text-[0.9rem] uppercase font-bold tracking-wider  text-VeryDarkViolet w-full mt-4"
      >
        Card Number
        <input
          value={cardNumber}
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
          maxLength={19}
          type="text"
          id="card-number"
          name="card-number"
          placeholder="e.g. 1234 5678 9000 0000"
          className="text-custom py-3 px-4 mt-1.5 border-2 border-LightGrayishViolet rounded-lg w-full font-medium"
        />
      </label>

      <p
        className={`error-message ${
          !isValidCardNumber ? "block" : "hidden"
        } text-errors font-medium`}
      >
        Wrong format
      </p>
      <div className="flex gap-2">
        <label
          htmlFor="expiry-date"
          className=" basis-[55%] inline-block text-[0.9rem] uppercase font-bold tracking-wider  text-VeryDarkViolet w-full mt-4"
        >
          Exp. Date (MM/YY)
          <div className="flex gap-2 w-full">
            <input
              value={month}
              onChange={(e) => {
                setMonth(parseInt(e.target.value));
              }}
              type="number"
              placeholder="MM"
              className="text-center basis-[50%] text-custom py-3 px-4 mt-1.5 border-2 border-LightGrayishViolet rounded-lg w-12 font-medium"
            />
            <input
              value={year}
              onChange={(e) => {
                setYear(parseInt(e.target.value));
              }}
              type="number"
              placeholder="YY"
              className="text-center basis-[50%] text-custom py-3 px-4 mt-1.5 border-2 border-LightGrayishViolet rounded-lg w-12 font-medium"
            />
          </div>
          <p
            className={`error-message ${
              !isValidMonth || !isValidYear ? "block" : "hidden"
            } text-errors font-medium`}
          >
            Can&apos;t be blank
          </p>
        </label>
        <label
          htmlFor="cvc"
          className="basis-[45%] inline-block text-[0.9rem] uppercase font-bold tracking-wider  text-VeryDarkViolet w-full mt-4"
        >
          CVC
          <input
            value={CVC}
            onChange={(e) => {
              setCVC(e.target.value);
            }}
            maxLength={4}
            id="cvc"
            name="cvc"
            type="text"
            placeholder="e.g. 123"
            className="text-custom py-3 px-4 mt-1.5 border-2 border-LightGrayishViolet rounded-lg w-full font-medium"
          />
          <p
            className={`error-message ${
              !isValidCVC ? "block" : "hidden"
            } text-errors font-medium`}
          >
            Can&apos;t be blank
          </p>
        </label>
      </div>

      <button
        onClick={handleValidationAndSubmission}
        className="w-full bg-VeryDarkViolet p-4 mt-8 rounded-lg text-custom font-medium text-LightGrayishViolet transition-opacity duration-200 hover:opacity-[.95]  "
      >
        Confirm
      </button>
    </form>
  );
};
export default Form;
