import ExtraSection from "../ExtraSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;