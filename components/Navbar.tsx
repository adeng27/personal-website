export const Navbar = () => {
    return (
        <nav className=" bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">Alastair Deng</span>
            </h1>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                {/* <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">Projects</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">Education</a>
                </li> */}
                <li>
                    <a href="resume.pdf" target="_blank" className="flex gap-2 py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">
                        <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z M 15 22 L 15 24 L 35 24 L 35 22 Z M 15 28 L 15 30 L 31 30 L 31 28 Z M 15 34 L 15 36 L 35 36 L 35 34 Z"></path>
                        </svg>
                        Resume
                    </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}