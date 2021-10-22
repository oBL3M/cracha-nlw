const LinksSocialMedia = {
  github: 'oBL3M',
  youtube: 'BL3M',
  facebook: 'BL3M',
  instagram: 'matheus.britzke',
  twitter: 'oBL3M',
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//computador 0123456789

changeSocialMediaLinks()

function getGitHubProfile(){
  fetch(`https://api.github.com/users/${LinksSocialMedia.github}`)
  .then(response => response.json())
  .then(data => {
    titleName.textContent = data.name
    userName.textContent = data.name
    userLink.href = data.html_url
    userBio.textContent = data.bio
    userImg.src = data.avatar_url
    userId.textContent = data.login
  })
}
getGitHubProfile()
