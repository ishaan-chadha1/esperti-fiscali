import { useState, useEffect } from "react";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

// Assuming each of these entries represents a property with its testimonials
const testimonialsData = [
    {
        id: uuid(),
        name: "Natasha Fernandes - Clinical Psychologist",
        review: `I recently had the pleasure of working with Shweta, an exceptional empowerment coach, to gain clarity in building my business and making crucial career choices. Throughout our sessions, Shweta provided insightful guidance and unwavering support, which were instrumental in helping me gain the clarity I needed.

With Shweta’s expertise, I am able to feel more assured about my career choice. Moreover, Shweta helped me acknowledge and celebrate my achievements, which boosted my self-esteem and motivation.

I highly recommend Shweta to anyone seeking direction and empowerment in their professional and personal life. The positive impact of these sessions has been transformative, and I am grateful for the clarity and confidence I have gained to follow my path.`,
        rating: 5
    },
    {
        id: uuid(),
        name: "Nausheel - Sr Developer at Coca-Cola India",
        review: `The journey of more and more awareness, knowing exactly what would contribute most, opening up the question within to unlock the choices and possibilities. Applying the most relevant way of choosing ourselves in each situation, that's what working with Shweta Chadha has been like 🙂🙂

And of course, more ease, less judgments with projection and expectation free awareness - is the magic I've so kindly been gifted by her. Immensely grateful to her and the universe for arranging the classes to co-create the greater magical me 😘`,
        rating: 5
    },
    {
        id: uuid(),
        name: "Zarin Watson - Transformation Coach, Hyderabad",
        review: `An incredibly gifted facilitator, Shweta has an innate talent for demystifying what seems like complex concepts and presenting them with gentle grace and humour for the benefit of all in class. The ability to present simply and succinctly, and her patience with endless questioning is what sets her apart in her field. I thoroughly enjoyed Foundation and look back fondly on time spent with her. Thank you Shweta for being you and being generous with your time and value. I wish you the best as you continue to bring change one person at a time.`,
        rating: 5
    }
];


export const Columns = () => {
    // Initialize currentSlide to show the first set of testimonials
    const initialSlide = 0;
    const [currentSlide, setCurrentSlide] = useState(initialSlide);
    const [fadeIn, setFadeIn] = useState(true);

    const getVisibleTestimonials = () => {
        const testimonialsArray = Object.values(testimonialsData).flat();
        const startIndex = currentSlide * 4;
        return testimonialsArray.slice(startIndex, startIndex + 4);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false); // Start with fade out to transition
            setTimeout(() => {
                const testimonialsArray =
                    Object.values(testimonialsData).flat();
                const totalSlides = Math.ceil(testimonialsArray.length / 4);
                setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
                setFadeIn(true); // After updating, fade in the new testimonials
            }, 500); // Adjust this timing based on your desired effect
        }, 10000); // Update every 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <SectionContainer className="testimonials grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {getVisibleTestimonials().map((testimonial) => (
                <div
                    key={testimonial.id}
                    className="testimonial-item text-[#737373] text-left transition-opacity duration-500"
                    style={{ opacity: fadeIn ? 1 : 0 }}
                >
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {testimonial.name}
                    </h3>
                    <p>{testimonial.review}</p>
                    <div className="flex">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                            <Icon
                                key={starIndex}
                                icon="solar:star-bold"
                                className="h-5 mr-1 text-secondary-500"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
