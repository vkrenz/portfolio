import data from '../myData.json'
import { Button } from 'flowbite-react';
import { BsArrowRight } from 'react-icons/bs'
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
            <div key={index} className="capitalize font-semibold text-base px-4 py-2 rounded-full extra-light-bg-color">{language}</div>
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
                        <div className="flex items-center gap-3 mt-3 mb-3">
                            {languages}
                        </div>
                        <hr />
                    </div>
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
                        <div className="flex items-center gap-3 mt-3 mb-3">
                            {languages}
                        </div>
                        <hr />
                    </div>
                </div>
                <Button className="expand-hover dark-bg-color w-52 p-2 rounded-2xl shadow-lg mt-7 ms-auto">
                    <p className="uppercase">
                        View All
                    </p>
                    <BsArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div> 
        </div>
    );
}
 
export default WorkCard;