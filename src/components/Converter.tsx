import React, { FC } from 'react'

interface IConverter {
  currencyOptions: string[];
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  inputValue: number;
  selectValue: string;
  inputName: string;
  selectName: string;
}

const Converter: FC<IConverter> = ({
  currencyOptions,
  handleOnChange,
  handleSelect,
  selectValue,
  inputValue,
  inputName,
  selectName,

}) => {
  return (
    <div className='flex gap-3 justify-center p-2 '>
      <input
        className='p-3 rounded-md bg-[#EFEFEF]'
        onChange={handleOnChange}
        name={inputName}
        value={inputValue}
      />
      <select
        name={selectName}
        onChange={handleSelect}
        value={selectValue}
        className='p-3 rounded-md bg-[#EFEFEF]'>
        {currencyOptions.map((option) => <option key={option} value={option}>
          {option}
        </option>)}
      </select>
    </div>
  )
}

export default Converter
