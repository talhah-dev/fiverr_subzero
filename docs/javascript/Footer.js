const footer = document.getElementById('footer')
footer.innerHTML = `
<footer class="relative bg-[#020e28] overflow-hidden">
    <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1700474568247-2bf81611b293?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="w-full h-full object-cover opacity-15" alt="">
    </div>

    <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#8da4ca]/25 rounded-full blur-[140px]"></div>
    <div class="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[140px]"></div>

    <div class="relative max-w-7xl mx-auto px-6 pt-24 pb-10">
        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-14 text-gray-300">

            <div>
                <a href="index.html" class="flex items-center gap-3">
                  <img src="/docs/assets/logo.png" class="h-16" alt="Subzero Repair Chicago">
                </a>
                <p class="text-gray-400 leading-relaxed mt-5">
                    Professional Subzero appliance repair services delivered with precision, care,
                    and same-day response across the Greater Chicago Area.
                </p>

                <div class="mt-6 flex gap-4">
                    <a href="#" class="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#8da4ca] hover:text-[#020e28] transition">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#8da4ca] hover:text-[#020e28] transition">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" class="w-12 h-12 shrink-0 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#8da4ca] hover:text-[#020e28] transition">
                        <i class="fa-brands fa-google"></i>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="text-lg font-semibold text-white mb-5">
                    Main Links
                </h4>
                <ul class="space-y-3">
                    <li><a href="about.html" class="hover:text-[#8da4ca] transition">About Us</a></li>
                    <li><a href="#" class="hover:text-[#8da4ca] transition">Our Services</a></li>
                    <li><a href="#" class="hover:text-[#8da4ca] transition">Service Area</a></li>
                    <li><a href="contact.html" class="hover:text-[#8da4ca] transition">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold text-white mb-5">
                    Our Services
                </h4>
                <ul class="space-y-3">
                    <li><a href="subzero-refrigerator-repair.html" class="hover:text-[#8da4ca] transition">Refrigerator Repair</a></li>
                    <li><a href="subzero-freezer-repair.html" class="hover:text-[#8da4ca] transition">Freezer Repair</a></li>
                    <li><a href="subzero-ice-maker-repair.html" class="hover:text-[#8da4ca] transition">Ice Maker Repair</a></li>
                    <li><a href="subzero-wine-cooler-repair.html" class="hover:text-[#8da4ca] transition">Wine Cooler Repair</a></li>
                </ul>
            </div>

            <div>
                <h4 class="text-lg font-semibold text-white mb-5">
                    Contact Info
                </h4>

                <div class="space-y-4">
                    <div class="flex gap-4">
                        <div class="w-12 h-12 shrink-0 bg-[#8da4ca] text-[#020e28] rounded-xl flex items-center justify-center">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <p>(773) 270-8300</p>
                            <span class="text-sm text-gray-400">24/7 Support</span>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <div class="w-12 h-12 shrink-0 bg-[#8da4ca] text-[#020e28] rounded-xl flex items-center justify-center">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <p>
                            Serving Greater Chicago Area
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="mt-16 border-t border-white/10 pt-8 flex justify-center text-center items-center text-sm text-gray-300 gap-4">
            <p>
                © 2024 Subzero Repair Chicago. All Rights Reserved.
            </p>
          </div>
    </div>
</footer>

`