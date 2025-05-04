const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-[#192531] px-5 pt-14 md:pt-20">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-20 gap-10 ">
            <div class="w-full">
                <h2 class="font-medium text-2xl mb-3 text-white">About Us
                </h2>
                <p class="text-zinc-300 mt-5">Farite Church is a Family of Faith that is committed to Bible teaching and
                    joyful worship. People of
                    all ages are ministered to and given opportunities to serve the Lord by serving others at our
                    welcoming community.
                </p>
            </div>

            <div class="w-full">
                <h2 class="font-medium text-2xl mb-3 text-white">Contact Information</h2>
                <div class="mt-7">
                    <a href="tel:+03 00 0000 000"
                        class="flex items-center gap-3 transition-all duration-500 hover:text-[#c1ad96] text-white"><i
                            class="fa-solid fa-phone text-lg text-[#fff]"></i> 1-800-1234-678</a>
                    <a href="mailto:info@demolink.org"
                        class="flex items-center gap-3 transition-all mt-4 duration-500 hover:text-[#c1ad96] text-white"><i
                            class="fa-solid fa-envelope text-xl text-[#fff] "></i>info@demolink.org</a>
                    <a href="#"
                        class="flex items-start gap-3 transition-all mt-4 duration-500 hover:text-[#c1ad96] text-white"><i
                            class="fa-solid fa-location-dot text-xl text-[#fff] mt-1"></i>2130 Fulton Street <br>
                        San Diego, CA 94117-1080 USA</a>
                </div>
            </div>

            <div class="w-full">
                <h2 class="font-medium text-2xl mb-3 text-white">Newsletter</h2>
                <p class="text-zinc-300 mt-5">Sign up to our newsletter and be the first to know about the latest news,
                    updates, and activities available at our church.
                </p>
                <form class="">
                    <div class="relative p-3 bg-white rounded-lg w-full mt-5">
                        <input type="email" required name="email" class=" bg-white rounded-lg w-full pr-16"
                            placeholder="email ">
                        <button type="submit"
                            class="flex items-center justify-center absolute top-0 right-0 h-full w-16 transition-all duration-500 hover:bg-[#6a7a83] bg-[#c1ad9c] rounded-lg cursor-pointer">
                            <i class="fa-solid fa-envelope text-xl text-[#fff] "></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <p class="max-w-7xl md:mt-16 mt-5 text-zinc-300 w-full mx-auto py-5 text-white text-center">© <span id="copyright"></span> All Rights
            Reserved. <a href="#" class="hover:underline">Privacy Policy</a></p>
    </footer>
`

const year = new Date().getFullYear()
const copyright = document.getElementById('copyright').innerHTML = year