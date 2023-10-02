import Cards from "./components/Cards";
import Form from "./components/Form";
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

  const [formVisible, setFormVisible] = useState(true);

  return (
    <main className="mx-auto flex max-w-[375px] flex-col shadow-2xl  xl:h-screen xl:max-h-[900px] xl:w-full xl:max-w-[1440px] xl:flex-row xl:shadow-none">
      <Cards
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        CVC={CVC}
      />
      <Success formVisible={formVisible} setFormVisible={setFormVisible} />
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
        formVisible={formVisible}
        setFormVisible={setFormVisible}
      />
    </main>
  );
}

export default App;
