export function runChron() {
  console.log("Bot Started");
  let counter = 0;
  setInterval(() => {
    console.log(counter++);
  }, 5000);
}
