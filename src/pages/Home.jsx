import Hero from '../components/sections/Hero'
import FAQ from '../components/sections/FAQ'
import ProcessFeed from "../components/sections/processFeed";

function Home () {
    return (
        <div>
            <Hero />
            <ProcessFeed />
            <FAQ />
        </div>
    );
}

export default Home;