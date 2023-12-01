import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { getCurrency } from "./helpers/apis";
import Converter from "./components/Converter";

export interface ICurrency {
  USD?: number;
  EUR?: number;
}

const currencyOptions = ["USD", "EUR", "UAH"];
const defaultCurrency = { USD: 1, EUR: 0.95 };

function App() {
  const [currency, setCurrency] = useState<any>(defaultCurrency);
  const [inputValue, setInputValue] = useState<any>({ currency1: '', currency2: '' });
  const [selectValue, setSelectValue] = useState({
    currency1: "USD",
    currency2: "EUR",
  });
  const [isMainInput, setIsLastInput] = useState("currency1");

  useEffect(() => {
    (async () => {
      const data = await getCurrency("USD")

      if (data) {
        setCurrency(data);
      }
    })()
  }, [])


  const handleOnChange = ({
    target: { name: _name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = value.replace(/\D/g, "");

    const oppositeCurrency = _name === "currency1" ? "currency2" : "currency1";

    const name = _name as keyof typeof selectValue;

    const anotherInput =
      Number(value) * currency[selectValue[oppositeCurrency]];

    setInputValue((prev: any) => ({
      ...prev,
      [name]: Number(onlyNumbers),
      [oppositeCurrency]: anotherInput,
    }));

    setIsLastInput(name);
  };

  const handleSelect = async ({
    target: { name: _name, value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const name = _name as keyof typeof selectValue;
    setSelectValue((prev) => ({ ...prev, [name]: value }));

    let nextCurrency = currency;

    if (name === isMainInput && selectValue[isMainInput] !== value) {
      nextCurrency = await getCurrency(value);
      
      console.log(nextCurrency);
      
    }
    
    setCurrency(nextCurrency)
   
    const oppositeToMainInput = isMainInput === 'currency1' ? 'currency2' : 'currency1';

    if (isMainInput === name) {
      setInputValue((prev: any) => ({
        ...prev,
        [oppositeToMainInput]: prev[isMainInput] * nextCurrency[selectValue[oppositeToMainInput ] as keyof typeof nextCurrency],
      }));
    } else {
     
      setInputValue((prev: any) => ({
        ...prev,
        [name]: prev[isMainInput as keyof typeof inputValue] * nextCurrency[value as keyof typeof nextCurrency],
      }));
    }
  };

  return (
    <div className="p-[50px]">
      <div className="max-w-[700px] m-auto pt-10 pb-10 pl-7 pr-7">
        <h1 className="font-bold text-center text-2xl/[normal]">
          Currency Converter
        </h1>
        <Header currency={Object.values(selectValue).map((value) => [value, currency[value]])} />
        <div className="bg-[#FFF] rounded-lg	p-4 max-w-[400px] m-auto">
        <Converter
          selectValue={selectValue.currency1}
          inputValue={inputValue.currency1}
          currencyOptions={currencyOptions}
          handleOnChange={handleOnChange}
          handleSelect={handleSelect}
          inputName="currency1"
          selectName="currency1"
        />
        <Converter
          selectValue={selectValue.currency2}
          inputValue={inputValue.currency2}
          currencyOptions={currencyOptions}
          handleOnChange={handleOnChange}
          handleSelect={handleSelect}
          inputName="currency2"
          selectName="currency2"
        />
        </div>
      </div>
    </div>
  );
}

export default App;
