import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "Signature Approach",
        content:
            "Shweta’s coaching methodology is rooted in empathy, active listening, and a deep understanding of her client's unique challenges. Creating a safe and supportive environment empowers individuals to rediscover themselves, explore untapped potential, and embark on a transformation journey to create a magnanimous and deeply fulfilling life.",
        align: "right",
        image: "/image1.jpg"
    },
    {
        id: uuid(),
        title: "Impactful Workshops",
        content:
            "Shweta has facilitated workshops for many participants, combining practical tools and inspiring insights to drive meaningful change. Her sessions encourage self-reflection, ignite hope, and motivate individuals to overcome obstacles, leading to sustainable personal and professional growth.",
        align: "left",
        image: "/image2.jpg"
    },
    {
        id: uuid(),
        title: "Mission and Vision",
        content:
            "Shweta is passionate about helping people live more fulfilling, purpose-driven lives. Through her coaching and workshops, she strives to inspire individuals to take charge of their own stories, embrace growth, and achieve balance and harmony in all aspects of life.",
        align: "right",
        image: "/image3.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8 "
                >
                    <div
                        className={`process-item--image overflow-hidden rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16 transform transition-transform hover:scale-105"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
