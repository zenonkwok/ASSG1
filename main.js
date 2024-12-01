document.addEventListener('DOMContentLoaded', () => {
  //fade in effect//
  setTimeout(() => {
      document.body.classList.add('fade-in');
  }, 80);

  //Scroll to top button//
  const scrollButton = document.querySelector('.scrollbtn');

  if (scrollButton) {
      scrollButton.addEventListener('click', () => {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });

      window.addEventListener('scroll', () => {
          if (window.scrollY > 300) {
              scrollButton.classList.add('visible');
          } else {
              scrollButton.classList.remove('visible');
          }
      });
  } else {
      console.error('Scroll button not found');
  }

  //Page transition script//
  const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = href;
            }, 800);
        });
    });
});
