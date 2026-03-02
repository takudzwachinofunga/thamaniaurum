// Navigation and common components
document.addEventListener('DOMContentLoaded', function() {
  // Highlight active navigation link
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll('.nav-links a');
  
  menuItems.forEach(item => {
    let href = item.getAttribute('href');
    
    if (currentLocation.includes(href) || (currentLocation === '/' && href === '../index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Form validation for contact form
function validateContactForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const investorCheck = document.getElementById('investor').checked;
  const partnerCheck = document.getElementById('partner').checked;
  
  let errors = [];
  
  if (!name) errors.push('Name is required');
  if (!email || !isValidEmail(email)) errors.push('Valid email is required');
  if (!phone) errors.push('Phone number is required');
  if (!subject) errors.push('Subject is required');
  if (!message) errors.push('Message is required');
  if (!investorCheck && !partnerCheck) errors.push('Please select at least one category');
  
  if (errors.length > 0) {
    alert('Please fix the following errors:\n\n' + errors.join('\n'));
    return false;
  }
  
  // Form is valid - would send to backend in production
  alert('Thank you for your inquiry! We will contact you shortly.');
  document.getElementById('contactForm').reset();
  return false;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
