// https://ntcde.com/web-development/su-dung-javascript-fetch-api-voi-async-await.html
// https://dmitripavlutin.com/javascript-fetch-async-await/
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

var form = document.querySelector(".form");
var search = document.querySelector(".input-search");
var btn = document.querySelector(".btn-search");
var main = document.querySelector('.main-content');
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let urlAPI = "https://api.github.com/users/";

async function getData(name) {
	let user = await fetch(`${urlAPI}${name}`);

    if (!user.ok) { //call api failed
        const alert = 'No profile with this username';
        throw new Error(alert);
    }

	let data = await user.json();
    return data;
};

async function getDataRepos(name) {
    let repositories = await fetch(`${urlAPI}${name}/repos `);
    let data = await repositories.json();
    return data;
}

function createCardUser(data) {
    var date = new Date(`${data.created_at}`);
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var bio = !(data.bio === null) ? data.bio : 'This profile has no bio';
    var address = !(data.location === null) ? data.location : 'Not Found Address';
    var twitter = !(data.twitter_username === null) ? data.twitter_username : 'Not Available';
    var company = !(data.company === null ) ? data.company : 'No Place to work';
    var blog = !(data.blog == '') ? data.blog : 'No blog';

    const cardHTML = `
    <div class="card-success">
                <div class="img">
                    <img src="${data.avatar_url}" alt="avatar" class="avatar">
                </div>
                <div class="content">
                    <div class="header">
                        <h2 class="name">${data.name}</h2>
                        <div class="time">
                            Joined 
                            <span class="day">${day} </span>
                            <span class="month">${month} </span>
                            <span class="year">${year} </span>
                        </div>
                    </div>
                    <h5 class="title-login">${data.login}</h5>
                    <div class="bio">${bio}</div>

                    <div class="information">
                        <div class="information-item">
                            Repos
                            <span class="repos">${data.public_repos}</span>
                        </div>
                        <div class="information-item">
                            Follower
                            <span class="follower">${data.followers}</span>
                        </div>
                        <div class="information-item">
                            Following
                            <span class="following">${data.following}</span>
                        </div>
                    </div>

                    <div class="information-contact">
                        <div class="items">
                            <i class="fa-solid fa-location-dot"></i>
                            <span class="address-api">${address}</span>
                        </div>

                        <div class="items">
                            <i class="fa-brands fa-twitter"></i>
                            <span class="twitter-api">${twitter}</span>
                        </div>

                        <div class="items">
                            <i class="fa-solid fa-link"></i>
                            <span class="blog-api">${blog}</span>
                        </div>

                        <div class="items">
                            <i class="fa-solid fa-building"></i>
                            <span class="company-api"> ${company}</span>
                        </div>
                    </div>

                    <div class="repositories">
                    </div>
                </div>
            </div>
    `;
    main.innerHTML = cardHTML;
}

function getRepos(data) {
    var repositories = document.querySelector('.repositories');
    data.slice(0, 5).forEach((items) => {
        var reposElement = document.createElement('a');
        reposElement.className = 'repo-items';
        reposElement.innerText = items.name;
        reposElement.href = items.html_url;
        repositories.appendChild(reposElement);
    });
};

function createErrorCard(message) {
    const cardHTML = `
        <div class="card-error">
            <h1>${message}</h1>
        </div>
    `;
    main.innerHTML = cardHTML;
}


// function when submit and click on button

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const userName = search.value;

	if (userName) {
		getData(userName)
            .then((data) => {
                createCardUser(data);
            })
            .catch(error => {
                createErrorCard(error.message);
            });

        getDataRepos(userName)
            .then((data) => {
                getRepos(data);
            });
         
    
        search.value = "";
	}
});

btn.addEventListener("click", function (e) {
	e.preventDefault();
	const userName = search.value;
	if (userName) {
		getData(userName)
            .then((data) => {
                createCardUser(data);
            })
            .catch(error => {
                createErrorCard(error.message);
            });

        getDataRepos(userName)
            .then((data) => {
                getRepos(data);
            });
        search.value = '';
    }
});

