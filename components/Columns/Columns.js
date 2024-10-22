import { useState, useEffect } from "react";
import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

// Assuming each of these entries represents a property with its testimonials
const testimonialsData = {
    "Consultancy Services": [
        {
            id: uuid(),
            name: "Rajesh Mehta",
            review: "The tax advisory services provided by Esperti Fiscali have been incredibly helpful for our company. Their expertise in corporate taxation and international tax laws saved us from significant compliance issues. Highly recommended!",
            rating: 5
        },
        {
            id: uuid(),
            name: "Anita Desai",
            review: "Esperti Fiscali helped us navigate the complex world of tax regulations with ease. Their personalized approach and attention to detail were impressive. We look forward to working with them again.",
            rating: 5
        }
    ],
    "Training Programs": [
        {
            id: uuid(),
            name: "Suresh Kumar",
            review: "The Advanced Programme on Withholding Taxes was incredibly informative. The trainers are industry veterans with real-world experience. I feel much more confident in handling tax compliance now.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Priya Malhotra",
            review: "I attended the programme on 'Taxation of Non-Residents', and it was a game-changer. The content was comprehensive, and the practical examples really helped me understand complex concepts.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Deepak Gupta",
            review: "The training program was well-organized, and the experts answered all our queries in great detail. The sessions on TDS and compliance responsibilities were particularly helpful for our team.",
            rating: 5
        }
    ],
    "Custom Corporate Training": [
        {
            id: uuid(),
            name: "Vijay Sharma",
            review: "We had Esperti Fiscali deliver a customized training session for our finance department, and it exceeded our expectations. The content was tailored to our industry and provided actionable insights.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Neha Patel",
            review: "The corporate training session on 'International Taxation' was very well-received by our team. The trainers explained complex topics with simplicity and clarity.",
            rating: 5
        },
        {
            id: uuid(),
            name: "Manish Tiwari",
            review: "The training conducted by Esperti Fiscali for our company was incredibly insightful. It has helped us streamline our tax compliance processes significantly.",
            rating: 5
        }
    ]
};

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
