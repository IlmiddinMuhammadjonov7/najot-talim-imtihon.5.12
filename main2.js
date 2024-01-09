const divEl = document.querySelector("#page2");

const BASE_URL = "http://localhost:3000";

async function getSubjects() {
  const res = await fetch(`${BASE_URL}/data`);
  return res.json();
}

async function render() {
  const yangi = await getSubjects();
  let html = "";
  yangi.forEach((element) => {
    html += `
        <h1>salom</h1>
        `;
  });
  divEl.innerHTML = html;
  html = "";
}
render();
