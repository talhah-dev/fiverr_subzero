const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-[76px] md:h-22 items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
       <img src="/docs/assets/logo.png" class="h-12" alt="logo">
      </a>

      <div class="hidden lg:flex items-center gap-7">
        <a href="index.html" class="text-sm font-semibold text-[#0B3C5D] hover:text-[#4CAF50] transition">Home</a>
        <a href="about.html" class="text-sm font-semibold text-[#0B3C5D] hover:text-[#4CAF50] transition">About</a>

        <div class="relative">
          <button
            type="button"
            id="servicesTrigger"
            class="inline-flex items-center gap-2 cursor-pointer text-sm font-semibold text-[#0B3C5D] hover:text-[#4CAF50] transition focus:outline-none"
            aria-expanded="false"
          >
            Services
            <i id="servicesChevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>

          <div
            id="servicesDropdown"
            class="absolute left-0 top-[56px] w-[360px] opacity-0 -translate-y-2 pointer-events-none transition-all duration-200"
            aria-hidden="true"
          >
            <div class="rounded-3xl border border-slate-200 bg-white shadow-xl p-4">
              <div class="grid gap-2">
                <a href="mold-removal.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Mold Removal</p>
                  <p class="text-xs text-slate-500">Safe removal & containment</p>
                </a>

                <a href="mold-remeditation.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Mold Remediation</p>
                  <p class="text-xs text-slate-500">Root cause + prevention plan</p>
                </a>

                <a href="mold-restoration.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Mold Restoration</p>
                  <p class="text-xs text-slate-500">Rebuild and finish affected areas</p>
                </a>

                <a href="commercial-mold-removal.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Commercial Mold Removal</p>
                  <p class="text-xs text-slate-500">Minimize downtime for businesses</p>
                </a>

                <a href="commercial-mold-remeditation.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Commercial Mold Remediation</p>
                  <p class="text-xs text-slate-500">Containment-first commercial workflow</p>
                </a>

                <a href="mold-inspection.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Mold Inspection</p>
                  <p class="text-xs text-slate-500">Scope and source identification</p>
                </a>

                <a href="mold-damage.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <p class="text-sm font-semibold text-[#0B3C5D]">Mold Damage</p>
                  <p class="text-xs text-slate-500">Stop spread early and restore</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="contact-us.html" class="text-sm font-semibold text-[#0B3C5D] hover:text-[#4CAF50] transition">Contact</a>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <a
          href="tel:414-383-3131"
          class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#0B3C5D] hover:bg-slate-50 transition"
        >
          <i class="fa-solid fa-phone text-[#4CAF50]"></i>
          414-383-3131
        </a>

        <a
          href="contact-us.html"
          class="inline-flex items-center gap-2 rounded-2xl bg-[#4CAF50] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:brightness-110 transition"
        >
          <i class="fa-solid fa-paper-plane"></i>
          Get Help
        </a>
      </div>

      <button
        id="mobileOpen"
        class="lg:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white h-11 w-11 hover:bg-slate-50 transition"
        type="button"
        aria-label="Open menu"
      >
        <i class="fa-solid fa-bars text-[#0B3C5D]"></i>
      </button>
    </div>
  </div>

  <div id="mobileOverlay" class="fixed inset-0 z-50 hidden">
    <div id="mobileBackdrop" class="absolute inset-0 bg-black/40"></div>

    <aside
      id="mobileDrawer"
      class="absolute right-0 top-0 h-full w-[85%] max-w-[360px] translate-x-full bg-white shadow-2xl transition-transform duration-300 ease-out"
      aria-label="Mobile menu"
    >
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
       <a href="index.html" class="flex items-center gap-3">
       <img src="/docs/assets/logo.png" class="h-10" alt="logo">
      </a>
        <button id="mobileClose" class="h-10 w-10 shrink-0 rounded-xl border border-slate-200 bg-white">
          <i class="fa-solid fa-xmark text-[#0B3C5D]"></i>
        </button>
      </div>

      <div class="px-5 py-5 grid gap-2">
        <a href="index.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-slate-50 transition">Home</a>
        <a href="about.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-slate-50 transition">About</a>

        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <button
            id="mobileServicesBtn"
            type="button"
            class="flex w-full items-center justify-between rounded-2xl px-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition"
            aria-expanded="false"
          >
            Services
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
              <i id="mobileServicesIcon" class="fa-solid fa-plus text-[#4CAF50] transition-transform duration-300"></i>
            </span>
          </button>

          <div id="mobileServicesPanel" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
            <div class="grid gap-1 px-2 pb-2">
              <a href="mold-removal.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Mold Removal</a>
              <a href="mold-remeditation.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Mold Remediation</a>
              <a href="mold-restoration.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Mold Restoration</a>
              <a href="commercial-mold-removal.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Commercial Mold Removal</a>
              <a href="commercial-mold-remeditation.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Commercial Mold Remediation</a>
              <a href="mold-inspection.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Mold Inspection</a>
              <a href="mold-damage.html" class="rounded-xl px-4 py-2 text-sm font-semibold text-[#0B3C5D] hover:bg-white transition">Mold Damage</a>
            </div>
          </div>
        </div>

        <a href="contact-us.html" class="rounded-2xl px-4 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-slate-50 transition">Contact</a>

        <a
          href="tel:414-383-3131"
          class="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0B3C5D] hover:bg-slate-50 transition"
        >
          <i class="fa-solid fa-phone text-[#4CAF50]"></i>
          414-383-3131
        </a>

        <a
          href="contact-us.html"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4CAF50] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:brightness-110 transition"
        >
          <i class="fa-solid fa-paper-plane"></i>
          Get Help
        </a>

        <p class="mt-2 text-xs text-slate-500 leading-relaxed">
          24/7 response available. Serving Wisconsin and Northern Illinois.
        </p>
      </div>
    </aside>
  </div>
