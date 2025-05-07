const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#192531] px-5 pt-14 md:pt-20">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 ">
            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl mb-3 text-white">About Us
                </h2>
                <p data-aos="fade-up" data-aos-delay="100" class="text-zinc-300 mt-5">Farite Church is a Family of Faith that is committed to Bible teaching and
                    joyful worship. People of
                    all ages are ministered to and given opportunities to serve the Lord by serving others at our
                    welcoming community.
                </p>
            </div>

            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl mb-3 text-white">Contact Information</h2>
                <div class="mt-7">
                    <a data-aos="fade-up" href="#"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#c1ad96] text-white"><i
                            class="fa-solid fa-location-dot text-xl text-[#fff] mt-1"></i>2130 Fulton Street <br>
                        San Diego, CA 94117-1080 USA</a>
                    <a data-aos="fade-up" href="mailto:info@demolink.org"
                        class="flex items-center gap-3 transition-all mt-4 duration-500 hover:text-[#c1ad96] text-white"><i
                            class="fa-solid fa-envelope text-xl text-[#fff] "></i>info@demolink.org</a>
                    <div class="flex items-center gap-5 text-zinc-300 mt-8">
                        <a data-aos="fade-up" href=""><i
                                class="fa-brands fa-facebook-f text-lg"></i></a>
                        <a data-aos="fade-up" data-aos-delay="100" href=""><i
                                class="fa-brands fa-instagram text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="200" href=""><i
                                class="fa-brands fa-spotify text-xl"></i></a>
                        <a data-aos="fade-up" data-aos-delay="300" href=""><img
                                src="./Docs/Assets/donation.svg" alt=""></a>
                    </div>
                </div>
            </div>

            <div class="w-full">
                <h2 data-aos="fade-up" class="font-medium text-2xl mb-3 text-white">Quick Link</h2>
                <div class="mt-7">
                    <ul class="space-y-2 text-zinc-200">
                        <li data-aos="fade-up"><a class="hover:underline" href="/privacy-policy.html">Privacy Policy</a></li>
                        <li data-aos="fade-up" data-aos-delay="100"><a class="hover:underline" href="/terms-of-use.html">Terms of Use </a></li>
                        <li data-aos="fade-up" data-aos-delay="200"><a class="hover:underline" href="/accessibility-statement.html">Accessibility Policy </a></li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="max-w-7xl md:mt-16 mt-5 text-zinc-300 w-full mx-auto py-5 text-white text-center">© <span
                id="copyright"></span> All Rights
            Reserved. <a href="#" class="hover:underline">Privacy Policy</a></p>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year