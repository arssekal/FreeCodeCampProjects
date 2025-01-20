const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const nonAlphanumericCharacters = "!@#$%^&*()_+[]{}|;:',.<>?/`~\"\\-=".split(
  ""
);
function checkPalindrome() {
  const clean = cleantext();
  const len = clean.length;
  const half = Math.trunc(len / 2);
  for (let i = 0; i < half; i++) {
    if (clean[i] !== clean[len - 1 - i]) {
      return textInput.value + " is not palindrome";
    }
  }
  return textInput.value + " is palindrome";
}
function resultat() {
  result.innerText = checkPalindrome();
  textInput.value = "";
  result.classList.remove("hidden");
}
function cleantext() {
  if (textInput.value === "") {
    alert("please enter some text");
  }
  const text = textInput.value;
  let cleantext = "";
  for (let i = 0; i < text.length; i++) {
    if (!nonAlphanumericCharacters.includes(text[i])) {
      cleantext += text[i];
    }
  }
  return cleantext.toLowerCase();
}
checkBtn.addEventListener("click", resultat);
/*
    const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`;

  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerText = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
*/