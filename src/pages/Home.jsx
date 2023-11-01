import AboutCard from '../components/AboutCard'
import WorkCard from '../components/WorkCard'

const Home = () => {
    return (
        <>
            <AboutCard />
            <WorkCard 
                displayProjects={3}
            />
        </>
    );
}
 
export default Home;