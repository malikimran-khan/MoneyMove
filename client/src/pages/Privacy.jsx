import React from "react";

export const Privacy = () => {
    return (
        <div className="w-full min-h-screen relative bg-white">
            {/* Header Image */}
            <div className="w-full relative">
                {/* Desktop Version */}
                <div className="hidden md:block relative w-full h-[500px] overflow-hidden">
                    <img
                        src="images/privacy.webp"
                        alt="Privacy"
                        className="absolute top-[25%] left-0 w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-[25%] left-0 w-full h-[400px] bg-black/40"></div>
                    <div className="absolute top-[3%] left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-3xl md:text-[36px] font-bold mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-white text-base md:text-[22px] font-semibold">
                            Your security happens to be our business.
                        </p>
                    </div>
                </div>

                {/* Mobile Version */}
                <div className="block md:hidden relative w-full h-[470px] overflow-hidden">
                    <img
                        src="images/privacy.webp"
                        alt="Privacy"
                        className="absolute top-[27%] left-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-[27%] left-0 w-full h-full bg-black/20"></div>
                    <div className="absolute top-[8%] left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-white text-3xl font-bold mb-2">
                            Privacy Policy
                        </h1>
                        <p className="text-white text-lg mt-5 font-semibold">
                            Your security happens to be our business.
                        </p>
                    </div>
                </div>
            </div>


            {/* Privacy Policy Text */}
            <div className="max-w-6xl mx-auto px-6 md:px-5  text-[#3f5224] space-y-6 mt-10 lg:mt-15">
                <p className="font-medium">
                    At <span className="text-[#8dc442] font-semibold">Money Move</span>, we are committed to protecting the privacy and confidentiality of our clients’ personal information. This privacy policy outlines the information we collect, how we use it, and how we protect it.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Information Collection and Use
                </h2>
                <p className="tracking-wide font-medium">
                    We collect personal information such as name, email address, phone number, and trading account details when users sign up for our copytrading platform. This information is used to provide our services, personalize trader allocation based on the user’s initial deposit and risk parameters, and share profits with clients. We also collect non-personal information such as IP address, browser type, and access times to improve our platform’s performance and usability.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Information Sharing and Disclosure
                </h2>
                <p className="font-medium">
                    Money Move does not sell or rent personal information to third parties. We may share personal information with selected professional and experienced traders for the purposes of facilitating trades and sharing profits with clients. We may also disclose personal information if required by law or if we believe that such disclosure is necessary to protect our rights or the rights of others.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Information Protection
                </h2>
                <p className="font-medium">
                    We take reasonable measures to protect personal information from unauthorized access, use, or disclosure. Our platform uses industry-standard encryption technology to protect personal information during transmission. We also use secure servers and firewalls to protect personal information from unauthorized access. Personal information is retained for as long as necessary to provide our services or until the user requests its deletion.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Third-Party Links and Cookies
                </h2>
                <p className="font-medium">
                    Our platform may contain links to third-party websites, and we are not responsible for the privacy practices of these websites. We use cookies to improve our platform’s performance and usability. Cookies are small text files stored on the user’s device that provide information about the user’s preferences and actions on our platform. Users can choose to disable cookies in their browser settings.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Changes to the Privacy Policy
                </h2>
                <p className="font-medium">
                    Money Move reserves the right to update this privacy policy at any time. Users will be notified of any changes to this policy through our platform or by email.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-[#8dc442] mt-4">
                    Contact Us
                </h2>
                <p className="font-medium">
                    If you have any questions or concerns regarding our privacy policy, please contact us at{" "}
                    <span className="text-[#8dc442] font-semibold">Contact@Moneymove.com</span>.
                </p>

                <p className="mt-4 font-medium">
                    By using our copytrading platform, users agree to this privacy policy and our terms and conditions.
                </p>
            </div>
        </div>
    );
};
