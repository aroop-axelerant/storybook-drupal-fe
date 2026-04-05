import "../../../scss/main.scss";

export default {
  title: "Components/Video",
  excludeStories: ["videoStyles", "buildCompactVideo"],
};

// =============================================================================
// Styles
// =============================================================================

export { styles as videoStyles, buildCompactVideo };

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

const styles = `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Thumbnail container ─────────────────────────────────────────────── */
  .video {
    position: relative;
    width: 100%;
  }

  .video__thumbnail {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: linear-gradient(135deg, var(--color-charcoal-90) 0%, #0d2b27 100%);
    border-radius: var(--radius-m);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video__thumbnail-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
  }

  /* ── Play button ─────────────────────────────────────────────────────── */
  .video__play {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: var(--color-white);
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    transition:
      transform    var(--duration-fast) var(--ease-out),
      box-shadow   var(--duration-fast) var(--ease-out),
      background   var(--duration-fast) var(--ease-out);
    outline: none;
    box-shadow: 0 var(--sp-4) var(--sp-24) rgba(0, 0, 0, 0.4);
  }

  .video__play:hover {
    transform: scale(1.08);
    box-shadow: 0 var(--sp-8) var(--sp-32) rgba(0, 0, 0, 0.5);
  }

  .video__play:active {
    transform: scale(0.98);
  }

  .video__play:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  .video__play-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    color: var(--color-charcoal-90);
    /* Optical offset: nudge right so triangle appears visually centred */
    transform: translateX(2px);
  }

  .video__play-icon svg {
    width: 100%;
    height: 100%;
  }

  /* ── Caption — bottom-left ───────────────────────────────────────────── */
  .video__caption {
    position: absolute;
    bottom: var(--sp-32);
    left: var(--sp-32);
    right: var(--sp-32);
    z-index: 1;
    /* Subtle gradient so text is legible over any thumbnail */
  }

  .video__title {
    font-family: var(--font-serif);
    font-size: clamp(1.25rem, 2.5vw, 1.75rem);
    font-weight: 400;
    line-height: 1.2;
    color: var(--color-white);
    margin-bottom: var(--sp-8);
  }

  .video__attribution {
    font-family: var(--font-sans);
    font-size: 0.875rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.6);
    line-height: 1.4;
  }

  /* ── Bottom scrim — improves caption legibility ──────────────────────── */
  .video__thumbnail::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(11, 25, 26, 0.90) 0%,
      rgba(11, 25, 26, 0.60) 30%,
      rgba(11, 25, 26, 0.0)  65%
    );
    border-radius: inherit;
    pointer-events: none;
  }

  /* ── Compact variant — fixed 350px height, no caption ───────────────── */
  .video--compact .video__thumbnail {
    aspect-ratio: unset;
    height: 350px;
  }

  @media (max-width: 767px) {
    .video--compact .video__thumbnail {
      height: auto;
      aspect-ratio: 16 / 9;
    }
  }

  /* ── Modal overlay ───────────────────────────────────────────────────── */
  .video__modal {
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(11, 25, 26, var(--opacity-strong, 0.72));
    padding: var(--sp-32);
    animation: modal-fade-in var(--duration) var(--ease-out) forwards;
  }

  .video__modal[hidden] {
    display: none;
  }

  @keyframes modal-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Modal inner ─────────────────────────────────────────────────────── */
  .video__modal-inner {
    position: relative;
    width: 100%;
    max-width: 960px;
    animation: modal-scale-in var(--duration) var(--ease-out) forwards;
  }

  @keyframes modal-scale-in {
    from { transform: scale(0.96); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
  }

  /* ── Close button ────────────────────────────────────────────────────── */
  .video__modal-close {
    position: absolute;
    top: calc(-1 * var(--sp-48));
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: var(--color-white);
    cursor: pointer;
    transition:
      background  var(--duration-fast) var(--ease-out),
      transform   var(--duration-fast) var(--ease-out);
    outline: none;
  }

  .video__modal-close:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  .video__modal-close:active {
    transform: scale(0.95);
  }

  .video__modal-close:focus-visible {
    outline: 2px solid var(--color-powdered-blue);
    outline-offset: 4px;
  }

  /* ── YouTube embed ───────────────────────────────────────────────────── */
  .video__embed-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-m);
    overflow: hidden;
    background: var(--color-charcoal);
  }

  .video__iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>`;

