import Cards from "./components/Cards";
import Form from "./components/Form";
import { useState } from "react";

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
    <main className="max-w-[375px] lg:w-full mx-auto shadow-2xl">
      <Cards
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        CVC={CVC}
      />
      <Form
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
      />
    </main>
  );
}

export default App;
