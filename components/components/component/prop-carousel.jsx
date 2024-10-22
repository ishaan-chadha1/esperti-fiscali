import { useState, useEffect } from "react";
import Image from "next/image";

export function FounderCarousel({ founder }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(
                (currentSlide) => (currentSlide + 1) % founder.images.length
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [founder.images.length]);

    return (
        <div
            className={`max-w-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform ${
                isHovered ? "scale-105" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                {/* Carousel Image Container */}
                {founder.images.map((src, index) => (
                    <Image
                        key={src}
                        width={400}
                        height={400}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className={`object-cover w-full h-64 transition-opacity duration-500 ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            position:
                                index === currentSlide ? "static" : "absolute"
                        }}
                    />
                ))}
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-lg leading-tight truncate">
                    {founder.title}
                </h3>
                <div
                    className={`transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <p className="mt-2 text-gray-600 text-sm">
                        {founder.description}
                    </p>
                    <div className="px-6 pt-10 pb-6">
                        <p className="text-sm text-gray-600">
                            Contact: {founder.contactInfo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
