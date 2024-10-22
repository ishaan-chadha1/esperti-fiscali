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
            "/placeholder1.jpg", // Replace with actual image of Dr. Zakir Thomas
            "/placeholder1-2.jpg" // Additional placeholder image
        ],
        title: "Dr. Zakir Thomas",
        description: `
            Indian Revenue Service Officer of the 1989 batch, retired as Director General (Systems), Income Tax department. 
            He holds a Ph.D. in Public Administration, Masters in Intellectual Property, Commerce and Technology (UNH, US), 
            LLB (DU), and MSc (Physics). He was Indian delegate to OECD tax forum and other diplomatic delegations on tax 
            governance. An expert in Intellectual Property law, he has delivered lectures on Copyrights and Patents in 
            various national and international forums and has authored several books, chapters, and papers in peer-reviewed 
            journals. He has worked in the ministries of finance, education, and science and technology.
        `,
        contactInfo: "zakir.thomas@espertifiscali.in, +91 9876543210"
    },
    {
        images: [
            "/placeholder2.jpg", // Replace with actual image of Mr. Sanjai Kumar Verma
            "/placeholder2-2.jpg" // Additional placeholder image
        ],
        title: "Mr. Sanjai Kumar Verma",
        description: `
            Indian Revenue Service Officer of the 1988 batch, retired as Member, Central Board of Direct Taxes 
            (Systems and Faceless Schemes), the apex policy-making body of the Income Tax department. He holds a Post Graduate 
            Diploma in Financial Management. A keen trainer, he has trained Income tax department officials on tax laws and 
            helped organise training programs for the corporate sector on TDS. An expert in withholding tax regimes in India, 
            he has authored ‘TDS is not Tedious’. He is a veteran in Technology Management and led the team that set up 
            Centralised Processing Centre (CPC), in Bangalore.
        `,
        contactInfo: "sanjai.verma@espertifiscali.in, +91 9123456789"
    },
    {
        images: [
            "/placeholder3.jpg", // Replace with actual image of Mr. RSVS Pavan Kumar
            "/placeholder3-2.jpg" // Additional placeholder image
        ],
        title: "Mr. RSVS Pavan Kumar",
        description: `
            Indian Revenue Service Officer of the 1987 batch, retired as Principal Commissioner of Income Tax. He did his 
            graduation in engineering and law and holds post graduate degrees in Economics and Finance. A tax administration 
            veteran, he has worked in all areas including assessment of complex cases, financial investigation, search and 
            seizure and surveys, corporate taxation, charitable Trusts and international taxation. Dealt with financial 
            issues of Housing and Real Estate Sector while on deputation to a State Housing Board. After opting for VRS, 
            he has been engaged as Direct Tax Advisor to diversified business houses and practises as a tax advocate, 
            specialising in litigation.
        `,
        contactInfo: "pavan.kumar@espertifiscali.in, +91 9234567890"
    }
];

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Welcome to Esperti Fiscali"
                description="Tea Corp Hotels, Home Away From Home , Corporate Accomodation"
                keywords="corporate accommodation, hotels, Bangalore, Tea Corp"
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
                                            Meet our Founders!
                                        </PageTitle>
                                        <p style={{ textAlign: "center" }}>
                                            Hover over for More information
                                        </p>
                                    </div>
                                    <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
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
                            <WhatWeDo />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    {/* <WhatToExpect /> */}
                    {/* <div id="amenities"></div>
                    <AmenitiesHero />
                    <FeaturedCollection /> */}
                    {/* <AdithTemp /> */}
                    {/* <GalleryHero /> */}
                    <Programme />
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
                                This is what our customers have to say about our
                                properties
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
                                Got some questions about Tea House? <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                            <div id="contact"></div>
                            <EnquiryForm />
                            <script
                                src="https://static.elfsight.com/platform/platform.js"
                                data-use-service-core
                                defer
                            ></script>
                            <div
                                class="elfsight-app-7f278293-2342-4100-8d8b-f34f67e0ee88"
                                data-elfsight-app-lazy
                            ></div>
                            <div id="terms"></div>
                            <TermsAndConditions />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
