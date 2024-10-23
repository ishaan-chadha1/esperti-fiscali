import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";
import { ContactDropdown } from "@components/components/component/contact-dropdown";
import { BookingButton } from "@components/components/component/booking-button";

const DATA = [
    {
        title: "Company",
        items: [
            {
                label: "About",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Twitter",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://github.com/ishaan-chadha1",
                target: "_blank"
            }
        ]
    },
    {
        title: "Contact Us",
        items: [
            {
                label: "Management: mehulgoenka@teacorphotels.com",
                href: "mailto:mehulgoenka@teacorphotels.com"
            },
            {
                label: "Tea County: +91 7086061222 / 7578010089, hotelteacounty@gmail.com",
                href: "mailto:hotelteacounty@gmail.com"
            },
            {
                label: "Tea Pavilion: teapavilion@gmail.com, +91 9632658687",
                href: "mailto:teapavilion@gmail.com"
            },
            {
                label: "Tea Harbour: teaharbour23@gmail.com, +91 9741848372",
                href: "mailto:teaharbour23@gmail.com"
            },
            {
                label: "Tea Square: teasquare14@gmail.com, +91 9606699214",
                href: "mailto:teasquare14@gmail.com"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16 flex justify-center items-center">
                    <div
                        id="contact"
                        className="footer-links mb-12 flex justify-center"
                    >
                        <ContactDropdown />
                    </div>
                </div>
            </SectionContainer>
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Esperti Fiscali. All rights reserved.
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
