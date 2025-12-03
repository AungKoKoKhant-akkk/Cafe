import React from 'react'
import ContactCard from '../components/VisitUsComponents/ContactCard'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom';




function VitisUs() {
    return (
        <div className="pt-20 min-h-screen bg-base-100 ">
            {/* Header Section */}
            <div className="text-center py-12">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Visit Us</h1>
                <p className="text-xl text-gray-600">We'd love to see you at our cafe!</p>
            </div>

            {/* Contact Cards Grid */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Location Card */}

                    <ContactCard icon={<FaLocationDot className="w-12 h-12 text-yellow-800" />
                    }
                        title="Location">
                        <p className="text-gray-600 text-lg">123 Coffee Street</p>
                        <p className="text-gray-600 text-lg">Downtown, City 12345</p>
                    </ContactCard>



                    {/* Phone Card */}

                    <ContactCard icon={
                        <FaPhoneAlt className="w-12 h-12 text-yellow-800 " />

                    } title={"Phone"}>
                        <p className="text-gray-600 text-lg">(555) 123-4567</p>
                        <a href="tel:+15551234567" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                            Call Us
                        </a>
                    </ContactCard>



                    {/* Hours Card */}

                    <ContactCard icon={
                        <TbClockHour3 className="w-12 h-12 text-yellow-800 " />

                    } title={"Hours"}>
                        <p className="text-gray-600 text-lg">Monday - Friday: 7am - 8pm</p>
                        <p className="text-gray-600 text-lg">Saturday - Sunday: 8am - 9pm</p>
                    </ContactCard>


                    {/* Email Card */}

                    <ContactCard icon={
                        <MdOutlineMail className="w-12 h-12 text-yellow-800 " />

                    } title={"Email"}>
                        <p className="text-gray-600 text-lg">hello@coffeecafe.com</p>
                        <Link to="/contact" className="text-yellow-600 hover:text-yellow-700 font-semibold">
                            Send Email
                        </Link>
                    </ContactCard>


                </div>
            </div>

            {/* Map Section */}
            <div className="bg-base-300 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Us on the Map</h2>
                    <div className="rounded-lg overflow-hidden shadow-xl h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51761.19369905646!2d139.4987632486328!3d35.82264520000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018e9007460d51d%3A0x57717eb2e5fa76b0!2zRVNQUkVTU08gRCBXT1JLU-W_l-acqOW6lw!5e0!3m2!1sen!2sjp!4v1764723807404!5m2!1sen!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default VitisUs
