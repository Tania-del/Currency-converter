import React, { FC } from "react";
import { ICurrency } from "../App";
interface IHeader {
  currency: ICurrency;
}

const Header: FC<IHeader> = ({ currency }) => {
  console.log(currency);

  return (
    <div>
      {Object.entries(currency).map(([sign, value]) => {
        return <p>{`${sign} : ${value}`}</p>;
      })}

      <button>usd</button>
    </div>
  );
};

export default Header;
