/* ==========================================================================
   MAHMOUD HACHEM - SOFTWARE ARCHITECTURE & ENTERPRISE CONSULTANT
   Interactive Site Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Management (Dark / Light Mode)
  initThemeToggle();

  // 2. Navigation & Scroll State
  initNavigation();

  // 3. Architecture Blueprint Explorer
  initBlueprintTabs();

  // 4. Contact & Inquiry Handler
  initContactInquiry();

  // 5. Email Copy Toast
  initCopyEmail();

  // 6. Section Intersection Observer for Nav Highlighting
  initActiveNavSpy();
});

/* --------------------------------------------------------------------------
   1. Theme Management
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  if (!sunIcon || !moonIcon) return;

  if (theme === 'light') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

/* --------------------------------------------------------------------------
   2. Navigation & Scroll Header
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Header scroll class
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   3. Architecture Blueprint Explorer
   -------------------------------------------------------------------------- */
function initBlueprintTabs() {
  const tabButtons = document.querySelectorAll('.blueprint-tab-btn');
  const tabContents = document.querySelectorAll('.blueprint-tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.getAttribute('data-tab');

      // Update active button state
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Update active content
      tabContents.forEach(content => {
        if (content.id === `tab-${targetTab}`) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. Contact & Interactive Inquiry Builder
   -------------------------------------------------------------------------- */
function initContactInquiry() {
  const inquiryForm = document.getElementById('inquiry-form');
  if (!inquiryForm) return;

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('inq-name').value.trim();
    const company = document.getElementById('inq-company').value.trim() || 'Not specified';
    const service = document.getElementById('inq-service').value;
    const message = document.getElementById('inq-message').value.trim();

    const subject = encodeURIComponent(`[Architecture Advisory Inquiry] ${service} - ${name} (${company})`);
    const body = encodeURIComponent(
      `Hi Mahmoud,\n\nI would like to discuss an advisory/consulting engagement regarding: ${service}.\n\n` +
      `Details / Context:\n${message}\n\n` +
      `Best regards,\n${name}\nCompany: ${company}`
    );

    const mailtoUrl = `mailto:mahmoudhachem.d@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    showToast("Launching your email client with pre-filled advisory inquiry...");
  });
}

/* --------------------------------------------------------------------------
   5. Email Copy Toast
   -------------------------------------------------------------------------- */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  const emailToCopy = 'mahmoudhachem.d@gmail.com';

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(emailToCopy);
        showToast("Email address copied to clipboard: " + emailToCopy);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = emailToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast("Email address copied to clipboard: " + emailToCopy);
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --------------------------------------------------------------------------
   6. Active Nav Scrollspy
   -------------------------------------------------------------------------- */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersectObserver && entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-30% 0px -70% 0px' });

  sections.forEach(section => observer.observe(section));
}
