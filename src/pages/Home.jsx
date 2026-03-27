import Hero from '../components/sections/Hero'
import FAQ from '../components/sections/FAQ'
import ProcessFeed from "../components/sections/processFeed";
import TeachTools from '../components/sections/teachTools'

function Home () {
    return (
        <div>
            <Hero />
            <ProcessFeed />
            <TeachTools />
            <FAQ />
        </div>
    );
}

export default Home;