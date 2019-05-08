document.addEventListener('DOMContentLoaded', () => {
  init()
})

/**
 * Add event listeners when DOM is loaded
 */
function init () {
  // add listerner for each department
  var mascotImages = document.querySelectorAll('.mascot img')
  console.log('MASCOT IMAGES', mascotImages)
  const survey = document.getElementById('mascot-survey')
  const deptBtn = document.getElementById('next-dept')
  for (var i = 0; i < mascotImages.length; i++) {
    mascotImages[i].addEventListener('click', evt => {
      console.log('MASCOT CLICKED=>', evt.target)
      var id = evt.target.parentElement.id
      var name = evt.target.nextElementSibling.children[0].textContent
      console.log('text', name)
      survey.style.display = 'flex'
      deptBtn.style.display = 'block'
      document.querySelector('.name').innerHTML = name
      for (var idx = 0; idx < mascotImages.length; idx++) {
        var src = mascotImages[idx].src
        if (idx != id && !src.includes('grayscale')) {
          mascotImages[idx].src = src.slice(0, -4) + '-grayscale.png'
        }
      }
    })
  }

  // define variables to keep track of survey form filling
  var ratingDone = false
  // add listerner for rating stars
  const stars = document.getElementsByClassName('fa-star')
  var rating = -1
  for (var i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', evt => {
      console.log(evt.target.id)
      rating = evt.target.id
      getRating(rating, stars)
      ratingDone = true
    })
  }

  document.querySelector('.item3 input').addEventListener('keyup', evt => {
    console.log('evt', evt.target)
    surveyvalid(ratingDone)
  })
}
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

function surveyvalid (ratingDone) {
  var checkboxDone = false,
    inputboxDone = false,
    textboxDone = false
  const deptBtn = document.getElementById('next-dept')
  // check if survey is filled
  const inputs = document.querySelectorAll('#mascot-survey input')
  inputs.forEach((input, idx) => {
    if (idx >= 0 && idx <= 4) {
      if (input.checked == true) checkboxDone = true
    } else if (idx >= 5 && idx <= 10) {
      if (input.value.length > 0) inputboxDone = true
    } else if (idx == 11 && input.value.length > 0) {
      textboxDone = true
    }
  })
  if (ratingDone && checkboxDone && inputboxDone && textboxDone) {
    deptBtn.style.backgroundColor = '#32af83'
  }
}
