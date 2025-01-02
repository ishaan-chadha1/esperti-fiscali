import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        id: uuid(),
        title: "Who is Shweta Chadha?",
        isOpen: true,
        content: `Shweta Chadha is an Empowerment and Relationship Coach with nearly a decade of experience. She specialises in guiding individuals—particularly women aged 35 to 45—towards personal growth, building meaningful relationships and creating creative and fulfilling lives.`
    },
    {
        id: uuid(),
        title: "What services does Shweta offer?",
        isOpen: true,
        content: `Offers the following services:
        Empowerment Coaching: Helping women unlock their potential and align their lives with their dreams.
        Relationship Coaching:
        - Building deeper connections with oneself, career, finances, and life aspirations.
        - Resolving conflicts and creating harmonious relationships with partners, families, and environments.
        Workshops: Interactive sessions to break limiting beliefs, inspire courage, and foster confidence and personal transformation.`
    },
    {
        id: uuid(),
        title: "What makes Shweta’s coaching unique?",
        isOpen: false,
        content: `Shweta’s approach is empathetic, client-centred, and transformative. She creates a safe and supportive environment that encourages self-reflection and growth. Her strategies are personalised, actionable, and aimed at achieving sustainable results. Her experience as an energy shift facilitator (to create more incredible futures) is an inherent part of her sessions.`
    },
    {
        id: uuid(),
        title: "Who are Shweta’s typical clients?",
        isOpen: false,
        content: `While Shweta works with individuals from all walks of life, her primary focus is on:
        - Women aged 35 to 45 who are seeking clarity, purpose, and transformation in their personal and professional lives.
        - Those who desire to go beyond the normal into creating extraordinary and amazing living.
        - Individuals looking to resolve conflicts and build stronger relationships with self and others.`
    },
    {
        id: uuid(),
        title: "What are the key benefits of working with Shweta?",
        isOpen: false,
        content: `By working with Shweta, you can expect:
        - Greater clarity about your goals and desires.
        - Enhanced confidence and empowerment to overcome challenges.
        - Stronger and more meaningful relationships with yourself and others.
        - Tools and strategies to align life choices with personal values and aspirations.`
    },
    {
        id: uuid(),
        title: "Where are Shweta’s sessions conducted?",
        isOpen: false,
        content: `Both in-person (in select cities) and online coaching session options are available, making it easy for you to choose what works for you.`
    },
    {
        id: uuid(),
        title: "How can I book a session or workshop with Shweta?",
        isOpen: false,
        content: `To book a session, please reach out on Whatsapp to +91 9765390664 or write to us at spacesconscious@gmail.com.`
    },
    {
        id: uuid(),
        title: "How long are the coaching programs?",
        isOpen: false,
        content: `Shweta offers customized coaching programs tailored to individual needs. Depending on the client's goals, these programs may range from single sessions to long-term packages.`
    },
    {
        id: uuid(),
        title: "Are the workshops group-based or individual?",
        isOpen: false,
        content: `Shweta facilitates both group workshops and individual coaching sessions. Group workshops are designed for collective learning and interaction, while one-on-one sessions provide personalized guidance.`
    },
    {
        id: uuid(),
        title: "How can I determine if Shweta’s coaching is right for me?",
        isOpen: false,
        content: `If you are:
        - Feeling stuck in your personal or professional life.
        - Seeking clarity and direction.
        - Wanting to improve your relationships or resolve conflicts.
        - Looking to achieve greater alignment with your values and aspirations.
        … then Shweta’s coaching and workshops are likely a great fit for you. A discovery call or initial consultation can help you decide.`
    },
    {
        id: uuid(),
        title: "Does Shweta support men or individuals outside her primary demographic?",
        isOpen: false,
        content: `While Shweta focuses on women aged 35 to 45, she is open to working with individuals from all genders and age groups committed to personal growth and transformation.`
    },
    {
        id: uuid(),
        title: "What qualifications or experience does Shweta bring to her coaching?",
        isOpen: false,
        content: `Shweta has 9 years of experience as a facilitator and coach, working with individuals from diverse cultural and professional backgrounds. Her proven track record includes empowering clients to transcend limiting beliefs to achieve personal and professional goals.`
    },
    {
        id: uuid(),
        title: "How do I prepare for a session with Shweta?",
        isOpen: false,
        content: `To make the most of your session, consider:
        - Identifying specific areas of your life you want to work on.
        - Being open to self-reflection and honest conversations.
        - Setting clear goals and expectations for your coaching journey.`
    },
    {
        id: uuid(),
        title: "What results can I expect from working with Shweta?",
        isOpen: false,
        content: `Clients who work with Shweta often experience:
        - Increased self-awareness and confidence.
        - A clear action plan to achieve their goals.
        - Improved relationships and conflict resolution skills.
        - A greater sense of purpose, alignment, and fulfillment.`
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
            <div id="contact"></div>
        </SectionContainer>
    );
};
