import { Programme } from "@components/components/component/programme";
import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { FounderCarousel } from "@components/components/component/prop-carousel";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import { LandingHero } from "@components/LandingHero/landing-hero";
import SEO from "@components/SEO/SEO";
import { AmenitiesHero } from "@components/AmenitiesHero/amenities-hero";
import { EnquiryForm } from "@components/components/component/enquiry-form";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { TermsAndConditions } from "@components/components/component/terms-and-conditions";
import { GalleryHero } from "@components/GalleryHero/gallery-hero";
import { FeaturedCollection } from "@components/FeaturedCollection/featured-collection";
import { WhatToExpect } from "@components/WhatToExpect/what-to-expect";
import { AdithTemp } from "@components/components/component/adith-temp";
import { WhatWeDo } from "@components/components/component/what-we-do";

const foundersData = [
    {
        images: [
            "/carousel1.jpg", // Replace with actual image of Dr. Zakir Thomas
            "/carousel3.jpg" // Additional placeholder image
        ],
        title: "Empowerment Coaching",
        description: `
            Shweta specialises in working with women aged 35 to 45, helping them unlock their fullest potential and design lives that align with their deepest desires. Her personalised coaching sessions enable her clients to break through barriers, embrace new possibilities, and achieve a fulfilling and holistic lifestyle.
        `,
        contactInfo: "zakir.thomas@espertifiscali.in, +91 9876543210"
    },
    {
        images: [
            "/carousel1.jpg", // Replace with actual image of Mr. Sanjai Kumar Verma
            "/carousel2.jpg" // Additional placeholder image
        ],
        title: "Relationship Coaching",
        description: `
            As a trusted Relationship Coach, Shweta supports her clients in two critical areas:


Self-Development & Life Alignment: Cultivating deeper, meaningful relationships with oneself and improving connections across key aspects of life—such as career, finances, and personal aspirations.
Conflict Resolution & Harmonious Relationships: Helping clients identify their true desires and offering actionable strategies to foster harmony with their partners, families, and environments.
        `,
        contactInfo: "sanjai.verma@espertifiscali.in, +91 9123456789"
    },

];

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Welcome to Concious Spaces"
                description="Learn With Veterans"
                keywords="Relationships, Mental Health"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <LandingHero />
                <div id="aboutus" className="pt-10">
                    <HomeBanner />
                </div>

                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <div id="founders"></div>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="properties" className="features">
                            {" "}
                            <MotionBTTContainer
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <SectionContainer className="feature-tabs">
                                    <div>
                                        <PageTitle
                                            className="text-center mx-auto"
                                            type="default"
                                        >
                                            Check out our Services!
                                        </PageTitle>
                                        <p style={{ textAlign: "center" }}>
                                            Hover over for More information
                                        </p>
                                    </div>
                                    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6">
                                            {foundersData.map(
                                                (founder, index) => (
                                                    <FounderCarousel
                                                        key={`founder-carousel-${index}`}
                                                        founder={founder}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </SectionContainer>
                            </MotionBTTContainer>
                            <ContentImage/>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <WhatToExpect /> */}
                    {/* <div id="amenities"></div>
                    <AmenitiesHero />
                    <FeaturedCollection /> */}
                    {/* <AdithTemp /> */}
                    {/* <GalleryHero /> */}
                    {/* <div id="programmes"></div>
                    <Programme /> */}
                    <div id="testimonials"></div>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            {" "}
                            <div>
                                <BadgeGroup alignment="left">
                                    <BadgeMessage>Testimonials</BadgeMessage>
                                    <BadgeIcon icon="twemoji:waving-hand" />
                                </BadgeGroup>
                            </div>
                            <PageTitle className="" type="default">
                                This is what our customers have to say about us!
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some questions?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                            <EnquiryForm />
                            <script
                                src="https://static.elfsight.com/platform/platform.js"
                                async
                            ></script>
                            <div
                                class="elfsight-app-043d75be-a24b-4e3f-ace8-2589f8ddcfd1"
                                data-elfsight-app-lazy
                            ></div>
                            {/* <div id="terms"></div>
                            <p></p>
                            <TermsAndConditions /> */}
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
