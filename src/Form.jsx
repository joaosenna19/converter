import converter from "./converter";
import { useState } from "react";

const Form = ({ to, from }) => {
  const [result, setResult] = useState(null);

  const onConvertClick = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("input").value;
    const results = converter(
      from,
      to,
      ...inputValue.split(",").map((value) => parseFloat(value.trim()))
    );

    setResult(results);
  };

  return (
    <>
      <form action="" className="flex flex-col lg:mx-48 md:mx-12 mt-10 mx-5">
        <label htmlFor="input" className="italic text-sm font-light">
          If you want to convert more than a number, please separate the values
          by comma (e.g. 10, 20)
        </label>
        <input
          type="text"
          id="input"
          className="my-2 border border-gray-700 rounded-md"
          placeholder="Enter values here"
        />
        <select
          name=""
          id=""
          className="border border-gray-700 rounded-md mb-2 bg-gray-200"
        >
          <option value="1">
            {from} to {to}
          </option>
          <option value="2">
            {to} to {from}
          </option>
        </select>
        <button
          className="bg-gray-300 border-gray-700 rounded-md hover:bg-gray-400"
          onClick={onConvertClick}
        >
          Convert
        </button>
        {result !== null ? (
          <div className="mt-2">Result: {result.join(", ")}</div>
        ) : null}
      </form>
    </>
  );
};

export default Form;
