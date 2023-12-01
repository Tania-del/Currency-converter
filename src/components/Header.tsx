import React, { FC } from "react";
interface IHeader {
  currency: [string, number][]
}

const Header: FC<IHeader> = ({ currency }) => {
  console.log(currency);
  
  return (
    <div className="flex gap-20 justify-center pt-2 pb-4">
      {currency.map(([sign, value]) => {
        return <p className="text-base " key={value}>{`${sign} : ${value}`}</p>;
      })}
    </div>
  );
};

export default Header;
