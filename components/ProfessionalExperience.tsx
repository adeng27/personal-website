import Image from "next/image"

type TimelineCardProps = {
    positionTitle: string, 
    imageUrl: string, 
    companyName: string, 
    startDate: string, 
    endDate: string,
    description: string,
    location: string,
    textOnRight: boolean
}

export const ProfessionalExperience = () => {
    let timelineData: TimelineCardProps[] = [
        {
            positionTitle: "Software Engineer Intern", 
            imageUrl: "/lbl_logo.png", 
            companyName: "Berkeley National Lab", 
            startDate: "6/30/2024", 
            endDate: "Present",
            description: "Developing a user portal to manage superclusters for UC Berkeley and the Berkeley National Lab researchers. \
                            This portal replaces Google Forms and ticket workflows for account management.",
            location: "Berkeley, CA",
            textOnRight: true
        },
        {
            positionTitle: "Research Assistant", 
            imageUrl: "/stanford_logo.webp", 
            companyName: "Stanford University", 
            startDate: "4/01/2024", 
            endDate: "Present",
            description: "Primary developer for art feedback research project which explores the potential of automated art feedback for novice artists. \
                            I am responsible for creating the code to test various forms of automated art feedback, which includes the development of the  \
                            drawing process, data collection, and automated feedback.",
            location: "Stanford, CA",
            textOnRight: false
        }
    ]
    return (
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-4xl font-bold">Professional Experience</h1>
            <TimelineCard {...timelineData[0]} />
            <TimelineCard {...timelineData[1]} />
        </div>
    )
}

const TimelineCard = (props: TimelineCardProps) => {
    return (
        <div>
            <div className="hidden md:block">
                {
                    props.textOnRight ? 
                        <div className="flex gap-8">
                            <Image className="rounded-full border-slate-600 border-4 max-w-[160px] max-h-[160px]" src={props.imageUrl} width={160} height={160} alt="" />
                            <div className="flex flex-col gap-2 max-w-md">
                                <h2 className="text-xl font-bold">{props.startDate} - {props.endDate}</h2>
                                <h2 className="text-xl font-bold">
                                    <span className="text-yellow-500">{props.companyName}</span>, {props.positionTitle}
                                </h2>
                                <h3 className="text-lg italic">{props.location}</h3>
                                <p>{props.description}</p>
                            </div>
                        </div> 
                    :
                    <div className="flex gap-12">
                        <div className="flex flex-col gap-2 max-w-md">
                            <h2 className="text-xl font-bold">{props.startDate} - {props.endDate}</h2>
                            <h2 className="text-xl font-bold">
                                <span className="text-yellow-500">{props.companyName}</span>, {props.positionTitle}
                            </h2>
                            <h3 className="text-lg italic">{props.location}</h3>
                            <p>{props.description}</p>
                        </div>
                        <Image className="rounded-full border-slate-600 border-4 max-w-[160px] max-h-[160px]" src={props.imageUrl} width={160} height={160} alt="" />
                    </div> 
                } 
            </div>
            <div className="flex flex-col md:hidden gap-4 justify-center items-center">
                <Image className="rounded-full border-slate-600 border-4 max-w-[160px] max-h-[160px]" src={props.imageUrl} width={160} height={160} alt="" />
                <div className="flex flex-col gap-2 max-w-md p-4">
                    <h2 className="text-xl font-bold">{props.startDate} - {props.endDate}</h2>
                    <h2 className="text-xl font-bold">
                        <span className="text-yellow-500">{props.companyName}</span>, {props.positionTitle}
                    </h2>
                    <h3 className="text-lg italic">{props.location}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}
