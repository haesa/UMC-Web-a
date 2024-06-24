function checkName(name) {
  return /^[A-Za-zㄱ-ㅎ가-힣ㅏ-ㅣ]+$/.test(name);
}

function checkEmail(email) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function checkAge(age) {
  const intAge = parseInt(age, 10);
  if (!/^-?\d+(\.\d+)?$/.test(age)) return '나이는 숫자를 입력받아야 합니다.';
  if (/^-?\d*\.\d+$/.test(age)) return '나이는 소수가 될 수 없습니다.';
  if (intAge < 0) return '나이는 음수가 될 수 없습니다.';
  if (intAge < 19) return '우리 영화 사이트는 19세 이상만 가입이 가능합니다.';
  return undefined;
}

function checkPassword(password) {
  if (password.length < 4) return '비밀번호는 최소 4자리 이상이어야 합니다.';
  if (password.length > 12) return '비밀번호는 최대 12자리까지 가능합니다.';
  if (
    !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@#$!%*?&]+$/.test(password)
  )
    return '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
  return undefined;
}

function checkRePassword(password, rePassword) {
  return password === rePassword;
}

export { checkAge, checkEmail, checkName, checkPassword, checkRePassword };
