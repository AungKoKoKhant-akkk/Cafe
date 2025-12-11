import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className="min-h-screen">
            {/* Simple Top Banner */}
            <div className="pt-24 pb-12 px-4 text-center">
                <h1 className="text-6xl font-bold mb-4">Our Story</h1>
                <p className="text-xl text-gray-600">Discover the heart and soul of Cozy Cafe</p>
            </div>

            {/* Alternating Image/Text Sections */}
            <div className="max-w-7xl mx-auto">
                {/* Section 1 - Image Left */}
                <div className="grid md:grid-cols-2 gap-0 mb-0">
                    <div className="bg-linear-to-br from-amber-100 to-orange-200 min-h-[400px] flex items-center justify-center">
                        <div className="text-9xl">☕</div>
                    </div>
                    <div className="bg-white p-12 flex flex-col justify-center">
                        <div className="badge badge-primary mb-4">Chapter 1</div>
                        <h2 className="text-4xl font-bold mb-6">The Dream</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            It all started with a simple question: "What if we created a space where coffee 
                            wasn't just a drink, but an experience?"
                        </p>
                        <p className="text-lg text-gray-700">
                            In 2020, our founders turned that dream into reality. Armed with a vintage espresso 
                            machine, a passion for quality, and a vision for community, Cozy Cafe was born.
                        </p>
                    </div>
                </div>

                {/* Section 2 - Image Right */}
                <div className="grid md:grid-cols-2 gap-0 mb-0">
                    <div className="bg-white p-12 flex flex-col justify-center order-2 md:order-1">
                        <div className="badge badge-secondary mb-4">Chapter 2</div>
                        <h2 className="text-4xl font-bold mb-6">The Growth</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            What happened next surprised even us. The community embraced us with open arms. 
                            Strangers became regulars. Regulars became friends. Friends became family.
                        </p>
                        <p className="text-lg text-gray-700">
                            We expanded our menu, hired passionate team members, and won awards. But we never 
                            lost sight of what matters most: you, our community.
                        </p>
                    </div>
                    <div className="bg-linear-to-br from-green-100 to-emerald-200 min-h-[400px] flex items-center justify-center order-1 md:order-2">
                        <div className="text-9xl">🌱</div>
                    </div>
                </div>

                {/* Section 3 - Image Left */}
                <div className="grid md:grid-cols-2 gap-0 mb-0">
                    <div className="bg-linear-to-br from-pink-100 to-rose-200 min-h-[400px] flex items-center justify-center">
                        <div className="text-9xl">❤️</div>
                    </div>
                    <div className="bg-white p-12 flex flex-col justify-center">
                        <div className="badge badge-accent mb-4">Chapter 3</div>
                        <h2 className="text-4xl font-bold mb-6">The Mission</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Today, we're more committed than ever to serving exceptional coffee while making 
                            a positive impact. Every bean is ethically sourced. Every cup is crafted with care.
                        </p>
                        <p className="text-lg text-gray-700">
                            We're not just building a business—we're building a legacy of quality, 
                            community, and connection.
                        </p>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="bg-base-200 py-20 mt-0">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-5xl font-bold text-center mb-16">What Sets Us Apart</h2>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">🏆</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Award-Winning Quality</h3>
                            <p className="text-gray-600">
                                Recognized as "Best Local Cafe" two years running. Our commitment to excellence 
                                shows in every cup.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">🌍</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">100% Sustainable</h3>
                            <p className="text-gray-600">
                                From farm to cup, we prioritize sustainability. Compostable packaging, 
                                ethical sourcing, zero waste goals.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">👥</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                            <p className="text-gray-600">
                                We host events, showcase local artists, and donate to neighborhood causes. 
                                Your success is our success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Team - Cards with Quotes */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <h2 className="text-5xl font-bold text-center mb-4">The People Who Make It Happen</h2>
                <p className="text-center text-xl text-gray-600 mb-16">
                    Meet the passionate individuals behind every cup
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-primary text-primary-content rounded-full w-24">
                                    <span className="text-3xl">SM</span>
                                </div>
                            </div>
                            <h3 className="card-title text-2xl">Sarah Martinez</h3>
                            <p className="text-primary font-semibold">Head Barista</p>
                            <div className="divider"></div>
                            <p className="text-gray-600 italic">
                                "Every cup tells a story. My job is to make sure it's a great one."
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                12+ years experience | 3x Barista Champion | Coffee Sommelier
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-secondary text-secondary-content rounded-full w-24">
                                    <span className="text-3xl">DK</span>
                                </div>
                            </div>
                            <h3 className="card-title text-2xl">David Kim</h3>
                            <p className="text-secondary font-semibold">Head Baker</p>
                            <div className="divider"></div>
                            <p className="text-gray-600 italic">
                                "I wake up at 4 AM because I love what I do. Fresh pastries are worth it."
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                Trained in Paris | 8 years baking | Croissant specialist
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar placeholder mb-4">
                                <div className="bg-accent text-accent-content rounded-full w-24">
                                    <span className="text-3xl">ER</span>
                                </div>
                            </div>
                            <h3 className="card-title text-2xl">Emma Rodriguez</h3>
                            <p className="text-accent font-semibold">Cafe Manager</p>
                            <div className="divider"></div>
                            <p className="text-gray-600 italic">
                                "I don't just manage a cafe. I nurture a community."
                            </p>
                            <p className="text-sm text-gray-500 mt-4">
                                10+ years hospitality | Event organizer | Community builder
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* By The Numbers */}
            <div className="bg-linear-to-r from-yellow-50 via-orange-50 to-yellow-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Cozy Cafe By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">50,000+</div>
                            <div className="text-gray-600">Cups of Coffee</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-secondary mb-2">2,000+</div>
                            <div className="text-gray-600">Happy Customers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-accent mb-2">12</div>
                            <div className="text-gray-600">Team Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">4+</div>
                            <div className="text-gray-600">Years Strong</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                <h2 className="text-5xl font-bold mb-6">Come Experience It Yourself</h2>
                <p className="text-xl text-gray-600 mb-10">
                    We'd love to have you as part of our story. Your chapter starts with a single cup.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link to="/menu">
                        <button className="btn btn-primary btn-lg px-10">
                            Explore Menu
                        </button>
                    </Link>
                    <Link to="/contact">
                        <button className="btn btn-outline btn-lg px-10">
                            Visit Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About
