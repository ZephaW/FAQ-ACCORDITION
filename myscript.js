document.addEventListener('DOMContentLoaded', () => {
    const plusIcons = document.querySelectorAll('.question img');
  
    plusIcons.forEach(icon => {
      icon.addEventListener('click', function() {
        const pTag = this.parentNode.nextElementSibling;
        const isHidden = pTag.style.display === "none";
  
        pTag.style.display = isHidden ? "block" : "none";
        this.src = isHidden ? "./assets/images/icon-plus.svg" : "./assets/images/icon-minus.svg";
      });
    });
  });