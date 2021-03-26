export function limitText(value = "", limitNum = 25) {
  let result = value;

  if (value.length > limitNum) {
    result = value.slice(0, limitNum);
  }

  return result;
}

export function isValidEmail(str = "") {
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regEmail.test(str);
}
