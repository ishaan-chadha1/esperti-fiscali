import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "What services do Esperti Fiscali offer?",
        isOpen: true,
        content:
            "Esperti Fiscali provides tax consultancy services, direct tax advisory, and specialized training programs on withholding taxes, corporate taxation, and compliance-related matters."
    },
    {
        id: uuid(),
        title: "How can I sign up for the upcoming tax training programs?",
        isOpen: true,
        content:
            "You can sign up for our upcoming programs directly through our website on the 'Upcoming Programmes' page or contact us through the 'Get in Touch' section for more details."
    },
    {
        id: uuid(),
        title: "Who are the experts behind Esperti Fiscali?",
        isOpen: false,
        content:
            "Esperti Fiscali is led by industry veterans including Dr. Zakir Thomas, Sanjai Kumar Verma, and RSVS Pavan Kumar, who have years of experience in tax administration and corporate tax advisory."
    },
    {
        id: uuid(),
        title: "Do you offer personalized tax advisory for corporations?",
        isOpen: false,
        content:
            "Yes, Esperti Fiscali provides personalized tax advisory services for corporations, covering complex cases of international taxation, compliance, and withholding taxes."
    },
    {
        id: uuid(),
        title: "What is the duration of each tax training program?",
        isOpen: false,
        content:
            "The duration of each program varies, but most of our advanced training programs last between one to two days, with detailed schedules provided on the 'Upcoming Programmes' page."
    },
    {
        id: uuid(),
        title: "Can I get a certificate after completing a training program?",
        isOpen: false,
        content:
            "Yes, participants will receive a certificate of completion for attending any of our training programs."
    },
    {
        id: uuid(),
        title: "Are the training programs available online?",
        isOpen: false,
        content:
            "Yes, we offer both in-person and online training programs. You can choose the mode that works best for you while registering for the program."
    },
    {
        id: uuid(),
        title: "How can I schedule a consultation with one of the experts?",
        isOpen: false,
        content:
            "To schedule a consultation, please fill out the form on the 'Get in Touch' page, and one of our representatives will contact you to set up an appointment."
    },
    {
        id: uuid(),
        title: "Do you offer consultancy services to individuals as well?",
        isOpen: false,
        content:
            "Yes, we provide tax consultancy services not only to corporations but also to individuals requiring assistance with personal tax matters, compliance, and international tax laws."
    },
    {
        id: uuid(),
        title: "How can I cancel or reschedule my participation in a training program?",
        isOpen: false,
        content:
            "You can cancel or reschedule your participation by contacting our support team through the 'Get in Touch' page. Please make sure to inform us at least 48 hours in advance."
    },
    {
        id: uuid(),
        title: "What are the fees for your tax consultancy services?",
        isOpen: false,
        content:
            "Our consultancy fees vary depending on the scope and complexity of the case. Please contact us for a personalized quote based on your requirements."
    },
    {
        id: uuid(),
        title: "Can I receive custom training tailored to my company's needs?",
        isOpen: false,
        content:
            "Yes, we offer custom training programs tailored to meet the specific needs of your company. Contact us to discuss your requirements in detail."
    }
];

const accordionItemType = {
    top: "rounded-t-lg",
    default: "border rounded-none border-t-0",
    bottom: "border border-t-0 rounded-b-lg"
};

export const Accordion = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((accordionItem, index) => (
                <div
                    key={accordionItem.id}
                    id={accordionItem.id}
                    className={clsx(
                        "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                        {
                            [accordionItemType.top]: index === 0,
                            [accordionItemType.default]:
                                index > 0 && index < accordionData.length - 1,
                            [accordionItemType.bottom]:
                                index === accordionData.length - 1
                        }
                    )}
                >
                    <h2 className="accordion-item--heading mb-0">
                        <button
                            className="group relative flex w-full font-semibold items-center rounded-t-lg border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                            type="button"
                            aria-expanded={accordionItem.isOpen}
                            onClick={() =>
                                accordionClickHandle(accordionItem.id)
                            }
                        >
                            {accordionItem.title}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "accordion-item--content py-4 px-5 text-base",
                            {
                                hidden: activeAccordion !== accordionItem.id, // Use hidden class to animate height to 0
                                "!visibility block":
                                    activeAccordion === accordionItem.id // Use block class to show content again
                            }
                        )}
                    >
                        <p>{accordionItem.content}</p>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
