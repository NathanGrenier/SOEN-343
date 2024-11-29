import { Form, useActionData } from "react-router-dom";
import type { ContactActionData } from "./contact.ts";

import Navbar from "../Components/Navbar.tsx";
import Footer from "../Components/Footer.tsx";

export default function Contact() {
    const actionData = useActionData() as ContactActionData;
    const { ok } = actionData || {};

    return (
        <>
            <Navbar />
            <div className="flex h-screen items-center justify-center bg-gray-100">
                <Form
                    method="post"
                    className="w-full max-w-lg rounded-lg bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
                        Contact Us
                    </h2>
                    {ok && (
                        <div className="mb-5 text-center text-green-600">
                            Your email was sent successfully!
                        </div>
                    )}
                    {ok === false && (
                        <div className="mb-5 text-center text-red-600">
                            There was an error sending your email. Please try again.
                        </div>
                    )}
                    <div className="mb-5">
                        <label className="mb-2 block font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="mb-2 block font-semibold text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label className="mb-2 block font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={5}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
                        Send
                    </button>
                </Form>
            </div>
            <Footer />
        </>
    );
}
