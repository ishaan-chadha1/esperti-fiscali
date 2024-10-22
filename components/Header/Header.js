import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { BookingButton } from "@components/components/component/booking-button";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/EspertiFiscaliLogo.png"
                                alt="logo"
                                className="h-20 w-auto "
                                style={{ borderRadius: 60 }}
                                height="150"
                                width="150"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto ">
                    <Nav />
                    <div className="ml-5">
                        <BookingButton />
                    </div>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
