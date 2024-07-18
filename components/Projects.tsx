import Image from "next/image"
import Link from "next/link"

const ProjectCard = (props: {name: string, descript: string, photoSrc: string, websiteUrl: string}) => {
    return (
        <div>
            <Link
                href={props.websiteUrl}
                target="_blank"
                className="flex flex-col border-2 border-black hover:border-yellow-300 rounded-md w-[300px] h-[450px]"
            >
                <Image src={props.photoSrc} width={300} height={300} alt="" className="rounded-sm" />
                <div className="flex flex-col px-3">
                    <p className="text-xl font-bold underline hover:text-yellow-300">{props.name}</p>
                    <p>{props.descript}</p>
                </div>
            </Link>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-8 bg-[#ECEEEF] p-4">
            <h1 className="text-4xl font-bold">Personal Projects</h1>
            <div className="hidden md:flex justify-center gap-20">
                <ProjectCard 
                    name={"2nd Chance"} 
                    descript={"I was lead coder for this 36-hour hackathon project. We simulated our friend using iMessage data, his voice, and Vector Search. Visit the attached devpost for more details!"} 
                    photoSrc="/2ndChance.png" 
                    websiteUrl="https://devpost.com/software/2nd-chance-ryczl2" 
                />
                <ProjectCard 
                    name={"Posers!"} 
                    descript={"A computer vision game that determines whether a player is posing correctly (based off a prompt) using Google's MediaPipe AI framework and vectorization."} 
                    photoSrc="/personal_website_posers.jpeg" 
                    websiteUrl="https://pose-master.vercel.app/" 
                />
            </div>
            <div className="flex flex-col md:hidden justify-center gap-20">
                <ProjectCard 
                    name={"2nd Chance"} 
                    descript={"I was lead coder for this 36-hour hackathon project. We simulated our friend using iMessage data, his voice, and Vector Search. Visit the attached devpost for more details!"} 
                    photoSrc="/2ndChance.png" 
                    websiteUrl="https://devpost.com/software/2nd-chance-ryczl2" 
                />
                <ProjectCard 
                    name={"Posers!"} 
                    descript={"A computer vision game that determines whether a player is posing correctly (based off a prompt) using Google's MediaPipe AI framework and vectorization."} 
                    photoSrc="/personal_website_posers.jpeg" 
                    websiteUrl="https://pose-master.vercel.app/" 
                />
            </div>
            <div className="hidden md:flex justify-center gap-20">
                <ProjectCard 
                    name={"Access DB"} 
                    descript={"Database that uses AI to recommend scholarships to students with disabilities. Searches are powered by a customized ChatGPT with Vector Embeddings."} 
                    photoSrc="/personal_website_adb.jpeg" 
                    websiteUrl="https://access-db.vercel.app/" 
                />
                <ProjectCard 
                    name={"Admitted"} 
                    descript={"A college prep service connecting HS students with college students, providing affordable access to high-quality essay reviews, resume reviews, and mock interviews."} 
                    photoSrc="/personal_website_adm.jpeg" 
                    websiteUrl="https://myadmitted.com/" 
                />
            </div>
            <div className="md:hidden flex flex-col justify-center gap-20">
                <ProjectCard 
                    name={"Access DB"} 
                    descript={"Database that uses AI to recommend scholarships to students with disabilities. Searches are powered by a customized ChatGPT with Vector Embeddings."} 
                    photoSrc="/personal_website_adb.jpeg" 
                    websiteUrl="https://access-db.vercel.app/" 
                />
                <ProjectCard 
                    name={"Admitted"} 
                    descript={"A college prep service connecting HS students with college students, providing affordable access to high-quality essay reviews, resume reviews, and mock interviews."} 
                    photoSrc="/personal_website_adm.jpeg" 
                    websiteUrl="https://myadmitted.com/" 
                />
            </div>
        </div>
    )
}