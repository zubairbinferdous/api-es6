function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => arrow(data));
}

// const arrow = data => console.log(data[0].email);
const arrow = (data) => {
  const Element = document.getElementById("user_list");
  for (const user of data) {
    const createElement = document.createElement("li");
    createElement.innerText = user.email;
    Element.appendChild(createElement);
    // console.log(createElement.innerText = user.email);
    // console.log(Element.appendChild(createElement));
  }
};


function loadPost() {
  const post = document.getElementById("post");
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
      for (const postData of  data) {
         post.classList.add()
         const div = document.createElement("div");
         div.innerHTML = `
         <h2>${postData.id}</h2>
         <h1>${postData.title}</h1>
         <p>${postData.body}</p>
         `;
         post.appendChild(div);


      }
  })
}

loadPost();