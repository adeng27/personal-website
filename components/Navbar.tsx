export const Navbar = () => {
    return (
        <nav className=" bg-gray-900 border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <h1 className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">Alastair Deng</span>
            </h1>
            <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">About</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">Projects</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">Education</a>
                </li>
                <li>
                    <a href="#" className="block py-2 px-3 text-white rounded md:p-0 hover:text-yellow-300" aria-current="page">Resume</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}