// =============================================================================
// Helpers
// =============================================================================

const YOUTUBE_ID = 'DOp8mIYrgw8';
const EMBED_SRC  = `https://www.youtube.com/embed/${YOUTUBE_ID}`;

function statesTable(rows) {
  return `
    <table style="width:100%; border-collapse:collapse; background:var(--color-white); border-radius:var(--radius-s); overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08);">
      <thead>
        <tr style="background:var(--color-charcoal-10);">
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">State</th>
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">Token</th>
          <th style="padding:var(--sp-8) var(--sp-16); text-align:left; font-family:var(--font-sans); font-size:0.75rem; font-weight:600; color:var(--color-charcoal-60); text-transform:uppercase; letter-spacing:0.06em;">Properties</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(([state, colorVar, token, props]) => `
          <tr>
            <td style="padding:var(--sp-12) var(--sp-16); font-family:var(--font-sans); font-size:0.875rem; font-weight:600; color:var(--color-charcoal-90); border-bottom:1px solid var(--color-charcoal-10);">${state}</td>
            <td style="padding:var(--sp-12) var(--sp-16); border-bottom:1px solid var(--color-charcoal-10);">
              <span style="display:inline-flex; align-items:center; gap:var(--sp-8);">
                <span style="display:inline-block; width:14px; height:14px; border-radius:3px; background:${colorVar}; border:1px solid rgba(0,0,0,0.1); flex-shrink:0;"></span>
                <code style="font-size:0.75rem; color:var(--color-charcoal-60);">${token}</code>
              </span>
            </td>
            <td style="padding:var(--sp-12) var(--sp-16); font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60); border-bottom:1px solid var(--color-charcoal-10); line-height:1.5;">${props}</td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

function section(title, content) {
  return `
    <div style="margin-bottom:var(--sp-48);">
      <h3 style="font-family:var(--font-sans); font-size:0.6875rem; font-weight:600; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-charcoal-40); margin-bottom:var(--sp-16);">${title}</h3>
      ${content}
    </div>`;
}

// =============================================================================
// STORY
// =============================================================================

export const Default = () => `
  ${styles}

  <div style="padding:var(--sp-32); background:var(--color-off-white); min-height:100vh;">
    <div style="max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:var(--sp-48);">

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
        <div style="display:flex; align-items:center; gap:var(--sp-32); flex-wrap:wrap;">

          <div style="display:flex; flex-direction:column; align-items:center; gap:var(--sp-12);">
            <div style="width:80px; height:80px; background:var(--color-charcoal-90); border-radius:var(--radius-s); display:flex; align-items:center; justify-content:center;">
              <button class="video__play" type="button" aria-label="Play (default state)" style="pointer-events:none;">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span style="font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60);">Default</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center; gap:var(--sp-12);">
            <div style="width:80px; height:80px; background:var(--color-charcoal-90); border-radius:var(--radius-s); display:flex; align-items:center; justify-content:center;">
              <button class="video__play" type="button" aria-label="Play (hover state)" style="pointer-events:none; transform:scale(1.08); box-shadow:0 var(--sp-8) var(--sp-32) rgba(0,0,0,0.5);">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span style="font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60);">Hover</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center; gap:var(--sp-12);">
            <div style="width:80px; height:80px; background:var(--color-charcoal-90); border-radius:var(--radius-s); display:flex; align-items:center; justify-content:center;">
              <button class="video__play" type="button" aria-label="Play (focus state)" style="pointer-events:none; outline:2px solid var(--color-powdered-blue); outline-offset:4px;">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span style="font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60);">Focus</span>
          </div>

          <div style="display:flex; flex-direction:column; align-items:center; gap:var(--sp-12);">
            <div style="width:80px; height:80px; background:var(--color-charcoal-90); border-radius:var(--radius-s); display:flex; align-items:center; justify-content:center;">
              <button class="video__play" type="button" aria-label="Play (pressed state)" style="pointer-events:none; transform:scale(0.98);">
                <span class="video__play-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" fill="currentColor"/></svg>
                </span>
              </button>
            </div>
            <span style="font-family:var(--font-sans); font-size:0.75rem; color:var(--color-charcoal-60);">Pressed</span>
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
  ${styles}

  <div style="padding:var(--sp-32); background:var(--color-off-white); min-height:100vh;">
    <div style="max-width:960px; margin:0 auto; display:flex; flex-direction:column; gap:var(--sp-48);">

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
