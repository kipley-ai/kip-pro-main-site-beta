import { useRef } from "react";
import Layout from "@/components/Layout";
import Clients from "./Clients";
import Main from "./Main";
import Testimonial from "./Testimonial";
import Team from "./Team";
import Experiences from "./Experiences";
import Values from "./Values";
import Reviews from "@/components/Reviews";
import JoinCommunity from "@/components/JoinCommunity";

import { reviews } from "@/mocks/reviews";

const AboutUsPage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <Clients />
            {/* <Main scrollToRef={scrollToRef} /> */}
            {/* <Testimonial /> */}
            <Team />
            <Experiences />
            <Values />
            {/* <Reviews reviews={reviews} /> */}
            <JoinCommunity title="Download our whitepaper" />
        </Layout>
    );
};

export default AboutUsPage;
