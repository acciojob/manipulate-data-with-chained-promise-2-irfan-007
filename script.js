//your JS code here. If required.
const output = document.getElementById("output");
function getArray() {
  return new Promise((res, rej) => {
    let arr = [1, 2, 3, 4].filter((k) => k % 2 == 0);
    setTimeout(() => res(arr), 1000);
  });
} 
function getMult(ar) {
  console.log(ar);

  return new Promise((res, rej) => {
    let arr = ar.map((k) => k * 2);
    setTimeout(() => res(arr), 2000);
  });
}

getArray()
  .then((ans) => {
    output.innerHTML = ans;
    return ans;
  })
  .then(getMult)
  .then((result) => {
    output.innerHTML = result;
  });
