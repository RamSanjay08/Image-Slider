let images = 
[
"assests/wallpaper-1.jpg",
"assests/wallpaper-2.jpg",
"assests/wallpaper-3.jpg",
"assests/wallpaper-4.jpg",
"assests/wallpaper-5.jpg"
]
let startImage = 0
let lastImage = images.length - 1
let currentImage = 0
let imageTag = document.getElementById('image-slider')
let para = document.getElementById('para')

//^ NEXT
let nextBtn = document.getElementById('next')
nextBtn.addEventListener('click', ()=> {
  currentImage++
  if(currentImage>=lastImage) {
  currentImage = 4 
  }
  imageTag.src = images[currentImage]
  para.innerHTML = (currentImage+1) + '/5'
})

//^ PREV
let prevBtn = document.getElementById('prev')
prevBtn.addEventListener('click', ()=> {
  currentImage--
  if(currentImage<=startImage) {
    currentImage = 0;
  }
  imageTag.src = images[currentImage]
  para.innerHTML = (currentImage + 1) + '/5'
})