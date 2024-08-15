const targetDate = new Date("2025-01-01T00:00:00");
console.log(targetDate);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference / (1000 * 60 * 60 * 24)) % 24);
  const mins = Math.floor((timeDifference / (1000 * 60)) % 60);
  const sec = Math.floor((timeDifference / 1000) % 60);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days} Days : ${hours} Hrs : ${mins} Mins :  ${sec} Sec`;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();
