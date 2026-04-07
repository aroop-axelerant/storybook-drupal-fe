import "../../main.scss";

export default {
  title: "Components/Video",
  excludeStories: ["videoStyles", "buildCompactVideo"],
};

// =============================================================================
// Styles
// =============================================================================

// Builder — used by templates that embed a compact video
function buildCompactVideo({ id, poster, title, youtubeId }) {
  const embedSrc = `https://www.youtube.com/embed/${youtubeId}`;
  return `
  <div class="video video--compact" id="${id}">
    <div class="video__thumbnail">
      <img class="video__thumbnail-img" src="${poster}" alt="" aria-hidden="true">
      <button class="video__play" type="button" aria-label="Play video: ${title}">
        <span class="video__play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,4 20,12 6,20" fill="currentColor"/>
          </svg>
        </span>
      </button>
    </div>
    <div class="video__modal" role="dialog" aria-modal="true" aria-label="${title}" aria-hidden="true" hidden>
      <div class="video__modal-inner">
        <button class="video__modal-close" type="button" aria-label="Close video">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div class="video__embed-wrap">
          <iframe class="video__iframe" data-src="${embedSrc}" src="" title="${title}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <script>
    (function() {
      var el      = document.getElementById('${id}');
      var playBtn = el.querySelector('.video__play');
      var modal   = el.querySelector('.video__modal');
      var closeBtn= el.querySelector('.video__modal-close');
      var iframe  = el.querySelector('.video__iframe');
      var src     = iframe.dataset.src;
      function openModal() {
        iframe.src = src + '?autoplay=1&rel=0';
        modal.removeAttribute('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
      }
      function closeModal() {
        iframe.src = '';
        modal.setAttribute('hidden', '');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        playBtn.focus();
      }
      playBtn.addEventListener('click', openModal);
      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
      });
    })();
  </script>`;
}

// =============================================================================
// Helpers
// =============================================================================

const YOUTUBE_ID = 'DOp8mIYrgw8';
const EMBED_SRC  = `https://www.youtube.com/embed/${YOUTUBE_ID}`;

function statesTable(rows) {
  return `
    <table class="sb-table-el">
      <thead>
        <tr>
          <th>State</th>
          <th>Token</th>
          <th>Properties</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(([state, colorVar, token, props]) => `
          <tr>
            <td>${state}</td>
            <td>
              <span class="sb-table-el__swatch-cell">
                <span class="sb-table-el__swatch" style="background:${colorVar}"></span>
                <code class="sb-table-el__token">${token}</code>
              </span>
            </td>
            <td>${props}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function section(title, content) {
  return `
    <div class="sb-section">
      <h3 class="sb-section-title">${title}</h3>
      ${content}
    </div>`;
}

// =============================================================================
// STORY
// =============================================================================

export const videoStyles = '';
export { buildCompactVideo };

export const Default = () => `
  <div class="sb-canvas">
    <div class="sb-canvas__inner" style="max-width:960px;">

      ${section('Live example — click play to open video', `
        <div class="video" id="video-demo">
          <div class="video__thumbnail">
            <img
              class="video__thumbnail-img"
              src="/images/TV%20studio.jpg"
              alt=""
              aria-hidden="true"
            >
            <button
              class="video__play"
              type="button"
              aria-label="Play video: A Message From Our Vice-Chancellor"
            >
              <span class="video__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="6,4 20,12 6,20" fill="currentColor"/>
                </svg>
              </span>
            </button>
            <div class="video__caption">
              <p class="video__title">Video title goes here</p>
              <p class="video__attribution">Video summary / attribution goes here</p>
            </div>
          </div>

          <div
            class="video__modal"
            role="dialog"
            aria-modal="true"
            aria-label="A Message From Our Vice-Chancellor"
            aria-hidden="true"
            hidden
          >
            <div class="video__modal-inner">
              <button class="video__modal-close" type="button" aria-label="Close video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div class="video__embed-wrap">
                <iframe
                  class="video__iframe"
                  data-src="${EMBED_SRC}"
                  src=""
                  title="A Message From Our Vice-Chancellor"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <script>
          (function() {
            var el      = document.getElementById('video-demo');
            var playBtn = el.querySelector('.video__play');
            var modal   = el.querySelector('.video__modal');
            var closeBtn= el.querySelector('.video__modal-close');
            var iframe  = el.querySelector('.video__iframe');
            var src     = iframe.dataset.src;

            function openModal() {
              iframe.src = src + '?autoplay=1&rel=0';
              modal.removeAttribute('hidden');
              modal.setAttribute('aria-hidden', 'false');
              document.body.style.overflow = 'hidden';
              closeBtn.focus();
            }

            function closeModal() {
              iframe.src = '';
              modal.setAttribute('hidden', '');
              modal.setAttribute('aria-hidden', 'true');
              document.body.style.overflow = '';
              playBtn.focus();
            }

            playBtn.addEventListener('click', openModal);
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
            });
          })();
        </script>
      `)}

      ${section('Play button states', `
        <div class="sb-states-row">

          <div class="sb-state-item">
            <div class="sb-preview-swatch">
              <button class="video__play" type="button" aria-label="Play (default state)" style="pointer-events:none;">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span class="sb-state-caption">Default</span>
          </div>

          <div class="sb-state-item">
            <div class="sb-preview-swatch">
              <button class="video__play" type="button" aria-label="Play (hover state)" style="pointer-events:none; transform:scale(1.08); box-shadow:0 var(--sp-8) var(--sp-32) rgba(0,0,0,0.5);">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span class="sb-state-caption">Hover</span>
          </div>

          <div class="sb-state-item">
            <div class="sb-preview-swatch">
              <button class="video__play" type="button" aria-label="Play (focus state)" style="pointer-events:none; outline:2px solid var(--color-powdered-blue); outline-offset:4px;">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span class="sb-state-caption">Focus</span>
          </div>

          <div class="sb-state-item">
            <div class="sb-preview-swatch">
              <button class="video__play" type="button" aria-label="Play (pressed state)" style="pointer-events:none; transform:scale(0.98);">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span class="sb-state-caption">Pressed</span>
          </div>

        </div>
      `)}

      ${section('Colour & property tokens', statesTable([
        ['Thumbnail bg',    'var(--color-charcoal-90)',    '--color-charcoal-90',    'linear-gradient(135deg, charcoal-90 → #0d2b27) · aspect-ratio: 16/9 · border-radius: var(--radius-m)'],
        ['Bottom scrim',    'var(--color-charcoal)',       '--color-charcoal',       'linear-gradient to top · rgba(11,25,26,0.7) → transparent · improves caption legibility'],
        ['Play button',     'var(--color-white)',          '--color-white',          'bg: white · 64×64px · border-radius: 50% · box-shadow: 0 sp-4 sp-24 rgba(0,0,0,0.4)'],
        ['Play icon',       'var(--color-charcoal-90)',    '--color-charcoal-90',    'SVG polygon · 24×24px · translateX(2px) optical centering'],
        ['Play hover',      'var(--color-white)',          '--color-white',          'transform: scale(1.08) · enhanced box-shadow · transition: var(--duration-fast) var(--ease-out)'],
        ['Play focus',      'var(--color-powdered-blue)',  '--color-powdered-blue',  'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
        ['Play press',      'var(--color-white)',          '--color-white',          'transform: scale(0.98) · var(--duration-fast) var(--ease-out)'],
        ['Video title',     'var(--color-white)',          '--color-white',          'font-serif · clamp(1.25rem, 2.5vw, 1.75rem) · fw-regular · bottom-left caption'],
        ['Attribution',     'rgba(255,255,255,0.6)',       'white at 60% opacity',   'font-sans · 0.875rem · fw-regular'],
        ['Modal overlay',   'var(--color-charcoal)',       '--opacity-strong',       'rgba(11,25,26,0.72) · position:fixed · inset:0 · z-index:9000'],
        ['Close button',    'var(--color-white)',          '--color-white',          'rgba(white,0.15) bg · 40×40px circle · border: rgba(white,0.2) · top-right of modal'],
        ['Close focus',     'var(--color-powdered-blue)',  '--color-powdered-blue',  'outline: 2px solid --color-powdered-blue · outline-offset: 4px'],
        ['Embed',           'var(--color-charcoal)',       '--color-charcoal',       'aspect-ratio: 16/9 · max-width: 960px · border-radius: var(--radius-m) · YouTube autoplay on open'],
      ]))}

    </div>
  </div>
`;

