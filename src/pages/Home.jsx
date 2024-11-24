import AboutCard from '../components/AboutCard'
import WorkCard from '../components/WorkCard'

const Home = () => {
    return (
        <>
            <AboutCard small />
            <WorkCard 
                displayProjects={2}
            />
        </>
    );
}
 
export default Home;