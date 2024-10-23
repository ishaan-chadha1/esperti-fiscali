import { Card } from "@components/components/ui/card";
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@components/components/ui/popover";

// Array of program data
const programs = [
    {
        title: "Advanced Programme on Withholding Taxes",
        code: "24800101",
        topics: [
            "Taxation of Compensation Structure (including expatriate employees payments)",
            "TDS on Payments to Non-Residents",
            "TDS, TCS on other payments",
            "Compliance Responsibilities (including E-filing issues)"
        ],
        location: "The Oberoi Hotel, M.G. Road, Bengaluru",
        instructor: "John Doe", // Add instructor as needed
        price: "$799", // Add price if available
        dateRange: "14.10.2024",
        schedule: {
            startDate: "October 14, 2024",
            endDate: "October 14, 2024",
            time: "9:30 AM - 6:00 PM",
            details: [
                "9:30 AM - 10:00 AM: Registration of participants",
                "10:00 AM - 11:30 AM: Withholding Taxes on Compensation (S.192)",
                "11:30 AM - 11:45 AM: Coffee break",
                "11:45 AM - 1:15 PM: Withholding Taxes on Payments to Non-Residents (S.195)",
                "1:15 PM - 2:00 PM: Lunch break",
                "2:00 PM - 3:30 PM: Withholding Taxes on Other payments and TCS Provisions",
                "3:30 PM - 3:45 PM: Tea break",
                "3:45 PM - 5:00 PM: Procedural aspects of Withholding Tax (Compliance, E-filing and System Issues)",
                "5:00 PM - 6:00 PM: Q&A Session with Experts and Open House"
            ]
        }
    },
    {
        title: "Programme for Non Profit Sector",
        code: "24800201",
        topics: [
            "Tax issues relevant to the sector including compliance challenges"
        ],
        location: "Bengaluru",
        instructor: "Jane Smith", // Add instructor as needed
        price: "$499", // Add price if available
        dateRange: "TBD",
        schedule: {
            startDate: "TBD",
            endDate: "TBD",
            time: "9:00 AM - 5:00 PM (Monday - Friday)"
        }
    },
    {
        title: "Advanced Programme on Withholding Taxes",
        code: "24800102",
        topics: [
            "Taxation of Compensation Structure (including expatriate employees payments)",
            "TDS on Payments to Non-Residents",
            "TDS, TCS on other payments",
            "Compliance Responsibilities (including E-filing issues)"
        ],
        location: "Chennai",
        instructor: "John Doe", // Add instructor as needed
        price: "$799", // Add price if available
        dateRange: "TBD",
        schedule: {
            startDate: "TBD",
            endDate: "TBD",
            time: "9:00 AM - 5:00 PM (Monday - Friday)"
        }
    },
    {
        title: "Programme for Non Profit Sector",
        code: "24800202",
        topics: [
            "Tax issues relevant to the sector including compliance challenges"
        ],
        location: "Chennai",
        instructor: "Jane Smith", // Add instructor as needed
        price: "$499", // Add price if available
        dateRange: "TBD",
        schedule: {
            startDate: "TBD",
            endDate: "TBD",
            time: "9:00 AM - 5:00 PM (Monday - Friday)"
        }
    },
    {
        title: "Advanced Programme on Withholding Taxes",
        code: "24800103",
        topics: [
            "Taxation of Compensation Structure (including expatriate employees payments)",
            "TDS on Payments to Non-Residents",
            "TDS, TCS on other payments",
            "Compliance Responsibilities (including E-filing issues)"
        ],
        location: "Hyderabad",
        instructor: "John Doe", // Add instructor as needed
        price: "$799", // Add price if available
        dateRange: "TBD",
        schedule: {
            startDate: "TBD",
            endDate: "TBD",
            time: "9:00 AM - 5:00 PM (Monday - Friday)"
        }
    }
];

export function Programme() {
    return (
        <Card
            className="w-full max-w-2xl mx-auto px-6 py-12 grid gap-6 border-black-400"
        >
            <div className="grid gap-2 text-center">
                <h2 className="text-2xl font-bold">
                    Upcoming Training Programmes
                </h2>
                <p className="text-muted-foreground">
                    Check out our upcoming training programmes and sign up
                    today.
                </p>
            </div>
            <div className="grid gap-6">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="grid gap-4 border-2 border-gray-400 rounded-lg p-4 relative transition-transform transform hover:scale-105 hover:z-10 hover:shadow-lg"
                    >
                        <div className="grid gap-1 text-center">
                            <h3 className="text-xl font-semibold">
                                {program.title}
                            </h3>
                            <p className="text-muted-foreground text-xl font-medium text-center">
                                Program Code: {program.code}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 items-start">
                            <div className="grid gap-1">
                                <p className="font-medium">Topics Covered:</p>
                                <ul className="list-disc pl-4 text-muted-foreground">
                                    {program.topics.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="grid gap-1">
                                <p className="font-medium">Details:</p>
                                <p className="text-muted-foreground">
                                    Location: {program.location}
                                    <br />
                                    Instructor: {program.instructor}
                                    <br />
                                    Price: {program.price}
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary rounded-md px-3 py-1 text-primary-foreground text-lg font-medium absolute bottom-4 right-4">
                            {program.dateRange}
                        </div>

                        {program.schedule.details && ( // Only display if schedule details exist
                            <Popover>
                                <PopoverTrigger asChild>
                                    <div className="absolute top-4 right-4 bg-primary rounded-md px-3 py-1 text-primary-foreground text-sm font-medium cursor-pointer">
                                        <div className="mt-10">
                                            View Schedule
                                        </div>
                                    </div>
                                </PopoverTrigger>
                                <PopoverContent className="w-[400px] p-6 grid gap-4 bg-black text-white">
                                    <div className="grid gap-1 text-center">
                                        <h3 className="text-xl font-semibold">
                                            {program.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Program Code: {program.code}
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid gap-1">
                                            <p className="font-medium">
                                                Schedule:
                                            </p>
                                            <div className="text-muted-foreground">
                                                <p>
                                                    Start Date:{" "}
                                                    {program.schedule.startDate}
                                                </p>
                                                <p>
                                                    End Date:{" "}
                                                    {program.schedule.endDate}
                                                </p>
                                                <p>
                                                    Time:{" "}
                                                    {program.schedule.time}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="grid gap-1">
                                            <p className="font-medium">
                                                Event Schedule Details:
                                            </p>
                                            <ul className="list-disc pl-4 text-muted-foreground">
                                                {program.schedule.details.map(
                                                    (detail, index) => (
                                                        <li key={index}>
                                                            {detail}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>
                ))}
            </div>
        </Card>
    );
}
