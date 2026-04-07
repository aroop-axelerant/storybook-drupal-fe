import "../../main.scss";
import data from "./video-carousel.json";
import { buildVideoCard } from "../card/card.stories.js";

// =============================================================================
// Icons
// =============================================================================

const iconPrev = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`;
const iconNext = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`;

// =============================================================================
// Styles
// =============================================================================


// =============================================================================
// Builder
// =============================================================================

function buildVideoCarousel(cards, id) {
  const slides = cards.map((card, i) => `
    <div class="carousel__slide" data-index="${i}">
      ${buildVideoCard(card, i)}
    </div>`).join("");

  const dots = cards.map((_, i) => `
    <button class="carousel__dot${i === 0 ? " is-active" : ""}" data-index="${i}" aria-label="Go to slide ${i + 1}"></button>`
  ).join("");

  const total = cards.length;

  return `
  <div class="video-carousel" id="${id}">
    <div class="carousel__track-wrap">
      <div class="carousel__track" id="${id}-track">
        ${slides}
      </div>
    </div>
    <div class="carousel__controls">
      <div class="carousel__dots" role="tablist" aria-label="Carousel navigation">${dots}</div>
      <div class="carousel__controls-arrows">
        <button class="carousel__btn" id="${id}-prev" aria-label="Previous slide">${iconPrev}</button>
        <button class="carousel__btn" id="${id}-next" aria-label="Next slide">${iconNext}</button>
      </div>
    </div>
  </div>
  <script>
  (function () {
    var carousel = document.getElementById('${id}');
    var track    = document.getElementById('${id}-track');
    var prevBtn  = document.getElementById('${id}-prev');
    var nextBtn  = document.getElementById('${id}-next');
    if (!track || !prevBtn || !nextBtn) return;

    var total     = ${total};
    var current   = 0;
    var slides    = Array.from(track.querySelectorAll('.carousel__slide'));
    var dots      = Array.from(carousel.querySelectorAll('.carousel__dot'));
    var autoTimer = null;

    // Coverflow size ratios (relative to container width / center card height)
    var SIZE = {
      0: { wR: 0.267, hR: 1.000, op: 1.00, br: 1.00, z: 5 },
      1: { wR: 0.200, hR: 0.750, op: 0.90, br: 0.88, z: 3 },
      2: { wR: 0.167, hR: 0.625, op: 0.62, br: 0.70, z: 1 },
    };

    function layout() {
      var wrap    = track.parentElement;
      var W       = wrap.offsetWidth;
      var H       = wrap.offsetHeight;
      var isMobile = W <= 767;

      var cardW, gap, posLeft, sizeMap;

      if (isMobile) {
        // Peek layout: active card ~82%, next card peeks ~14%
        cardW = W * 0.82;
        gap   = W * 0.04;
        posLeft = {
           '0':  gap,
           '1':  gap + cardW + gap,
          '-1':  -(cardW + gap),
           '2':  gap + (cardW + gap) * 2,
          '-2':  -(cardW + gap) * 2,
        };
        sizeMap = {
          0: { wR: 0.82, hR: 1.00, op: 1.00, br: 1.00, z: 5 },
          1: { wR: 0.82, hR: 1.00, op: 1.00, br: 1.00, z: 3 },
          2: { wR: 0.82, hR: 1.00, op: 0.00, br: 1.00, z: 1 },
        };
      } else {
        var cW  = W * SIZE[0].wR;
        var nW  = W * SIZE[1].wR;
        var fW  = W * SIZE[2].wR;
        gap     = W * 0.015;
        var cL  = (W - cW) / 2;
        posLeft = {
           '0':  cL,
           '1':  cL + cW + gap,
          '-1':  cL - nW - gap,
           '2':  cL + cW + nW + gap * 2,
          '-2':  cL - nW - fW - gap * 2,
        };
        sizeMap = SIZE;
      }

      slides.forEach(function (slide, i) {
        var rawPos = i - current;
        var pos    = rawPos;
        if (pos >  total / 2) pos -= total;
        if (pos < -(total / 2)) pos += total;
        var absPos = Math.abs(pos);
        var key    = String(pos);
        var s      = sizeMap[Math.min(absPos, 2)];
        var left   = posLeft[key] !== undefined ? posLeft[key]
                   : pos > 0 ? W + cardW : -(cardW * 2);

        slide.style.left          = left + 'px';
        slide.style.width         = (W * s.wR) + 'px';
        slide.style.height        = (H * s.hR) + 'px';
        slide.style.opacity       = absPos > 2 ? '0' : String(s.op);
        slide.style.filter        = s.br < 1 ? 'brightness(' + s.br + ')' : 'none';
        slide.style.zIndex        = absPos > 2 ? '0' : String(s.z);
        slide.style.pointerEvents = absPos > 2 ? 'none' : '';
      });
    }

    function updateVideo(prevIdx, nextIdx) {
      var pSlide = slides[((prevIdx % total) + total) % total];
      if (pSlide && prevIdx >= 0) {
        var pVid = pSlide.querySelector('.card__video');
        var pBtn = pSlide.querySelector('.card__mute-btn');
        if (pVid) { pVid.pause(); pVid.muted = true; }
        if (pBtn) {
          pBtn.dataset.muted = 'true';
          pBtn.setAttribute('aria-label', 'Muted — click to unmute');
          pBtn.setAttribute('aria-pressed', 'true');
        }
      }
      var nSlide = slides[((nextIdx % total) + total) % total];
      if (nSlide) {
        var nVid = nSlide.querySelector('.card__video');
        var nBtn = nSlide.querySelector('.card__mute-btn');
        if (nVid) { nVid.muted = false; nVid.play().catch(function () {}); }
        if (nBtn) {
          nBtn.dataset.muted = 'false';
          nBtn.setAttribute('aria-label', 'Unmuted — click to mute');
          nBtn.setAttribute('aria-pressed', 'false');
        }
      }
    }

    function goTo(index) {
      var prev = current;
      current  = ((index % total) + total) % total;
      layout();
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
      updateVideo(prev, current);
    }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(function () { goTo(current + 1); }, 5000);
    }

    function stopAuto() {
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); stopAuto(); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); stopAuto(); });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { goTo(i); stopAuto(); });
    });

    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    window.addEventListener('resize', layout);

    layout();
    updateVideo(-1, 0);
    startAuto();
  })();
  </script>`;
}

// =============================================================================
// Render (standalone story)
// =============================================================================

const render = ({ id, cards }) => `
<div class="sb-canvas" style="padding-block: var(--sp-64); padding-inline: 0;">
  <div style="max-width: var(--grid-max); margin-inline: auto; padding-inline: var(--grid-gutter);">
    ${buildVideoCarousel(cards, id)}
  </div>
</div>`;

// =============================================================================
// Story
// =============================================================================

export default {
  title: "Components/Carousel",
  render,
  excludeStories: ["videoCarouselStyles", "buildVideoCarousel"],
};

export const Rotator = { args: data.default };

export const videoCarouselStyles = '';
export { buildVideoCarousel };
