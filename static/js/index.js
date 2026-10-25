// Copy citations when served over HTTPS/localhost, with a file-preview fallback.
async function copyBibTeX() {
  const citation = document.getElementById('bibtex-code');
  const button = document.querySelector('.copy-bibtex-btn');
  if (!citation || !button) return;

  const label = button.querySelector('.copy-text');
  let copied = false;
  try {
    await navigator.clipboard.writeText(citation.textContent);
    copied = true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = citation.textContent;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      copied = document.execCommand('copy');
    } finally {
      textarea.remove();
      button.focus({ preventScroll: true });
    }
  }

  button.classList.toggle('copied', copied);
  label.textContent = copied ? 'Copied!' : 'Select and copy';
  if (!copied) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(citation);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  window.clearTimeout(button.copyResetTimer);
  button.copyResetTimer = window.setTimeout(() => {
    button.classList.remove('copied');
    label.textContent = 'Copy';
  }, 2000);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
  });
}

function updateScrollButton() {
  const button = document.querySelector('.scroll-to-top');
  if (button) button.classList.toggle('visible', window.scrollY > 300);
}
window.addEventListener('scroll', updateScrollButton, { passive: true });
updateScrollButton();
