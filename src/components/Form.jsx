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
      } mt-16  p-8 xl:float-right xl:m-auto xl:max-w-md xl:grow`}
    >
      <label
        htmlFor="name"
        className="inline-block w-full text-[0.9rem] font-bold uppercase tracking-wider text-VeryDarkViolet"
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
          className="mt-1.5 w-full rounded-lg border-2 border-LightGrayishViolet px-4 py-3 text-custom font-medium"
        />
      </label>
      <label
        htmlFor="card-number"
        className="mt-4 inline-block w-full text-[0.9rem] font-bold  uppercase tracking-wider text-VeryDarkViolet"
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
          className="mt-1.5 w-full rounded-lg border-2 border-LightGrayishViolet px-4 py-3 text-custom font-medium"
        />
      </label>

      <p
        className={`error-message ${
          !isValidCardNumber ? "block" : "hidden"
        } font-medium text-errors`}
      >
        Wrong format
      </p>
      <div className="flex gap-2">
        <label
          htmlFor="expiry-date-input"
          className=" mt-4 inline-block w-full basis-[55%] text-[0.9rem] font-bold  uppercase tracking-wider text-VeryDarkViolet"
        >
          Exp. Date (MM/YY)
          <div className="flex w-full gap-2">
            <input
              value={month}
              onChange={(e) => {
                setMonth(parseInt(e.target.value));
              }}
              type="number"
              id="expiry-date-input"
              placeholder="MM"
              className="mt-1.5 w-12 basis-[50%] rounded-lg border-2 border-LightGrayishViolet px-4 py-3 text-center text-custom font-medium"
            />
            <input
              value={year}
              onChange={(e) => {
                setYear(parseInt(e.target.value));
              }}
              type="number"
              placeholder="YY"
              className="mt-1.5 w-12 basis-[50%] rounded-lg border-2 border-LightGrayishViolet px-4 py-3 text-center text-custom font-medium"
            />
          </div>
          <p
            className={`error-message ${
              !isValidMonth || !isValidYear ? "block" : "hidden"
            } font-medium text-errors`}
          >
            Can&apos;t be blank
          </p>
        </label>
        <label
          htmlFor="cvc-input"
          className="mt-4 inline-block w-full basis-[45%] text-[0.9rem] font-bold  uppercase tracking-wider text-VeryDarkViolet"
        >
          CVC
          <input
            value={CVC}
            onChange={(e) => {
              setCVC(e.target.value);
            }}
            maxLength={4}
            id="cvc-input"
            name="cvc"
            type="text"
            placeholder="e.g. 123"
            className="mt-1.5 w-full rounded-lg border-2 border-LightGrayishViolet px-4 py-3 text-custom font-medium"
          />
          <p
            className={`error-message ${
              !isValidCVC ? "block" : "hidden"
            } font-medium text-errors`}
          >
            Can&apos;t be blank
          </p>
        </label>
      </div>

      <button
        onClick={handleValidationAndSubmission}
        className="mt-8 w-full rounded-lg bg-VeryDarkViolet p-4 text-custom font-medium text-LightGrayishViolet transition-opacity duration-200 hover:opacity-[.95]  "
      >
        Confirm
      </button>
    </form>
  );
};
export default Form;
