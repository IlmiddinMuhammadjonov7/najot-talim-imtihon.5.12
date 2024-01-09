const divEl = document.querySelector("#page");

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
        <div class="page_one">
            <img src='${element.logo}' alt="">
            <div class="page_home">
                <span>${element.postedAt} </span><span> /</span><span>${element.contract}</span>
            </div> 
            <a href="./home.html" class="yonalish">${element.position}</a>
            <span class="page_two">${element.company}</span>
            <a href="#">${element.location}</a>
        </div>
        `;
  });
  divEl.innerHTML = html;
  html = "";
}
render();
