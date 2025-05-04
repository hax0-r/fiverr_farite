const navbar = document.getElementById("navbar");

navbar.innerHTML = `
    <nav>
        <div class="max-w-7xl mx-auto flex justify-between items-center w-full md:p-5 p-3 md:h-24 h-20">
            <a href="./index.html" class="flex justify-center lg:justify-start">
                <img src="./Docs/Assets/" class="md:h-12 h-10" alt="logo">
            </a>
            <div class="md:flex items-center gap-10 hidden">
                <ul class="md:flex hidden items-center gap-7">
                    <li><a href="./index.html"
                            class="hover:text-[#eb6129] tracking-wide font-medium transition-all duration-500">Home </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#c1ad9c] tracking-wide font-medium transition-all duration-500">About
                        </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#c1ad9c] tracking-wide font-medium transition-all duration-500">Blog </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#c1ad9c] tracking-wide font-medium transition-all duration-500">Services
                        </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#c1ad9c] tracking-wide font-medium transition-all duration-500">Gallery
                        </a>
                    </li>
                    <li><a href="#"
                            class="hover:text-[#c1ad9c] tracking-wide font-medium transition-all duration-500">Contact
                        </a>
                    </li>

                </ul>
            </div>
            <i id="mobileMenuBtn" class="fa-solid text-[#000] fa-bars md:!hidden text-2xl cursor-pointer mr-2"></i>
        </div>
    </nav>

    <div id="mobileMenu"
        class="fixed right-0 top-0 bg-white max-w-[30rem] w-0 overflow-hidden h-screen z-50 transition-all duration-500">
        <div class="flex items-end justify-end p-5">
            <i class="fa-solid mobileMenuCloseBtn fa-x z-50 text-slate-700 text-xl cursor-pointer"></i>
        </div>
        <div class="p-6">
            <ul class="flex relative z-50 flex-col gap-7">
                <li><a href="./index.html"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">Home</a></li>
                <li><a href="#"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">About</a>
                </li>
                <li><a href="#"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">Blog</a></li>
                <li><a href="#"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">Services</a>
                </li>
                <li><a href="#"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">Gallery</a>
                </li>
                <li><a href="#"
                        class="hover:text-[#c1ad9c] text-nowrap tracking-wide transition-all duration-500">Contact</a>
                </li>
            </ul>
        </div>
    </div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});