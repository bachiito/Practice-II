const images = document.querySelectorAll(".img");

async function setImage(img) {
  const res = await fetch("https://picsum.photos/300/300");
  img.setAttribute("src", res.url);
}

images.forEach(img => setImage(img));
