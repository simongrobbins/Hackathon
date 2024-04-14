// JavaScript (script.js)
let cardArray = [
  {
      title: "Antioch Urban Ministries",
      information: "Our mission is to design, develop, and implement housing and human service programs for the poor and disenfranchised while serving as an advocacy agent for the relief of said population",
      link: "http://antiochurban.org/"
  },
  {
      title: "Breakthrough Atlanta",
      information: "Breakthrough Atlanta pursues a dual mission to: Increase academic opportunity for highly motivated, underserved students and get them into college ready to succeed; and inspire and develop the next generation of teachers and educational leaders",
      link: "https://breakthroughatlanta.org/"
  },
  {
      title: "Chastain Park Conservancy",
      information: "Chastain Memorial Park is Atlanta's largest, providing the North Atlanta community with 268 acres of recreation and greenspace. The mission of the Conservancy is to restore enhance, maintain, and preserve Chastain Memorial Park",
      link: "http://www.chastainparkconservancy.org/"
  },
  {
      title: "Dad's Garage Theatre Company",
      information: "Dads Garage engages, cultivates and inspires artists and audiences alike by producing innovative, scripted and improvised works that are recognized locally, nationally and internationally for being undeniably awesome.",
      link: "http://dadsgarage.com/"
  },
  {
      title: "Eco Addendum",
      information: "We lead naturalist walks year-round to guide in learning about and reconnecting to the nature of our region",
      link: "http://www.ecoaddendum.org/"
  },
  {
      title: "First African Community Development Corporation (FACDC)",
      information: "Our mission is to eliminate hunger, to improve healthcare for our people, and to improve the overall sustainability of communities",
      link: "http://www.firstafricancdc.org/"
  },
  {
      title: "WWOOF",
      information: "WWOOF organizations connect people who want to live and learn on organic farms and smallholdings with people who want to share their lifestyles, teach new skills and welcome volunteer help",
      link: "https://www.wwoof.org.il/"
  },
    {
      title: "World Wide Fund for Nature(WWF)",
      information: "Our mission is to stop the degradation of the planet's natural environment and to build a future in which humans live in harmony with nature, by: Conserving the world's biological diversity, Ensuring that the use of renewable natural resources is sustainable, Promoting the reduction of pollution and wasteful consumption.",
      link: "https://www.worldwildlife.org/"
  }
];

function generateCards(cards) {
  let cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = ""; // Clear existing cards

  cards.forEach(function(card) {
      let cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      let cardTitle = document.createElement('h3');
      cardTitle.textContent = card.title;

      let cardInfo = document.createElement('p');
      cardInfo.textContent = card.information;

      let cardLink = document.createElement('a');
      cardLink.href = card.link;
      cardLink.textContent = 'Website';

      cardDiv.appendChild(cardTitle);
      cardDiv.appendChild(cardInfo);
      cardDiv.appendChild(cardLink);

      cardsContainer.appendChild(cardDiv);
  });
}

// Initial display of cards
generateCards(cardArray);

// Assuming you have a variable indicating whether the user is logged in and their username (if available)
let isLoggedIn = false; // Change to true if the user is logged in
let username = ""; // Set the username here if the user is logged in

// Update the user status in the top corner
function updateUserStatus() {
    let userStatusElement = document.getElementById("userStatus");
        console.log(username);
        userStatusElement.textContent = "Welcome, " + localStorage.getItem("username");
    
}

document.getElementById("signup-form").addEventListener("submit", function(event) {
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;

  if (password !== confirm_password) {
      event.preventDefault();
      let errorText = document.createElement('div');
      errorText.textContent = "Passwords don't match. Please try again.";
      errorText.classList.add("error");
      document.getElementById("signup-form").appendChild(errorText);
  }
});
document.addEventListener('DOMContentLoaded', function () {
  // Check if there is data in local storage
  if (!localStorage.getItem("username")) {
      // Redirect to a different HTML page
      window.location.replace("/Signup.html")
    }})
// Initial update of user status
updateUserStatus();





$('#recipeCarousel').carousel({ //carousel moves automatically
    interval: 500
  })
  
//   $('.carousel .carousel-item').each(function(){
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       for (var i=0;i<3;i++) {
//         next=next.next();
//         if (!next.length) {
//           next = $(this).siblings(':first');
//         }
  
//         next.children(':first-child').clone().appendTo($(this));
//       }
//   });