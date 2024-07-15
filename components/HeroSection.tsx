import Image from "next/image"
import Link from "next/link"

export const HeroSec = () => {
    return (
      <div>
        <div className="hidden md:flex justify-center items-center gap-12 w-screen bg-gray-300 min-h-[450px] h-fit p-8">
            <div className="flex flex-col items-center justify-center gap-3 h-[400px]">
                <Image 
                    src={"/personal_website_photo.JPG"} 
                    width={350} 
                    height={350} 
                    alt="" 
                    className="rounded-full border-white border-4"
                />
                <div className="flex justify-center gap-2">
                    <Link href="https://github.com/adeng27" target="_blank" className="text-black hover:text-yellow-300 ms-5">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </Link>
                    {/* <Link href="https://www.instagram.com/alastairdeng/?hl=en" target="_blank" className="text-black hover:text-yellow-300 ms-5">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
                            <path  d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                        </svg>
                        <span className="sr-only">Instagram account</span>
                    </Link> */}
                    <Link href="https://www.linkedin.com/in/alastair-deng/" target="_blank" className="text-black hover:text-yellow-300 ms-5">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
                            <path  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        <span className="sr-only">Linkedin account</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col w-[760px] min-h-[400px] h-fit justify-center gap-4">
                <h1 className="text-2xl font-bold">Alastair Deng</h1>
                <p className="text-lg font-semibold">B.S. Student in CS @ Stanford (2027), Valedictorian @ Ben Franklin High School (2023)</p>
                <p className="text-lg">
                    I am an undergraduate student in Computer Science at Stanford University. 
                    I graduated in 2023 from Benjamin Franklin High School (New Orleans) where I was Valedictorian.
                </p>
                <p className="text-lg">
                    I currently work at the Lawrence Berkeley National Lab as a software engineer intern. Additionally, I am doing research
                    automated art feedback with Catherine Mullings at Stanford University.
                    {/* I am interested in human-computer interaction and machine learning, and in particular the applications of AI in entrepreneurship. 
                    This includes Computer Vision and Software Development. */}
                </p>
            </div>
        </div>

        <div className="flex md:hidden justify-center items-center gap-12 w-screen bg-gray-300 h-[450px] px-8">
            {/* <div className="flex flex-col items-center justify-center gap-3 h-[400px]">
                <Image 
                    src={"/personal_website_photo.JPG"} 
                    width={350} 
                    height={350} 
                    alt="" 
                    className="rounded-full border-white border-4"
                />
                <div className="flex justify-center gap-2">
                    <Link href="https://github.com/adeng27" target="_blank" className="text-black hover:text-yellow-300 ms-5">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"/>
                        </svg>
                        <span className="sr-only">GitHub account</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/alastair-deng/" target="_blank" className="text-black hover:text-yellow-300 ms-5">
                        <svg className="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 30 30">
                            <path  d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                        </svg>
                        <span className="sr-only">Linkedin account</span>
                    </Link>
                </div>
            </div> */}
            <div className="flex flex-col w-[760px] h-[400px] justify-center gap-4">
                <h1 className="text-2xl font-bold">Alastair Deng</h1>
                <p className="text-lg font-semibold">B.S. Student in CS @ Stanford (2027), Valedictorian @ Ben Franklin High School (2023)</p>
                <p className="text-lg">
                    I am an undergraduate student in Computer Science at Stanford University. 
                    I graduated in 2023 from Benjamin Franklin High School (New Orleans) where I was Valedictorian.
                </p>
                <p className="text-lg">
                    I currently work at the Lawrence Berkeley National Lab as a software engineer intern. Additionally, I am doing research
                    automated art feedback with Catherine Mullings at Stanford University.
                    {/* I am interested in human-computer interaction and machine learning, and in particular the applications of AI in entrepreneurship. 
                    This includes Computer Vision and Software Development. */}
                </p>
            </div>
        </div>
      </div>
    )
  }