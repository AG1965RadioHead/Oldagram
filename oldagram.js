const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  },
      {
      name: "Arkhip Quinji",
      username: "vkaliko",
      location: "Moscow, Russia",
      avatar: "images/avatar-quinji.jpg",
      post: "images/post-quinji.jpg",
      comment: "belissimo, master!!!",
      likes: 2
      }
]

const wholePost = document.getElementById("whole-post")

function render() {
  for (let i = 0; i < posts.length; i++) {
    wholePost.innerHTML += `
    <section class="author-info">
        <img class="author-image" src="${posts[i].avatar}">
        <div class="author-data">
        <p class="author-name">${posts[i].name}</p>
        <p class="author-place">${posts[i].location}</p>
        </div>
    </section>

    <img class="main-image" src="${posts[i].post}">

    <section class="icons-block">
      <img id="like-btn" class="icons" src="images/icon-heart.png" alt="heart icon">
      <img class="icons" src="images/icon-comment.png" alt="comment icon">
      <img class="icons" src="images/icon-dm.png" alt="direct message icon">
    </section>

    <section>
      <p class="likes-line">${posts[i].likes} likes</p>
      <div class="comments-line">
          <p class="username">${posts[i].username}</p>
          <p>${posts[i].comment}</p>
      </div>
    </section>

    <p class="breaker"></p>
    `
  }
}



render()
