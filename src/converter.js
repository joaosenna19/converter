const converter = (from, to, ...values) => {
  const frm = from.toLowerCase();
  const t = to.toLowerCase();
  const results = [];

  for (let value of values) {
    switch (`${frm}-${t}`) {
      case "kilos-pounds":
        results.push(value * 2.20462);
        break;
      case "pounds-kilos":
        results.push(value * 0.453592);
        break;
      case "celsius-fahrenheit":
        results.push((value * 9) / 5 + 32);
        break;
      case "fahrenheit-celsius":
        results.push(((value - 32) * 5) / 9);
        break;
      case "kilometers-miles":
        results.push(value * 0.621371);
        break;
      case "miles-kilometers":
        results.push(value * 1.60934);
        break;
      default:
        throw new Error("Invalid conversion");
    }
  }

  return results;
};

export default converter;
