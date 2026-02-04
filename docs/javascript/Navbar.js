const navbar = document.getElementById("navbar");

navbar.innerHTML = `
<nav class="sticky top-0 z-50 w-full bg-white backdrop-blur-xl">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-22  items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        <img src="/docs/assets/logo.png" class="h-12" alt="Subzero Repair Chicago">
      </a>

      <div class="hidden lg:flex items-center gap-8">
        <a href="index.html" class=" font-semibold text-[#020e28] hover:text-[#8da4ca] transition">Home</a>
        <a href="about.html" class=" font-semibold text-[#020e28] hover:text-[#8da4ca] transition">About</a>

        <div class="relative">
          <button
            type="button"
            id="servicesTrigger"
            class="inline-flex items-center gap-2  font-semibold text-[#020e28] hover:text-[#8da4ca] transition"
            aria-expanded="false"
          >
            Services
            <i id="servicesChevron" class="fa-solid fa-chevron-down text-xs transition-transform duration-200"></i>
          </button>

          <div
            id="servicesDropdown"
            class="absolute left-0 top-[56px] w-[390px] opacity-0 -translate-y-2 pointer-events-none transition-all duration-200"
            aria-hidden="true"
          >
            <div class="rounded-3xl border border-slate-200 bg-white shadow-2xl p-4">
              <div class="grid gap-2">
                <a href="subzero-refrigerator-repair.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-[#8da4ca]/30 text-[#020e28] flex items-center justify-center">
                      <i class="fa-solid fa-temperature-low"></i>
                    </span>
                    <div>
                      <p class=" font-semibold text-[#020e28]">Refrigerator Repair</p>
                      <p class="text-xs text-slate-500">Cooling, leaks, airflow issues</p>
                    </div>
                  </div>
                </a>

                <a href="subzero-freezer-repair.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-[#8da4ca]/30 text-[#020e28] flex items-center justify-center">
                      <i class="fa-solid fa-snowflake"></i>
                    </span>
                    <div>
                      <p class=" font-semibold text-[#020e28]">Freezer Repair</p>
                      <p class="text-xs text-slate-500">Frost, temperature swings</p>
                    </div>
                  </div>
                </a>

                <a href="subzero-ice-maker-repair.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-[#8da4ca]/30 text-[#020e28] flex items-center justify-center">
                      <i class="fa-solid fa-cubes"></i>
                    </span>
                    <div>
                      <p class=" font-semibold text-[#020e28]">Ice Maker Repair</p>
                      <p class="text-xs text-slate-500">Clogs, valves, sensors</p>
                    </div>
                  </div>
                </a>

                <a href="subzero-wine-cooler-repair.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-[#8da4ca]/30 text-[#020e28] flex items-center justify-center">
                      <i class="fa-solid fa-wine-glass"></i>
                    </span>
                    <div>
                      <p class=" font-semibold text-[#020e28]">Wine Cooler Repair</p>
                      <p class="text-xs text-slate-500">Precise temperature control</p>
                    </div>
                  </div>
                </a>

                <a href="subzero-emergency-repair.html" class="rounded-2xl p-3 hover:bg-slate-50 transition">
                  <div class="flex items-center gap-3">
                    <span class="w-10 h-10 shrink-0 rounded-xl bg-[#8da4ca]/30 text-[#020e28] flex items-center justify-center">
                      <i class="fa-solid fa-bolt"></i>
                    </span>
                    <div>
                      <p class=" font-semibold text-[#020e28]">Emergency Repair</p>
                      <p class="text-xs text-slate-500">24/7 priority response</p>
                    </div>
                  </div>
                </a>
              </div>

              <div class="mt-3 pt-3 border-t border-slate-200">
                <a href="contact.html" class="flex items-center justify-between rounded-2xl px-4 py-3 hover:bg-slate-50 transition">
                  <span class=" font-semibold text-[#020e28]">Need help today?</span>
                  <span class="text-xs text-slate-500">Book same-day</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <a href="faq.html" class=" font-semibold text-[#020e28] hover:text-[#8da4ca] transition">FAQ</a>
        <a href="contact.html" class=" font-semibold text-[#020e28] hover:text-[#8da4ca] transition">Contact</a>
      </div>

      <div class="hidden  lg:flex items-center gap-3">
        <a
          href="contact.html"
          class="inline-flex items-center gap-2 rounded-xl bg-[#020e28] px-4 py-2.5  font-semibold text-white hover:bg-[#020e28]/90 transition"
        >
          <i class="fa-solid fa-calendar-check"></i>
          Book Service
        </a>
      </div>

      <button
        id="mobileOpen"
        class="lg:hidden inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white h-11 w-11 hover:bg-slate-50 transition"
        type="button"
        aria-label="Open menu"
      >
        <i class="fa-solid fa-bars text-[#020e28]"></i>
      </button>
    </div>
  </div>

  <div id="mobileOverlay" class="fixed bg-white  inset-0 z-50 hidden">
    <div id="mobileBackdrop" class="absolute inset-0 bg-white"></div>

    <aside
      id="mobileDrawer"
      class="absolute right-0 top-0 h-full w-[85%] max-w-[360px] translate-x-full bg-white shadow-2xl transition-transform duration-300 ease-out"
      aria-label="Mobile menu"
    >
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
        <a href="index.html" class="flex items-center gap-3">
          <img src="/docs/assets/logo.png" class="h-10" alt="Subzero Repair Chicago">
        </a>
        <button id="mobileClose" class="h-10 w-10 shrink-0 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition">
          <i class="fa-solid fa-xmark text-[#020e28]"></i>
        </button>
      </div>

      <div class="px-5 py-5 grid gap-2">
        <a href="index.html" class="rounded-2xl px-4 py-3  font-semibold text-[#020e28] hover:bg-slate-50 transition">Home</a>
        <a href="about.html" class="rounded-2xl px-4 py-3  font-semibold text-[#020e28] hover:bg-slate-50 transition">About</a>

        <div class="rounded-2xl border border-slate-200 bg-slate-50 p-2">
          <button
            id="mobileServicesBtn"
            type="button"
            class="flex w-full items-center justify-between rounded-2xl px-2 py-2  font-semibold text-[#020e28] hover:bg-white transition"
            aria-expanded="false"
          >
            Services
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white ring-1 ring-slate-200">
              <i id="mobileServicesIcon" class="fa-solid fa-plus text-[#8da4ca] transition-transform duration-300"></i>
            </span>
          </button>

          <div id="mobileServicesPanel" class="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
            <div class="grid gap-1 px-2 pb-2 pt-2">
              <a href="subzero-refrigerator-repair.html" class="rounded-xl px-4 py-2  font-semibold text-[#020e28] hover:bg-white transition">Refrigerator Repair</a>
              <a href="subzero-freezer-repair.html" class="rounded-xl px-4 py-2  font-semibold text-[#020e28] hover:bg-white transition">Freezer Repair</a>
              <a href="subzero-ice-maker-repair.html" class="rounded-xl px-4 py-2  font-semibold text-[#020e28] hover:bg-white transition">Ice Maker Repair</a>
              <a href="subzero-wine-cooler-repair.html" class="rounded-xl px-4 py-2  font-semibold text-[#020e28] hover:bg-white transition">Wine Cooler Repair</a>
              <a href="subzero-emergency-repair.html" class="rounded-xl px-4 py-2  font-semibold text-[#020e28] hover:bg-white transition">Emergency Repair</a>
            </div>
          </div>
        </div>

        <a href="faq.html" class="rounded-2xl px-4 py-3  font-semibold text-[#020e28] hover:bg-slate-50 transition">FAQ</a>
        <a href="contact.html" class="rounded-2xl px-4 py-3  font-semibold text-[#020e28] hover:bg-slate-50 transition">Contact</a>

        <a
          href="tel:7732708300"
          class="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3  font-semibold text-[#020e28] hover:bg-slate-50 transition"
        >
          <i class="fa-solid fa-phone text-[#8da4ca]"></i>
          (773) 270-8300
        </a>

        <a
          href="contact.html"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#020e28] px-4 py-3  font-semibold text-white hover:bg-[#020e28]/90 transition"
        >
          <i class="fa-solid fa-calendar-check"></i>
          Book Service
        </a>

        <p class="mt-2 text-xs text-slate-500 leading-relaxed">
          Same-day and emergency Subzero repair across the Greater Chicago Area.
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
