const getColor = () => {
  // random number
  const randomNumber = Math.floor(Math.random() * 16777215);
  // convert random number to Hex Code
  const randomCode = "#" + randomNumber.toString(16);
  // change bg color of body according to random code
  document.body.style.backgroundColor = randomCode;
  // adding hex colour code to h3 tag
  document.getElementById("color-code").innerText = randomCode;
  // copying in clipboard
  navigator.clipboard.writeText(randomCode);
};

//event call
document.getElementById("btn").addEventListener("click", getColor);

// init call
getColor();