</nav>


`;


const trigger = document.getElementById('servicesTrigger');
const dropdown = document.getElementById('servicesDropdown');
const chevron = document.getElementById('servicesChevron');

const openDropdown = () => {
  dropdown.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
  dropdown.classList.add('opacity-100', 'translate-y-0');
  dropdown.setAttribute('aria-hidden', 'false');
  trigger.setAttribute('aria-expanded', 'true');
  chevron.style.transform = 'rotate(180deg)';
};

const closeDropdown = () => {
  dropdown.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
  dropdown.classList.remove('opacity-100', 'translate-y-0');
  dropdown.setAttribute('aria-hidden', 'true');
  trigger.setAttribute('aria-expanded', 'false');
  chevron.style.transform = 'rotate(0deg)';
};

if (trigger && dropdown && chevron) {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeDropdown();
    else openDropdown();
  });

  document.addEventListener('click', (e) => {
    const t = e.target;
    if (!t.closest('#servicesTrigger') && !t.closest('#servicesDropdown')) closeDropdown();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });
}

const mobileOpen = document.getElementById('mobileOpen');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileDrawer = document.getElementById('mobileDrawer');
const mobileClose = document.getElementById('mobileClose');
const mobileBackdrop = document.getElementById('mobileBackdrop');

const openMobile = () => {
  mobileOverlay.classList.remove('hidden');
  requestAnimationFrame(() => {
    mobileDrawer.classList.remove('translate-x-full');
  });
  document.body.style.overflow = 'hidden';
};

const closeMobile = () => {
  mobileDrawer.classList.add('translate-x-full');
  setTimeout(() => {
    mobileOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }, 300);
};

mobileOpen?.addEventListener('click', openMobile);
mobileClose?.addEventListener('click', closeMobile);
mobileBackdrop?.addEventListener('click', closeMobile);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileOverlay && !mobileOverlay.classList.contains('hidden')) closeMobile();
});

const mobileServicesBtn = document.getElementById('mobileServicesBtn');
const mobileServicesPanel = document.getElementById('mobileServicesPanel');
const mobileServicesIcon = document.getElementById('mobileServicesIcon');

if (mobileServicesBtn && mobileServicesPanel && mobileServicesIcon) {
  mobileServicesBtn.addEventListener('click', () => {
    const isOpen = mobileServicesPanel.style.maxHeight && mobileServicesPanel.style.maxHeight !== '0px';

    if (isOpen) {
      mobileServicesPanel.style.maxHeight = '0px';
      mobileServicesBtn.setAttribute('aria-expanded', 'false');
      mobileServicesIcon.style.transform = 'rotate(0deg)';
    } else {
      mobileServicesPanel.style.maxHeight = mobileServicesPanel.scrollHeight + 'px';
      mobileServicesBtn.setAttribute('aria-expanded', 'true');
      mobileServicesIcon.style.transform = 'rotate(45deg)';
    }
  });
}