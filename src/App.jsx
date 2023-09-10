import Cards from "./components/Cards";
// import Form from "./components/Form";
import { useState } from "react";
import Success from "./components/Success";

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");

  const [isValidCardNumber, setIsValidCardNumber] = useState(true);
  const [isValidMonth, setIsValidMonth] = useState(true);
  const [isValidYear, setIsValidYear] = useState(true);
  const [isValidCVC, setIsValidCVC] = useState(true);


  return (
    <main className="max-w-[375px] mx-auto shadow-2xl flex flex-col  xl:w-full xl:flex-row xl:max-w-[1440px] xl:h-screen xl:max-h-[900px] xl:shadow-none">
      <Cards
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        CVC={CVC}
      />
      <Success />
      {/* <Form
        name={name}
        setName={setName}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        CVC={CVC}
        setCVC={setCVC}
        isValidCardNumber={isValidCardNumber}
        setIsValidCardNumber={setIsValidCardNumber}
        isValidMonth={isValidMonth}
        setIsValidMonth={setIsValidMonth}
        isValidYear={isValidYear}
        setIsValidYear={setIsValidYear}
        isValidCVC={isValidCVC}
        setIsValidCVC={setIsValidCVC}
      /> */}
    </main>
  );
}

export default App;
