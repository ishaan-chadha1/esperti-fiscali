import { SearchBar } from "@components/components/component/search-bar";
import styles from "./landing-hero.module.css"; // Import the CSS module
import { BookingButton } from "@components/components/component/booking-button";

export function LandingHero() {
    const backgroundImageUrl = "/backgroundimage.png?height=485&width=940";
    return (
        <div>
            {/* Wrapper div to contain all elements */}
            <section
                style={{
                    backgroundImage: `url('${backgroundImageUrl}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column", // Adjust the flex direction to column to stack items vertically
                    alignItems: "center", // Center vertically
                    height: "400px", // Set a fixed height to match your desired look
                    position: "relative", // Make sure the section is positioned relatively for absolute children
                    padding: "0 20px" // Add padding for better mobile view
                }}
                className={`${styles.landingHero} bg-cover bg-center py-16 px-8`}
            >
                {/* Text overlay */}
                <div className={styles.landingHeroText}>
                    <h1 className={styles.landingHeroTitle}>Shweta Chadha</h1>
                    <p className={styles.landingHeroSubtitle}>
                    |Empowerment & Relationship Coach 
                    </p>
                    <p className={styles.landingHeroSubtitle}>
                    | Transformational Facilitator 
                    </p>
                    <p className={styles.landingHeroSubtitle}>| Advocate for Holistic Growth
                    </p>
                </div>
            </section>
            {/* SearchBar container */}
            <div className="w-full flex justify-center mt-10">
                {/* Additional container for search bar */}
                {/* <SearchBar /> */}
                {/* <BookingButton /> */}
            </div>
        </div>
    );
}
