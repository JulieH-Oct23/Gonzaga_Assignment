let favNumber = 22;
let baseURL = "http://numbersapi.com";

// 1.
// we are grabbing just the favorite number here //
// try to pass in a string, what heppends then ? //
async function part1() {
  try {
    let response = await axios.get(`${baseURL}/${favNumber}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for part1:", error);
  }
}
part1();




// PART2
const favNumbers = [3, 7, 9];

async function part2() {
  try {
    let response = await axios.get(`${baseURL}/${favNumbers}?json`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data for part2:", error);
  }
}
part2();




// PART3
async function part3() {
  const button = document.querySelector("button");
  button.addEventListener("click", clickAndDisplayData);

  async function clickAndDisplayData() {
    try {
      let facts = await Promise.all(
        Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
      );
      facts.forEach(response => {
        document.body.insertAdjacentHTML('beforeend', `<p>${response.data.text}</p>`);
      });
    } catch (error) {
      console.error("Error fetching data for part3:", error);
    }
  }
}
part3();


