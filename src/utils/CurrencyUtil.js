import BigNumber from "bignumber.js";
import i18next from "i18next";
import { parseUnits } from "ethers/lib/utils";

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};
export const formatPrice = (nr, limitDigits = false, symbol = undefined) => {
  let prefix = symbol ? symbol : "$";
  if (nr === 0 || isNaN(nr)) {
    return `${prefix}0`;
  }
  if (limitDigits) {
    let newNr = i18next.format(nr, `0,0[.][00]`);
    if (newNr === "NaN" || newNr === "0") {
      newNr = `0`;
    }
    return `${prefix}` + newNr;
  }
  let newNr = i18next.format(nr, `0,0[.][000000]`);
  if (newNr === "NaN" || newNr === "0") {
    newNr = `0`;
  }
  return `${prefix}` + newNr;
};

export const formatCoins = (nr) => {
  if (isNaN(nr)) {
    return "0";
  }
  let newNr = i18next.format(nr, `0,0[.][000000]`);
  if (newNr === "NaN" || newNr === "0") {
    newNr = `0`;
  }
  return newNr;
};
export const formatNumber = nr => {
  return i18next.format(nr, "0,0.[00]a");
};
export const formatNoComma = (nr: string) => {
  return nr.replace(/,/g, ".");
};
export const formatPercentage = nr => {
  if (isNaN(nr)) {
    return "-";
  }
  const newNr = new BigNumber(nr);
  const isUp = newNr >= 0;
  const number = Number(newNr.toFixed(2));
  if (isUp) {
    return "+" + number + "%";
  }
  return number + "%";
};
export const toWei = (amount, decimals) => {
  return Number(parseUnits(amount, decimals));
};

export const toEth = (amount, decimals) => {
  return String(new BigNumber(amount).div(10 ** decimals));
};

export const calcFee = (gas, gasPrice) => {
  return Number(new BigNumber(gas).multipliedBy(gasPrice));
};
