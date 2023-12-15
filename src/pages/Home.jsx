import AboutCard from '../components/AboutCard'
import WorkCard from '../components/WorkCard'

const Home = () => {
    return (
        <>
            <AboutCard showPhotoSmallScreen={false} />
            <WorkCard 
                displayProjects={2}
            />
        </>
    );
}
 
export default Home;