export const Compact = () => `
  <div class="sb-canvas">
    <div class="sb-canvas__inner" style="max-width:960px;">

      ${section('Live example — compact variant (fixed 350px, no caption)', `
        <div class="video video--compact" id="video-compact">
          <div class="video__thumbnail">
            <img
              class="video__thumbnail-img"
              src="/images/TV%20studio.jpg"
              alt=""
              aria-hidden="true"
            >
            <button
              class="video__play"
              type="button"
              aria-label="Play video"
            >
              <span class="video__play-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="6,4 20,12 6,20" fill="currentColor"/>
                </svg>
              </span>
            </button>
          </div>

          <div
            class="video__modal"
            role="dialog"
            aria-modal="true"
            aria-label="Video"
            aria-hidden="true"
            hidden
          >
            <div class="video__modal-inner">
              <button class="video__modal-close" type="button" aria-label="Close video">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div class="video__embed-wrap">
                <iframe
                  class="video__iframe"
                  data-src="${EMBED_SRC}"
                  src=""
                  title="Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <script>
          (function() {
            var el      = document.getElementById('video-compact');
            var playBtn = el.querySelector('.video__play');
            var modal   = el.querySelector('.video__modal');
            var closeBtn= el.querySelector('.video__modal-close');
            var iframe  = el.querySelector('.video__iframe');
            var src     = iframe.dataset.src;

            function openModal() {
              iframe.src = src + '?autoplay=1&rel=0';
              modal.removeAttribute('hidden');
              modal.setAttribute('aria-hidden', 'false');
              document.body.style.overflow = 'hidden';
              closeBtn.focus();
            }

            function closeModal() {
              iframe.src = '';
              modal.setAttribute('hidden', '');
              modal.setAttribute('aria-hidden', 'true');
              document.body.style.overflow = '';
              playBtn.focus();
            }

            playBtn.addEventListener('click', openModal);
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
            document.addEventListener('keydown', function(e) {
              if (e.key === 'Escape' && !modal.hasAttribute('hidden')) closeModal();
            });
          })();
        </script>
      `)}

    </div>
  </div>
`;
