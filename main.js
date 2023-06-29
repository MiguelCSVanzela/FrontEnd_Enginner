// document.addEventListener("DOMContentLoaded", function () {
//     const xhttp = new XMLHttpRequest();
//     const userNameSigned = document.querySelector(".profile-username").value;
//     const onlyUserName = userNameSigned.replace("@", "");
//     console.log(onlyUserName);
//     const endPoint = `https://api.github.com/users/${onlyUserName}`;

//     const avatar = document.getElementById('avatar');
//     const nome = document.getElementsByClassName('profile-name');
//     const repos = document.getElementById('repositories');
//     const seguidores = document.getElementById('followers');
//     const seguindo = document.getElementById('following');
//     const header = document.querySelector("header");
//     const bioDescricao = document.getElementById("bio");
//     const icon = document.querySelector(".bi-github");
//     const spinner = document.querySelector(".spinner-grow");

//     let randomNumber = (Math.floor(Math.random() * (5 - 1) + 1));

//     document.querySelector(".profile-link").addEventListener("click", function () {
//         fetch(endPoint)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (response) {
//                 const { avatar_url, bio, public_repos, followers, following, name } = response;
//                 avatar.src = avatar_url;
//                 nome.innerText = name;
//                 repos.innerText = public_repos;
//                 seguidores.innerText = followers;
//                 seguindo.innerHTML = following;
//                 header.classList.add(`userFound${randomNumber}`);
//                 link.classList.add(`userFound${randomNumber}`);

//                 bioDescricao.innerText = bio;
//                 icon.classList.add("d-none"); 
//                 spinner.classList.remove("d-none"); 

//             })
//             .catch(function (error) {
//                 throw new Error("OOu nou! Algo não correu bem aqui. Por Favor tente mais Tarde");
//             })
//             .finally(function(){
//                 setTimeout(function(){
//                     icon.classList.remove("d-none"); 
//                     spinner.classList.add("d-none"); 
//                 }, 1500);  
//             })
//     })

// })


// Versão Jquery

$(document).ready(function () {
    const userNameSigned = $(".profile-username").val();
    const onlyUserName = userNameSigned.replace("@", "");
    const endPoint = `https://api.github.com/users/${onlyUserName}`;

    const avatar = $('#avatar');
    const nome = $('.profile-name');
    const repos = $('#repositories');
    const seguidores = $('#followers');
    const seguindo = $('#following');
    const header = $("header");
    const bioDescricao = $("#bio");
    const icon = $(".bi-github");
    const spinner = $(".spinner-grow");
    const link = $(".profile-link");
    let randomNumber = (Math.floor(Math.random() * (5 - 1) + 1));

    $(".profile-link").click(function () {
        fetch(endPoint)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                const { avatar_url, bio, public_repos, followers, following, name } = response;
                avatar.attr('src', avatar_url);
                nome.text(name);
                repos.text(public_repos);
                seguidores.text(followers);
                seguindo.text(following);
                header.addClass(`userFound${randomNumber}`);
                link.addClass(`userFound${randomNumber}`);

                bioDescricao.text(bio);
                console.log(bio);
                icon.addClass("d-none");
                spinner.removeClass("d-none");

            })
            .catch(function (error) {
                throw new Error("OOu nou! Algo não correu bem aqui. Por Favor tente mais Tarde");
            })
            .finally(function () {
                setTimeout(function () {
                    icon.removeClass("d-none");
                    spinner.addClass("d-none");
                }, 1500);
            })
    })
})