import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      {/* SECTION 1 : PRIVACY HEADER */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#02091c] rounded-[48px] py-28 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-normal font-zendots text-white tracking-wide">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION 2 : PRIVACY POLICY CONTENT */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-gray-800 font-poppins font-normal">

          {/* Personal Statement */}
          <h2 className="text-xl font-medium mb-2">
            Personal Statement
          </h2>
          <p className="text-gray-600/50 leading-relaxed mb-6">
            Hezee Access IT Infrastructure Pvt Ltd (“we,” “our,” or “us”) operates the HRMS by Hezee Access mobile application.
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use
            our Service and the choices you have associated with that data.
          </p>
          <div className="border-b border-pink-400 mb-8"></div>

          {/* Information Collection */}
          <h2 className="text-xl font-medium mb-2">
            Information Collection And Use
          </h2>
          <p className="text-gray-600/50 mb-3">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <ul className="list-disc pl-6 text-gray-600/50 space-y-2 mb-6">
            <li>
              <span className="font-medium text-gray-800">
                Personal Data:
              </span>{" "}
              While using our app, we may ask you to provide personally identifiable information such as your email address,
              full name, employee ID, and phone number.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Usage Data:
              </span>{" "}
              We may collect information on how the Service is accessed (e.g., device type, IP address, and unique device identifiers).
            </li>
          </ul>
          <div className="border-b border-pink-400 mb-8"></div>

          {/* Location */}
          <h2 className="text-xl font-medium mb-2">
            Precise Location Data (GPS)
          </h2>
          <p className="text-gray-600/50 mb-3">
            To provide core HR functions, this app requires access to your device’s precise location (GPS).
          </p>
          <ul className="list-disc pl-6 text-gray-600/50 space-y-2 mb-6">
            <li>
              <span className="font-medium text-gray-800">
                Purpose:
              </span>{" "}
              We collect location data specifically for Punch-in and Punch-out verification.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Usage:
              </span>{" "}
              Location data is only captured at the moment you perform an attendance action.
            </li>
          </ul>
          <div className="border-b border-pink-400 mb-8"></div>

          {/* Permissions */}
          <h2 className="text-xl font-medium mb-2">
            Permissions & Storage
          </h2>
          <p className="text-gray-600/50 mb-3">
            The app requests the following permissions to function correctly:
          </p>
          <ul className="list-disc pl-6 text-gray-600/50 space-y-2 mb-6">
            <li>
              <span className="font-medium text-gray-800">
                Camera:
              </span>{" "}
              Used for profile picture uploads or document scanning.
            </li>
            <li>
              <span className="font-medium text-gray-800">
                Storage (Files and Media):
              </span>{" "}
              Required to allow users to download Payslips, tax documents, and upload necessary HR onboarding documents.
            </li>
          </ul>

          {/* Use of Data */}
          <h2 className="text-xl font-medium mt-8 mb-2">
            Use Of Data
          </h2>
          <ul className="list-disc pl-6 text-gray-600/50 space-y-2 mb-6">
            <li>Verify attendance and process payroll.</li>
            <li>Provide and maintain the Service.</li>
            <li>Notify you about company updates or changes to our Service.</li>
            <li>Provide customer support.</li>
          </ul>
          <div className="border-b border-pink-400 mb-8"></div>

          {/* Retention */}
          <h2 className="text-xl font-medium mb-2">
            Data Retention
          </h2>
          <p className="text-gray-600/50 mb-6">
            We will retain your Personal Data and Location logs only for as long as is necessary for the purposes set out in
            this Privacy Policy.
          </p>
          <div className="border-b border-pink-400 mb-8"></div>

          {/* Service Providers */}
          <h2 className="text-xl font-medium mb-2">
            Service Providers
          </h2>
          <p className="text-gray-600/50">
            We may employ third-party companies (such as Firebase for notifications) to facilitate our Service.
          </p>

          {/* Security */}
          <div className="border-b border-pink-400 my-8"></div>
          <h2 className="text-xl font-medium mb-2">
            Security
          </h2>
          <p className="text-gray-600/50 mb-6">
            The security of your data is important to us.
          </p>

          {/* Children's Privacy */}
          <div className="border-b border-pink-400 my-8"></div>
          <h2 className="text-xl font-medium mb-2">
            Children’s Privacy
          </h2>
          <p className="text-gray-600/50 mb-6">
            Our Service does not address anyone under the age of 13.
          </p>

          {/* Contact */}
          <div className="border-b border-pink-400 my-8"></div>
          <h2 className="text-xl font-medium mb-2">
            Contact Us
          </h2>
          <p className="text-gray-600/50 mb-2">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="text-gray-600/50">
            <span className="font-medium text-gray-800">By email:</span>{" "}
            <a href="mailto:info.hezee@gmail.com" className="text-blue-600 underline">
              info.hezee@gmail.com
            </a>
          </p>
          <p className="text-gray-600/50 mt-1">
            <span className="font-medium text-gray-800">By website:</span>{" "}
            <a
              href="https://hezee.co.in/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              https://hezee.co.in/
            </a>
          </p>

        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
