const footer = document.getElementById('footer')
footer.innerHTML = `
<!-- Footer -->
<footer class="bg-[#0B3C5D] text-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <!-- Top -->
    <div class="grid gap-10 border-b border-white/15 py-14 lg:grid-cols-4">
      <!-- Brand -->
      <div data-aos="fade-up" data-aos-duration="900">
        <a href="index.html" class="flex items-center gap-3">
           <img src="/docs/assets/logo.png" class="h-12 brightness-0 invert" alt="logo">
        </a>

        <p class="mt-4 text-sm leading-relaxed text-white/75">
          Full-service water, fire, and mold cleanup with a safety-first process. Fast response, clear communication,
          and quality restoration for homes and businesses.
        </p>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            href="tel:414-383-3131"
            class="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#4CAF50] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <i class="fa-solid fa-phone"></i>
            414-383-3131
          </a>
          <a
            href="contact-us.html"
            class="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <i class="fa-solid fa-paper-plane"></i>
            Request Service
          </a>
        </div>

        <div class="mt-6 flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <i class="fa-brands fa-facebook-f text-white"></i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <i class="fa-brands fa-linkedin-in text-white"></i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <i class="fa-brands fa-x-twitter text-white"></i>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <i class="fa-brands fa-youtube text-white"></i>
          </a>
        </div>
      </div>

      <!-- Services -->
      <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="80">
        <p class="text-sm font-bold uppercase tracking-widest text-white/70">Services</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li>
            <a href="mold-removal.html" class="text-white/80 transition hover:text-white">
              Mold Removal
            </a>
          </li>
          <li>
            <a href="mold-remeditation.html" class="text-white/80 transition hover:text-white">
              Mold Remediation
            </a>
          </li>
          <li>
            <a href="mold-restoration.html" class="text-white/80 transition hover:text-white">
              Mold Restoration
            </a>
          </li>
          <li>
            <a href="commercial-mold-removal.html" class="text-white/80 transition hover:text-white">
              Commercial Mold Removal
            </a>
          </li>
          <li>
            <a href="commercial-mold-remeditation.html" class="text-white/80 transition hover:text-white">
              Commercial Mold Remediation
            </a>
          </li>
          <li>
            <a href="mold-inspection.html" class="text-white/80 transition hover:text-white">
              Mold Inspection
            </a>
          </li>
          <li>
            <a href="mold-damage.html" class="text-white/80 transition hover:text-white">
              Mold Damage
            </a>
          </li>
        </ul>
      </div>

      <!-- Company -->
      <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="160">
        <p class="text-sm font-bold uppercase tracking-widest text-white/70">Company</p>
        <ul class="mt-5 space-y-3 text-sm">
          <li>
            <a href="about.html" class="text-white/80 transition hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="contact-us.html" class="text-white/80 transition hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#" class="text-white/80 transition hover:text-white">
              Careers
            </a>
          </li>
          <li>
            <a href="#" class="text-white/80 transition hover:text-white">
              Claims Support
            </a>
          </li>
          <li>
            <a href="#" class="text-white/80 transition hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="text-white/80 transition hover:text-white">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="240">
        <p class="text-sm font-bold uppercase tracking-widest text-white/70">Contact</p>

        <div class="mt-5 space-y-4 text-sm text-white/80">
          <div class="flex items-start gap-3">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <i class="fa-solid fa-location-dot text-[#4CAF50]"></i>
            </span>
            <div>
              <p class="font-bold text-white">Main Office</p>
              <p class="mt-1 text-white/70">Milwaukee, WI</p>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <i class="fa-solid fa-phone text-[#4CAF50]"></i>
            </span>
            <div>
              <p class="font-bold text-white">24/7 Hotline</p>
              <a href="tel:414-383-3131" class="mt-1 block text-white/70 transition hover:text-white">
                414-383-3131
              </a>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <i class="fa-solid fa-envelope text-[#4CAF50]"></i>
            </span>
            <div>
              <p class="font-bold text-white">Email</p>
              <a href="mailto:info@yourdomain.com" class="mt-1 block text-white/70 transition hover:text-white">
                info@yourdomain.com
              </a>
            </div>
          </div>

          <div class="flex items-start gap-3">
            <span class="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <i class="fa-solid fa-clock text-[#4CAF50]"></i>
            </span>
            <div>
              <p class="font-bold text-white">Hours</p>
              <p class="mt-1 text-white/70">Emergency Service: 24/7</p>
            </div>
          </div>
        </div>

        <div class="mt-6 rounded-3xl bg-white/10 p-5 ring-1 ring-white/15">
          <p class="text-sm font-bold">Need help now?</p>
          <p class="mt-2 text-sm text-white/70">
            Call anytime for immediate guidance and rapid dispatch.
          </p>
          <a
            href="tel:414-383-3131"
            class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4CAF50] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <i class="fa-solid fa-phone"></i>
            Call 24/7
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="flex py-6 items-center justify-center">
      <p class="text-sm text-center text-white/60">
        © <span id="year"></span> Restoration Specialists. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<script>
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
</script>

`