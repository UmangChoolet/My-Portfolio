//For smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      const offset = document.querySelector('nav').offsetHeight; // Adjust for navbar height
      const position = targetElement.offsetTop - offset;
  
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    });
  });
  