function solveThree(s, mp) {
  const x = parseInt(s, 10);
  if (x === 0) return "";

  // 1 to 20
  if (x >= 1 && x <= 20) {
    return mp[x];
  }

  // 21 to 99
  if (x >= 21 && x <= 99) {
    const one = x % 10;
    const two = Math.floor(x / 10) * 10;
    return one > 0 ? `${mp[two]} ${mp[one]}` : mp[two];
  }

  // 100–999
  const tmp = Math.floor((x % 100) / 10);
  if (tmp === 1) {
    const one = x % 10;
    const hund = Math.floor(x / 100);
    return `${mp[hund]} Hundred ${mp[10 + one]}`;
  }

  const one = x % 10;
  const two = Math.floor((x % 100) / 10) * 10;
  const hund = Math.floor(x / 100);

  let res = `${mp[hund]} Hundred`;
  if (two) res += ` ${mp[two]}`;
  if (one) res += ` ${mp[one]}`;
  return res;
}

function ConvertDecimal(n, mp) {
  if (n === 0) return "";
  if (n <= 20) return mp[n];
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  return ones ? `${mp[tens]} ${mp[ones]}` : mp[tens];
}

export default function numberToWords(num) {
  if (!num || num.length > 12) return "";
  if (!/^\d+(\.\d+)?$/.test(num)) return "";

  let [intPart, decPart = ""] = num.split(".");
  decPart = decPart.slice(0, 2);

  const mp = {
    0: "",
    1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five",
    6: "Six", 7: "Seven", 8: "Eight", 9: "Nine",
    10: "Ten", 11: "Eleven", 12: "Twelve", 13: "Thirteen",
    14: "Fourteen", 15: "Fifteen", 16: "Sixteen",
    17: "Seventeen", 18: "Eighteen", 19: "Nineteen",
    20: "Twenty", 30: "Thirty", 40: "Forty",
    50: "Fifty", 60: "Sixty", 70: "Seventy",
    80: "Eighty", 90: "Ninety"
  };

  const mppos = {
    1: "",
    2: "Thousand",
    3: "Million",
    4: "Billion"
  };

  if (intPart === "0") return "Zero Rupees Only";

  let decVal = "";
  if (decPart.length > 0) {
    decVal = ConvertDecimal(Number(decPart), mp);
  }

  const x = intPart.toString();
  let pos = 1, i = x.length - 1, res = "";

  while (i >= 2) {
    const op = solveThree(x.substring(i - 2, i + 1), mp);
    if (op) res = `${op} ${mppos[pos]} ${res}`;
    pos++; i -= 3;
  }

  if (i >= 0) {
    res = `${solveThree(x.substring(0, i + 1), mp)} ${mppos[pos]} ${res}`;
  }

  res = res.trim();
  res += intPart === "1" ? " Rupee" : " Rupees";

  if (decVal.length > 0) {
    res += ` and ${decVal} Paise Only`;
  } else {
    res += " Only";
  }

  return res;
}
