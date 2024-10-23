import { useState } from "react";
import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent
} from "@components/components/ui/select";

export function ContactDropdown() {
    const [selectedFounder, setSelectedFounder] = useState("");

    const founderContacts = {
        "zakir-thomas": {
            contact:
                "Dr. Zakir Thomas: zakirthomas@espertifiscali.in, +91 9876543210",
            address:
                "Indian Revenue Service Officer, Expert in Intellectual Property and Tax Governance"
        },
        "sanjai-verma": {
            contact:
                "Sanjai Kumar Verma: sanjaiverma@espertifiscali.in, +91 9876543211",
            address:
                "Indian Revenue Service Officer, Expert in Withholding Tax and Faceless Schemes"
        },
        "pavan-kumar": {
            contact:
                "RSVS Pavan Kumar: pavan@espertifiscali.in, +91 9876543212",
            address:
                "Indian Revenue Service Officer, Expert in Corporate Taxation and Financial Investigations"
        }
    };

    return (
        <div
            key="1"
            className="contact-dropdown flex flex-col space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800"
        >
            <h2 className="text-2xl font-bold mb-1">Contact Us</h2>
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <Select onValueChange={setSelectedFounder}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Founder" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="zakir-thomas">
                                Dr. Zakir Thomas
                            </SelectItem>
                            <SelectItem value="sanjai-verma">
                                Sanjai Kumar Verma
                            </SelectItem>
                            <SelectItem value="pavan-kumar">
                                RSVS Pavan Kumar
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {selectedFounder && (
                    <div className="font-medium text-gray-500">
                        <p className="mb-2">
                            {founderContacts[selectedFounder].contact}
                        </p>
                        <p>{founderContacts[selectedFounder].address}</p>
                    </div>
                )}
                <div className="font-medium text-gray-500">
                    <p>General Enquiries: info@espertifiscali.in</p>
                </div>
            </div>
            <style jsx>{`
                .contact-dropdown {
                    min-width: 600px;
                    max-width: 800px;
                }

                @media (max-width: 600px) {
                    .contact-dropdown {
                        min-width: 100%;
                        padding: 1rem;
                    }
                    .text-2xl {
                        font-size: 1.5rem;
                    }
                    .flex.justify-between {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </div>
    );
}
