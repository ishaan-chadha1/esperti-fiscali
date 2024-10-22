import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { BookingButton } from "@components/components/component/booking-button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-10">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer
                    transition={{ delay: 0.2, duration: 0.5 }}
                ></MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    {/* <PageTitle className="text-center mx-auto" type="heavy">
                        Welcome to TeaCorp Hotels
                    </PageTitle> */}
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        {/* <h3 className="text-3xl font-bold mb-4">
                            Home Away From Home
                        </h3> */}
                        <p>
                            Esperti Fiscali is an advisory platform set up by
                            three tax veterans, with decades of experience
                            working as IRS officers in the Government of India.{" "}
                        </p>
                    </Content>
                    {/* <div className="mt-20 mb-10 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#amenities">Amenities</Button>
                            <BookingButton />
                        </ButtonGroup>
                    </div> */}
                </MotionBTTContainer>
                {/* Appear Fourth */}
                {/* <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/main.jpg"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto overflow-hidden rounded-3xl"
                        />
                    </div>
                </MotionBTTContainer> */}
            </SectionContainer>
        </SectionContainer>
    );
};
