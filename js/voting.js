document.addEventListener('DOMContentLoaded', () => {
  init()
})

/**
 * Add event listeners when DOM is loaded
 */
function init () {
  // add listerner for each department
  const mascots = document.getElementsByClassName('mascot')
  const survey = document.getElementById('mascot-survey')
  const deptBtn = document.getElementById('next-dept')
  for (var i = 0; i < mascots.length; i++) {
    mascots[i].addEventListener('click', evt => {
      console.log('MASCOT CLICKED=>', evt.target)
      survey.style.display = 'flex'
      deptBtn.style.display = 'block'
    })
  }

  // add listerner for checkbox
  /* const checkboxes = document.getElementsByClassName('checkbox')
  for (var i = 0; i < stars.length; i++) {
    checkboxes[i].addEventListener('RATING', evt => {
      console.log(evt.target.id)
      rating = evt.target.id
      getRating(rating, stars)
    })
  } */

  // add listerner for rating stars
  const stars = document.getElementsByClassName('fa-star')
  var rating = -1
  for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', evt => {
      console.log(evt.target.id)
      rating = evt.target.id
      getRating(rating, stars)
    })
  }
}

function addListener () {}
/**
 * Get Star Ratings
 */
function getRating (i, stars) {
  var ratingText = document.getElementById('rating-text')
  switch (i) {
    case '0':
      ratingText.innerHTML = 'Very Bad'
      break
    case '1':
      ratingText.innerHTML = 'Bad'
      break
    case '2':
      ratingText.innerHTML = 'Good'
      break
    case '3':
      ratingText.innerHTML = 'Very Good'
      break
  }
  for (var k = 0; k < stars.length; k++) {
    var elem = stars[k]
    var exists = elem.classList.contains('star-fill')
    if (k <= i && !exists) {
      elem.classList.remove('far')
      elem.classList.add('fas', 'star-fill')
    } else if (k > i && exists) {
      elem.classList.remove('fas', 'star-fill')
      elem.classList.add('far')
    }
  }
}

function makeGray (image) {
  // change all pixels of image to gray
  for (var pixel of image.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3
    pixel.setRed(avg)
    pixel.setGreen(avg)
    pixel.setBlue(avg)
  }
  // display new image
  var canvas = document.getElementById('can')
  image.drawTo(canvas)
}
