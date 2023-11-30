import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { getCurrency } from './helpers/apis';

export interface ICurrency {
  USD?: string;
  EUR?: string
}

function App() {
  const [currency, setCurrency] = useState<ICurrency>({});

  useEffect(() => {
    (async () => {
      const data = await getCurrency()

      if (data) {
        setCurrency(data);
      }
    })()
  }, [])
  
  return (
    <div className='p-[50px]'>
      <div className='max-w-[700px] m-auto pt-10 pb-10 pl-7 pr-7'>
         <h1 className='font-bold text-center text-2xl/[normal]'>Currency Converter</h1>
        <Header  currency={currency} />
    </div>
    </div>
  );
}

export default App;
