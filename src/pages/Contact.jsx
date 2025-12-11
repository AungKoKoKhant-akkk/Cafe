import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields')
            return
        }

        // Simulate form submission
        console.log('Form submitted:', formData)
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h1 className="text-6xl font-bold mb-4">Get In Touch</h1>
                    <p className="text-xl text-gray-600">
                        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <h2 className="text-3xl font-bold mb-6">Send Us A Message</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name *</span>
                                    </label>
                                    <input 
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email *</span>
                                    </label>
                                    <input 
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your.email@example.com"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Phone</span>
                                    </label>
                                    <input 
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="(123) 456-7890"
                                        className="input input-bordered w-full"
                                    />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Subject</span>
                                    </label>
                                    <select 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="catering">Catering Services</option>
                                        <option value="events">Private Events</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="complaint">Complaint</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Message *</span>
                                    </label>
                                    <textarea 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what's on your mind..."
                                        className="textarea textarea-bordered h-32 w-full"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary w-full btn-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {/* Address Card */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="card-title text-xl mb-2">Visit Us</h3>
                                        <p className="text-gray-600">
                                            123 Coffee Street<br />
                                            Downtown District<br />
                                            New York, NY 10001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="card-title text-xl mb-2">Call Us</h3>
                                        <p className="text-gray-600">
                                            Main: (555) 123-4567<br />
                                            Catering: (555) 123-4568
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">✉️</span>
                                    </div>
                                    <div>
                                        <h3 className="card-title text-xl mb-2">Email Us</h3>
                                        <p className="text-gray-600">
                                            info@cozycafe.com<br />
                                            catering@cozycafe.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card */}
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl">🕐</span>
                                    </div>
                                    <div>
                                        <h3 className="card-title text-xl mb-2">Opening Hours</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p className="flex justify-between gap-8">
                                                <span className="font-semibold">Monday - Friday:</span>
                                                <span>7:00 AM - 8:00 PM</span>
                                            </p>
                                            <p className="flex justify-between gap-8">
                                                <span className="font-semibold">Saturday:</span>
                                                <span>8:00 AM - 9:00 PM</span>
                                            </p>
                                            <p className="flex justify-between gap-8">
                                                <span className="font-semibold">Sunday:</span>
                                                <span>8:00 AM - 6:00 PM</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="card bg-gradient-to-br from-yellow-50 to-orange-50">
                            <div className="card-body">
                                <h3 className="card-title text-xl mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    <button className="btn btn-circle btn-outline">
                                        <span className="text-xl">📘</span>
                                    </button>
                                    <button className="btn btn-circle btn-outline">
                                        <span className="text-xl">📷</span>
                                    </button>
                                    <button className="btn btn-circle btn-outline">
                                        <span className="text-xl">🐦</span>
                                    </button>
                                    <button className="btn btn-circle btn-outline">
                                        <span className="text-xl">📌</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-8">Find Us On The Map</h2>
                    <div className="bg-base-200 rounded-2xl overflow-hidden" style={{ height: '400px' }}>
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            {/* Placeholder for map - you can integrate Google Maps here */}
                            <div className="text-center">
                                <span className="text-6xl mb-4 block">🗺️</span>
                                <p className="text-xl">Map Integration Here</p>
                                <p className="text-sm">(Google Maps / Mapbox)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" defaultChecked /> 
                            <div className="collapse-title text-xl font-medium">
                                Do you offer catering services?
                            </div>
                            <div className="collapse-content"> 
                                <p>Yes! We offer catering for events of all sizes. From corporate meetings to weddings, we can provide coffee, pastries, and light meals. Contact us at catering@cozycafe.com for a custom quote.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" /> 
                            <div className="collapse-title text-xl font-medium">
                                Can I reserve the cafe for a private event?
                            </div>
                            <div className="collapse-content"> 
                                <p>Absolutely! We love hosting private events. We can accommodate up to 50 guests for birthdays, book clubs, business meetings, and more. Reach out to discuss availability and pricing.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" /> 
                            <div className="collapse-title text-xl font-medium">
                                Do you have WiFi and power outlets?
                            </div>
                            <div className="collapse-content"> 
                                <p>Yes! We have free high-speed WiFi and plenty of power outlets throughout the cafe. We welcome remote workers and students who need a productive space to work.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" /> 
                            <div className="collapse-title text-xl font-medium">
                                Are you hiring?
                            </div>
                            <div className="collapse-content"> 
                                <p>We're always looking for passionate team members! Send your resume to info@cozycafe.com with the subject line "Career Opportunity" and we'll be in touch if there's a fit.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="faq-accordion" /> 
                            <div className="collapse-title text-xl font-medium">
                                Do you offer dairy-free and gluten-free options?
                            </div>
                            <div className="collapse-content"> 
                                <p>Yes! We have oat milk, almond milk, and soy milk for all our drinks. We also offer several gluten-free pastries and can accommodate most dietary restrictions. Just ask our staff!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
