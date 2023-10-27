import data from '../myData.json'

import { 
    PiCodeDuotone,
} from 'react-icons/pi'

const WorkCard = () => {
    const {
        name,
        company,
        description,
        profilePicture,
        contactInfo,
        socials,
        projects,
        skills,
    } = data

    const languagesArr = ["JavaScript", "React", "HTML", "CSS"]

    const languages = languagesArr.map((language, index) => (
        <>
            <div key={index} className="capitalize font-semibold text-base p-3 rounded-full bg-rose-100">{language}</div>
        </>
    ))

    return (
        <div className="mb-14">
            <div className="font-bold mb-5 lg:ms-7 text-center lg:text-left text-base mt-14">My Work</div>
            <div className="bg-white p-7 rounded-3xl w-full">
                <div className="flex items-center gap-2 text-neutral-400 uppercase font-semibold">
                    <PiCodeDuotone className="h-5 w-5" />
                    Projects
                </div>
                <div className="flex flex-col w-full mt-5"> {/** Projects Container */}
                    <div className="flex flex-col gap-3">
                        <div className="flex lg:gap-7">
                            <img src={projects[0].image} alt="Project 1" className="rounded-2xl w-0 lg:w-24 lg:max-h-24 md:visible" />
                            <div className="w-full flex flex-col gap-3 lg:max-h-24">
                                <div className="font-semibold text-base">Project Title</div>
                                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur vitae magnam numquam dolore unde perferendis assumenda incidunt molestiae ipsam explicabo libero quis non ratione et, fugiat, accusamus enim laborum eos.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            {languages}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}
 
export default WorkCard;