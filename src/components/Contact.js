export function renderContact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <div class="cardContainer">
              <lottie-player
                src="/animations/Hand tap.json"
                background="transparent"
                speed="1"
                style="width: 100px; height: 100px"
                loop autoplay
                class="card-lottie-animation">
              </lottie-player>
              <div class="profileDiv">
                <img src="/images/profile-photo.png" alt="SARAN V A - Full Stack MERN Developer" class="profile-image"/>
              </div>
              <div class="infoDiv">
                <div class="nameDiv">
                  <p class="name">SARAN V A</p>
                  <p class="role">Full Stack MERN Developer</p>
                </div>
                <div class="socialDiv">
                  <a href="https://github.com/SARAN006-pro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 496 512" class="socials github">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/SARAN-VA/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 448 512" class="socials linkdin">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                  </a>
                  <a href="mailto:saran006va@gmail.com" aria-label="Gmail">
                    <svg viewBox="0 0 512 512" class="socials gmail">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form class="contact-form" id="contact-form">
            <input type="text" name="from_name" placeholder="Your Name" required/>
            <input type="email" name="from_email" placeholder="Your Email" required/>
            <input type="text" name="subject" placeholder="Subject" required/>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" class="submit-button">
              <span class="button-text">Send Message</span>
              <span class="button-loading" style="display:none">
                <svg class="loading-spinner" viewBox="0 0 24 24">
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
    </section>

    <div id="success-toast" class="success-toast">
      <svg class="success-tick" viewBox="0 0 52 52">
        <circle class="success-tick-circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="success-tick-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
      <p class="success-message">Thanks! I'll get back to you soon.</p>
    </div>
  `;
}

export function initContactForm() {
  (function () {
    emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
  })();

  class ContactFormHandler {
    constructor() {
      this.form = document.getElementById("contact-form");
      this.submitButton = this.form.querySelector(".submit-button");
      this.buttonText = this.submitButton.querySelector(".button-text");
      this.buttonLoading = this.submitButton.querySelector(".button-loading");
      this.successToast = document.getElementById("success-toast");
      this.init();
    }

    init() {
      this.form.addEventListener("submit", this.handleSubmit.bind(this));
      this.form.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("blur", this.validateField.bind(this));
        field.addEventListener("input", this.clearErrors.bind(this));
      });
    }

    validateField(e) {
      const field = e.target;
      const value = field.value.trim();
      field.classList.remove("error");
      if (field.type === "email" && value) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          this.showFieldError(field, "Please enter a valid email address");
          return false;
        }
      }
      if (field.required && !value) {
        this.showFieldError(field, "This field is required");
        return false;
      }
      return true;
    }

    showFieldError(field, message) {
      field.classList.add("error");
      const existing = field.parentNode.querySelector(".field-error");
      if (existing) existing.remove();
      const errorDiv = document.createElement("div");
      errorDiv.className = "field-error";
      errorDiv.textContent = message;
      field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    clearErrors(e) {
      const field = e.target;
      field.classList.remove("error");
      const errorMsg = field.parentNode.querySelector(".field-error");
      if (errorMsg) errorMsg.remove();
    }

    async handleSubmit(e) {
      e.preventDefault();
      const fields = this.form.querySelectorAll("input, textarea");
      let isValid = true;
      fields.forEach(field => { if (!this.validateField({ target: field })) isValid = false; });
      if (!isValid) { this.showToast("Please fix the errors above", "error"); return; }
      this.setLoadingState(true);
      try {
        const result = await emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this.form);
        console.log("Email sent successfully:", result);
        this.showSuccessToast();
        this.form.reset();
        this.trackFormSubmission("success");
      } catch (error) {
        console.error("Email sending failed:", error);
        this.handleEmailError(error);
        this.trackFormSubmission("error", error.message);
      } finally {
        this.setLoadingState(false);
      }
    }

    async handleEmailError(error) {
      if (error.status === 400 || error.status === 401) {
        this.showToast("Configuration error. Please contact directly at saran006va@gmail.com", "error");
      } else {
        const formData = new FormData(this.form);
        const subject = encodeURIComponent(formData.get("subject") || "Contact from Portfolio");
        const body = encodeURIComponent(`Name: ${formData.get("from_name")}\nEmail: ${formData.get("from_email")}\n\nMessage:\n${formData.get("message")}`);
        const mailtoLink = `mailto:saran006va@gmail.com?subject=${subject}&body=${body}`;
        this.showToast("Having trouble sending? Click here to open your email client", "warning", () => { window.location.href = mailtoLink; });
      }
    }

    setLoadingState(loading) {
      this.submitButton.disabled = loading;
      if (loading) {
        this.buttonText.style.display = "none";
        this.buttonLoading.style.display = "flex";
        this.submitButton.classList.add("loading");
      } else {
        this.buttonText.style.display = "block";
        this.buttonLoading.style.display = "none";
        this.submitButton.classList.remove("loading");
      }
    }

    showSuccessToast() {
      this.successToast.classList.add("show");
      setTimeout(() => this.successToast.classList.remove("show"), 5000);
    }

    showToast(message, type = "info", clickHandler = null) {
      const toast = document.createElement("div");
      toast.className = `custom-toast ${type}`;
      toast.innerHTML = `<div class="toast-content"><span class="toast-message">${message}</span>${clickHandler ? '<button class="toast-action">Click here</button>' : ""}</div>`;
      document.body.appendChild(toast);
      if (clickHandler) toast.querySelector(".toast-action").addEventListener("click", clickHandler);
      setTimeout(() => toast.classList.add("show"), 100);
      setTimeout(() => { toast.classList.remove("show"); setTimeout(() => document.body.removeChild(toast), 300); }, 7000);
    }

    trackFormSubmission(status, error = null) {
      if (typeof gtag !== "undefined") {
        gtag("event", "form_submit", { event_category: "Contact", event_label: status, value: status === "success" ? 1 : 0 });
      }
      console.log(`Form submission ${status}`, error ? { error } : {});
    }
  }

  new ContactFormHandler();
}
