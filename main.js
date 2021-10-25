const linksSocialMideas = {
  github: 'rafelradan',
  youtube: 'EsbCursosdeInglês',
  facebbok: 'RafaelRadan',
  instagram: 'radantreinos',
  twitter: ''
}

function changeSocialMediasLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMideas[social]}`
  }
}

changeSocialMediasLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMideas.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //alert(data.name)
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//https://api.github.com/users/rafelradan
