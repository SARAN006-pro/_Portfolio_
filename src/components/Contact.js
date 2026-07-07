import emailjs from '@emailjs/browser';

const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const linkedinIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

export function renderContact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">Get In Touch</h2>
          <p class="section-subtitle">Interested in working together? Let's connect.</p>
        </header>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-card">
              <div class="contact-avatar">
                <img src="/images/profile-photo.png" alt="SARAN V A"/>
              </div>
              <h3 class="contact-name">SARAN V A</h3>
              <p class="contact-role">Full Stack Java Developer</p>

              <div class="contact-links">
                <a href="https://github.com/SARAN006-pro" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="GitHub">
                  ${githubIcon}
                </a>
                <a href="https://www.linkedin.com/in/SARAN-VA/" target="_blank" rel="noopener noreferrer" class="contact-link" aria-label="LinkedIn">
                  ${linkedinIcon}
                </a>
                <a href="mailto:saran006va@gmail.com" class="contact-link" aria-label="Email">
                  ${emailIcon}
                </a>
              </div>
            </div>
          </div>

          <form class="contact-form" id="contact-form">
            <div class="form-group">
              <label for="from_name" class="form-label">Name</label>
              <input type="text" id="from_name" name="from_name" class="form-input" placeholder="Your name" required/>
            </div>

            <div class="form-group">
              <label for="from_email" class="form-label">Email</label>
              <input type="email" id="from_email" name="from_email" class="form-input" placeholder="your@email.com" required/>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" name="subject" class="form-input" placeholder="What's this about?" required/>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" name="message" class="form-input form-textarea" placeholder="Your message..." rows="5" required></textarea>
            </div>

            <button type="submit" class="submit-btn">
              <span class="btn-text">Send Message</span>
              <span class="btn-loading" style="display:none">
                <svg class="spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="31.416" stroke-dashoffset="31.416">
                    <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                    <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                  </circle>
                </svg>
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>

      <div id="success-toast" class="toast">
        <svg class="toast-icon" viewBox="0 0 52 52">
          <circle class="toast-circle" cx="26" cy="26" r="25" fill="none"/>
          <path class="toast-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
        <p class="toast-message">Message sent successfully!</p>
      </div>
    </section>
  `;
}

export function initContactForm() {
  const SERVICE_ID = 'service_hjy3nq9';
  const TEMPLATE_ID = 'template_b85pnte';
  const PUBLIC_KEY = 'CayVo9gsnhKi96tad';

  emailjs.init({ publicKey: PUBLIC_KEY });

  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.submit-btn');
  const buttonText = submitBtn.querySelector('.btn-text');
  const buttonLoading = submitBtn.querySelector('.btn-loading');
  const successToast = document.getElementById('success-toast');

  function validateField(field) {
    const value = field.value.trim();
    clearFieldError(field);

    if (field.required && !value) {
      showFieldError(field, 'This field is required');
      return false;
    }
    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showFieldError(field, 'Please enter a valid email');
      return false;
    }
    return true;
  }

  function showFieldError(field, message) {
    field.classList.add('error');
    const existing = field.parentNode.querySelector('.field-error');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'field-error';
    div.textContent = message;
    field.insertAdjacentElement('afterend', div);
  }

  function clearFieldError(field) {
    field.classList.remove('error');
    const err = field.parentNode.querySelector('.field-error');
    if (err) err.remove();
  }

  function setLoading(on) {
    submitBtn.disabled = on;
    buttonText.style.display = on ? 'none' : 'flex';
    buttonLoading.style.display = on ? 'flex' : 'none';
  }

  function showSuccessToast() {
    successToast.classList.add('show');
    setTimeout(() => successToast.classList.remove('show'), 4000);
  }

  function fallbackMailto() {
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject') || 'Contact from Portfolio');
    const body = encodeURIComponent(`Name: ${data.get('from_name')}\nEmail: ${data.get('from_email')}\n\nMessage:\n${data.get('message')}`);
    window.location.href = `mailto:saran006va@gmail.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const fields = [...form.querySelectorAll('input, textarea')];
    const allValid = fields.map(validateField).every(Boolean);
    if (!allValid) return;

    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);
      showSuccessToast();
      form.reset();
    } catch (err) {
      console.error('Email error:', err);
      fallbackMailto();
    } finally {
      setLoading(false);
    }
  }

  form.addEventListener('submit', handleSubmit);

  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => clearFieldError(field));
  });
}