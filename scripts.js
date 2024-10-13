document.getElementById('toggleInfoBtn').addEventListener('click', function() {
    var additionalInfo = document.getElementById('additionalInfo');
    if (additionalInfo.style.display === 'none') {
        additionalInfo.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        additionalInfo.style.display = 'none';
        this.textContent = 'Show More';
    }
  });
  
  