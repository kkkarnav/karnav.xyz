const fs = require('fs');

const dir = 'D:/code/portfolio_site/assets/ashokaconfessions';
const files = fs.readdirSync(dir);

content = "";
template = "<div class=\"gallery-item\" tabindex=\"0\">\n<img src=\"{img_url}\" class=\"gallery-image\" alt=\"\">\n<div class=\"gallery-item-info\">\n<ul>\n<li class=\"gallery-item-likes\"><span class=\"visually-hidden\">Likes:</span><i class=\"fas fa-heart\" aria-hidden=\"true\"></i>{likes}</li>\n<li class=\"gallery-item-comments\"><span class=\"visually-hidden\">Comments:</span><i class=\"fas fa-comment\" aria-hidden=\"true\"></i>{comments}</li>\n</ul>\n</div>\n</div>"
for (const file of files) {
  content = template.replace("{img_url}", "./assets/ashokaconfessions/" + file) + "\n" + content;
}

fs.writeFile('D:/code/portfolio_site/assets/1.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
