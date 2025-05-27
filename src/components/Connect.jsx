
import { useState } from "react";

export default function ContactSection() {
    const countries = [
        { code: "IN" },
        { code: "US" },
        { code: "GB" },
        { code: "CA" },
        { code: "AU" },
        { code: "DE" },
        { code: "FR" },
        { code: "JP" },
        { code: "CN" },
        { code: "BR" },
    ];


    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleSelect = (code) => {
        const selected = countries.find((c) => c.code === code);
        if (selected) setSelectedCountry(selected);
        setShowDropdown(false);
    };

    const interests = [
        "Show Your Interest",
        "Seo",
        "Tech Development",
        "Web Development",
        "Branding",
        "Lead Generation",
        "Predictive Marketing Strategies",
        "Marketing Strategies",
        "B2B Manufacturing",
        "Website in 3 days",
        "Other"
    ];

    return (
        <section className=" text-white px-6 py-24 md:px-32">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-20">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold leading-[1.3] mb-6">
                        Transform Your Business <br className="hidden md:block" />
                        with Our Marketing Solutions
                    </h1>
                    <p className="mb-8 text-lg text-gray-300">
                        Schedule a personalized demo and discovery call to explore:
                    </p>

                    <ul className="text-lg text-gray-300 list-disc list-inside space-y-4 mb-8">
                        <li>How our advanced bot agency operates to deliver exceptional results.</li>
                        <li>Ways to scale your marketing efficiently—better, faster, and more cost-effectively.</li>
                        <li>The perfect subscription plan tailored to meet your unique needs.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mb-4 mt-18">
                        Take the first step toward smarter marketing today!
                    </h2>

                    <div className="bg-white text-black p-10 rounded-xl text-base mt-8 space-y-3 shadow-lg max-w-1xl">
                        <p>□ <strong>Sales Enquiry:</strong> +91 9892969658</p>
                        <p>□ <strong>Support:</strong> +91 9892969658</p>
                        <p>□ <strong>Email:</strong> harry@thebot.agency</p>
                        <p>□ <strong>Address:</strong> Aaradhya Square B Wing 1005, Naidu Colony, Ghatkopar East Mumbai 400075.</p>
                    </div>
                </div>

                <div className="flex-1 bg-[#1e1833] text-white rounded-2xl p-10 shadow-2xl">
                    <h3 className="text-3xl font-bold mb-8">BOOK A CALL WITH US</h3>

                    <form className="space-y-6 text-lg">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full rounded-md ps-2 text-xl border-b-2 bg-[#d3d3d363] border-black outline-none py-3"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full rounded-md ps-2 text-xl border-b-2 bg-[#d3d3d363] border-black outline-none py-3"
                        />
                        <input
                            type="email"
                            placeholder="Work Email"
                            className="w-full rounded-md ps-2 text-xl border-b-2 bg-[#d3d3d363] border-black outline-none py-3"
                        />

                        <div className="flex items-center border-b-2 bg-[#d3d3d363] border-black  relative">
                            <div className="relative mr-3">
                                <button
                                    type="button"
                                    className="outline-none"
                                    onClick={() => setShowDropdown((prev) => !prev)}
                                >
                                    <img
                                        src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                                        alt={selectedCountry.code}
                                        className="w-9 h-9 mx-2 mt-1"
                                    />
                                </button>

                                {showDropdown && (
                                    <div className="absolute left-0 mt-2 bg-[#252323fb] border  rounded shadow-md z-10 max-h-60 overflow-y-auto w-44">
                                        {countries.map((country) => (
                                            <div
                                                key={country.code}
                                                onClick={() => handleSelect(country.code)}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-300  text-sm flex items-center gap-2"
                                            >
                                                <img
                                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                                    alt={country.code}
                                                    className="w-6 h-6"
                                                />
                                                <span className="text-xl">{country.code}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md ps-2 text-xl h-10  outline-none bg-[#d3d3d363]"
                            />
                        </div>

                        <textarea
                            placeholder="What tasks would you like to solve?"
                            className="w-full rounded-md ps-2 text-xl border-b-2 border-black outline-none p-3 bg-[#d3d3d363]"
                            rows={3}
                        />

                        <select className="w-full rounded-md ps-2 text-white text-xl cursor-pointer border-b-2 border-black outline-none py-3 bg-[#d3d3d363]">
                            {interests.map((interest, index) => (
                                <option className=" bg-[#1e1833] text-[#d85c8a] " key={index}>{interest}</option>
                            ))}
                        </select>

                        <button
                            type="submit"
                            className="w-full  ps-2 text-xl py-4 mt-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl"
                        >
                            Book Demo
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
