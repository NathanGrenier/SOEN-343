export default function Footer() {
  return (
    <footer className="border-custom-lightGray bg-custom-blueishGray relative left-0 w-full border-t bg-white">
      <div className="mx-auto max-w-screen-xl px-6 py-2">
        <div className="flex flex-wrap items-start justify-between">
          <div className="mb-4 flex space-x-4">
            <div className="flex space-x-4">
              <img
                src="../../assets/images/logo.png"
                alt="Logo"
                className="mr-4 h-10 w-auto"
              />

              {/* Instagram */}
              <a
                href="#"
                className="hover:text-custom-mainGreen flex items-center text-gray-500">
                <svg
                  className="mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2 1.2 1.2 0 0 0-1.2-1.2m4.6 2.42a7.6 7.6 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.16-1.77 4.7 4.7 0 0 0-1.77-1.15 7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47 4.8 4.8 0 0 0-1.77 1.15 4.7 4.7 0 0 0-1.15 1.77 7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43 4.7 4.7 0 0 0 1.15 1.77 4.8 4.8 0 0 0 1.77 1.15 7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47 4.7 4.7 0 0 0 1.77-1.15 4.85 4.85 0 0 0 1.16-1.77 7.6 7.6 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12M20.14 16a5.6 5.6 0 0 1-.34 1.86 3.06 3.06 0 0 1-.75 1.15 3.2 3.2 0 0 1-1.15.75 5.6 5.6 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.7 5.7 0 0 1-1.94-.3 3.3 3.3 0 0 1-1.1-.75 3 3 0 0 1-.74-1.15 5.5 5.5 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.5 5.5 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.1 3.1 0 0 1 1.1-.8A5.7 5.7 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.6 5.6 0 0 1 1.86.34 3.06 3.06 0 0 1 1.19.8 3.1 3.1 0 0 1 .75 1.1 5.6 5.6 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4M12 6.87A5.13 5.13 0 1 0 17.14 12 5.12 5.12 0 0 0 12 6.87m0 8.46A3.33 3.33 0 1 1 15.33 12 3.33 3.33 0 0 1 12 15.33" />
                </svg>
              </a>
              {/* Youtube */}
              <a
                href="#"
                className="hover:text-custom-mainGreen flex items-center text-gray-500">
                <svg
                  className="mr-1 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48 9.6 9.6 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78 2.5 2.5 0 0 0 .61-1 10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="hover:text-custom-mainGreen flex items-center text-gray-500">
                <svg
                  className="mr-1 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mb-4 flex space-x-20">
            <div>
              <h5 className="font-semibold">Our Company</h5>
              <ul className="mt-2 space-y-1">
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  About SwiftSend
                </li>
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  Why Choose SwiftSend
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Support</h5>
              <ul className="mt-2 space-y-1">
                <a href="/contact">
                  <li className="text-custom-gray hover:text-custom-mainGreen">
                    Contact Us
                  </li>
                </a>
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  Chat Bot
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold">Quick Links</h5>
              <ul className="mt-2 space-y-1">
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  Shipping
                </li>
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  Tracking
                </li>
                <li className="text-custom-gray hover:text-custom-mainGreen">
                  Services
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-custom-gray mt-6 text-left">
          <p>© 2024 SwiftSend. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
