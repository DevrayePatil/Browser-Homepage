const apps = [
  {
    name: 'Chat gpt',
    icon: './assets/chatgpt.svg',
    url: 'https://chat.openai.com'
  },
  {
    name: "Leet Code",
    icon: "./assets/leetcode.svg",
    url: "https://leetcode.com",
  },
  {
    name: "Github",
    icon: "./assets/github.svg",
    url: "https://github.com",
  },
  {
    name: "Codepen",
    icon: "./assets/codepen.svg",
    url: "https://codepen.ip",
  },
];



const appsContainer = document.querySelector("#apps-container");
const searchInput = document.getElementById("search-input-container");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    googleSearch();
  }
});


apps.forEach((app) => {
  const appUrl = shortUrl(app.url);
  const appCard = `<div class="app-card" onclick="goToLink('${app.url}')">
                            <img class="app-icon"  src="${app.icon}"></img>
                            <div class="card-body">
                                <span class="app-name">${app.name}</span>
                                <span class="app-url">${appUrl}</span>
                            </div>
                        </div>`;

  appsContainer.innerHTML += appCard;
});

const urlSpans = document.querySelectorAll(".url");

urlSpans.forEach(function (urlSpan) {
  urlSpan.addEventListener("click", function (event) {
    // Prevent the default behavior of the hyperlink
    alert("User clicked on URL");
    event.preventDefault();
  });
});

const googleSearch = () => {
  var text = document.getElementById("search").value;
  var cleanQuery = text.replace(" ", "+", text);
  var url = "http://www.google.com/search?q=" + cleanQuery;

  window.location.href = url;
};

const savedUrl = localStorage.getItem("url");
const nameSpan = document.querySelector(".name");
const urlSpan = document.querySelector(".url");
const icon = document.querySelector(".fa-stack-overflow");
const link = document.querySelector("#link");

// listen for changes in the content of the name and url spans
// nameSpan.addEventListener('input', updateLink);

function shortUrl(url) {
  var shortHostname = url.replace("https://", "");
  return shortHostname;
}

function updateLink() {
  // update the text content of the name span with the root domain
  const domain = new URL("http://" + urlSpan.textContent).hostname.replace(
    "www.",
    ""
  );
  link.querySelector(".name").textContent = domain;

  // update the href of the link
  link.href = "http://" + urlSpan.textContent;

  // update the icon class
  const iconClass = "fa-brands fa-" + domain.split(".")[0];
  icon.className = iconClass;

  // save the URL to local storage
  localStorage.setItem("url", urlSpan.textContent);
}

// retrieve the saved URL from local storage when the page loads
window.addEventListener("load", function () {
  const savedUrl = localStorage.getItem("url");
  if (savedUrl) {
    urlSpan.textContent = "savedUrl";
    updateLink();
  }
});

goToLink = (url) => {
  console.log("first");
  window.location.href = url;
};
