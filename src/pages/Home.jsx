import Hero from '../components/sections/Hero'
import FAQ from '../components/sections/FAQ'
import ProcessFeed from "../components/sections/processFeed";
import TeachTools from '../components/sections/teachTools'
import StudentTools from "../components/sections/stuTools";

function Home () {
    return (
        <div>
            <Hero />
            <ProcessFeed />
            <TeachTools />
            <StudentTools />
            <FAQ />
        </div>
    );
}

export default Home;