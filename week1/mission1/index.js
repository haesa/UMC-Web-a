const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('password-check');
const messages = Array.from(document.getElementsByClassName('message'));
const modalWrapper = document.getElementById('modal-wrapper');
const close = document.getElementById('close');

function checkName() {
  const message = messages.find((msgBox) => msgBox.classList.contains('name'));
  message.classList.remove('pass', 'fail');

  if (name.value === '') {
    message.innerText = '필수 입력 항목입니다!';
    message.classList.add('fail');
    return false;
  }

  message.innerText = '멋진 이름이네요!';
  message.classList.add('pass');
  return true;
}

function checkEmail() {
  const message = messages.find((msgBox) => msgBox.classList.contains('email'));
  message.classList.remove('pass', 'fail');

  if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email.value)) {
    message.innerText = '올바른 이메일 형식입니다!';
    message.classList.add('pass');
    return true;
  }

  message.innerText = '올바른 이메일 형식이 아닙니다!';
  message.classList.add('fail');
  return false;
}

function checkAge() {
  const message = messages.find((msgBox) => msgBox.classList.contains('age'));
  message.classList.remove('pass', 'fail');

  if (age.value === '') {
    message.innerText = '나이를 입력해주세요!';
    message.classList.add('fail');
    return false;
  }

  if (/^\d+$/.test(age.value)) {
    if (parseInt(age.value, 10) >= 19) {
      message.innerText = '올바른 나이 형식입니다!';
      message.classList.add('pass');
      return true;
    } else {
      message.innerText = '미성년자는 가입할 수 없습니다!';
      message.classList.add('fail');
      return false;
    }
  }

  if (/^-\d*\.?\d+$/.test(age.value)) {
    message.innerText = '나이는 음수가 될 수 없습니다!';
    message.classList.add('fail');
    return false;
  }

  if (/^\d*\.\d+$/.test(age.value)) {
    message.innerText = '나이는 소수가 될 수 없습니다!';
    message.classList.add('fail');
    return false;
  }

  message.innerText = '나이는 숫자 형식이어야 합니다!';
  message.classList.add('fail');
  return false;
}

function checkPassword() {
  const message = messages.find((msgBox) =>
    msgBox.classList.contains('password')
  );
  message.classList.remove('pass', 'fail');

  if (password.value.length < 4) {
    message.innerText = '비밀번호는 최소 4자리 이상이어야 합니다.';
    message.classList.add('fail');
    return false;
  }

  if (password.value.length > 12) {
    message.innerText = '비밀번호는 최대 12자리까지 가능합니다.';
    message.classList.add('fail');
    return false;
  }

  if (
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d@!@#$%^&*?]+$/.test(
      password.value
    ) === false
  ) {
    message.innerText =
      '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
    message.classList.add('fail');
    return false;
  }

  message.innerText = '올바른 비밀번호입니다!';
  message.classList.add('pass');
  return true;
}

function checkPasswordCheck() {
  const message = messages.find((msgBox) =>
    msgBox.classList.contains('password-check')
  );
  message.classList.remove('pass', 'fail');

  if (passwordCheck.value === '') {
    message.innerText = '비밀번호가 일치하지 않습니다.';
    message.classList.add('fail');
    return false;
  }

  if (password.value === passwordCheck.value) {
    message.innerText = '비밀번호가 일치합니다!';
    message.classList.add('pass');
    return true;
  } else {
    message.innerText = '비밀번호가 일치하지 않습니다.';
    message.classList.add('fail');
    return false;
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('form subtim!');

  const isValidName = checkName();
  const isValidEmail = checkEmail();
  const isValidAge = checkAge();
  const isValidPassword = checkPassword();
  const isValidPasswordCheck = checkPasswordCheck();

  if (
    isValidName &&
    isValidEmail &&
    isValidAge &&
    isValidPassword &&
    isValidPasswordCheck
  ) {
    modalWrapper.style = 'display: flex';
  }
});

close.addEventListener('click', () => (modalWrapper.style = 'display: none'));
