const apps = [
  {
    name: "StackOver Flow",
    icon: "fa-brands fa-stack-overflow",
    url: "https://stackoverflow.com",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    url: "https://github.com",
  },
  {
    name: "Twitter",
    icon: "fa-brands fa-twitter",
    url: "https://twitter.com",
  },
];

const chromeApps = [
  {
    name: "Apps",
    icon: "fa-solid fa-grid-round",
    url: "chrome://apps/",
  },
  {
    name: "Bookmarks",
    icon: "fa-solid fa-star",
    url: "chrome://bookmarks/",
  },
  {
    name: "History",
    icon: "fa-solid fa-history",
    url: "chrome://history/",
  },
  {
    name: "Downloads",
    icon: "fa-solid fa-download",
    url: "chrome://downloads/",
  },
  {
    name: "Extensions",
    icon: "fa-solid fa-puzzle-piece",
    url: "chrome://extensions/",
  },
  {
    name: "Settings",
    icon: "fa-solid fa-cog",
    url: "chrome://settings/",
  },
  {
    name: "Version",
    icon: "fa-solid fa-slider",
    url: "chrome://version/",
  }
];

const chromeContainer = document.querySelector(".chrome-container");
const appsContainer = document.querySelector("#apps-container");
const searchInput = document.getElementById("search-input-container");

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    googleSearch();
  }
});

chromeApps.forEach(app =>{
  const appCard = `<div class="chrome-app" onclick="goToLink('${app.url}')">
  <i class="${app.icon}"></i>
</div>`

  chromeContainer.innerHTML += appCard;
})
apps.forEach((app) => {
  const appUrl = shortUrl(app.url);
  const appCard = `<div class="app-card" onclick="goToLink('${app.url}')">
                            <i class="${app.icon}"></i>
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
