import React, { useState, useEffect } from "react";

interface Address {
    display_name: string;
    address: {
        city?: string;
        country?: string;
    };
}

const paymentForm = () => {
    const[email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cvvVisible, setCvvVisible] = useState(false);
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [addressSuggestions, setAddressSuggestions] = useState<Address[]>([]);
    const [message, setMessage] = useState('');

    //cvv functions
    const toggleCvvVisibility = () => {
        setCvvVisible(!cvvVisible);
    };

    //expiry date functions
    const expiry_format = (value: string) => {
        const expdate = value;
        const expDateFormatter =
            expdate.replace(/\//g, "").substring(0, 2) +
            (expdate.length > 2 ? "/" : "") +
            expdate.replace(/\//g, "").substring(2, 4);
        return expDateFormatter;
    };

    const isValidExpiryDate = (value: string): boolean => {
        const month = value.substring(0, 2);
        const year = value.substring(3, 5);
    
        const monthNum = parseInt(month, 10);
        if (monthNum < 1 || monthNum > 12) {
            return false; 
        }
        const yearNum = parseInt(year, 10) + 2000;
    
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
    
        if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
            return false; 
        }
    
        return true;
    };

    //card number functions
    const creditCard_format = (value: string) => {
        const cc = value.replace(/[^0-9]/gi, "").substring(0, 16);;
        const creditCardFormatter = [];
        for (let i = 0; i < cc.length; i += 4) {
            creditCardFormatter.push(cc.substring(i, i + 4));
        }
        return creditCardFormatter.length > 1 ? creditCardFormatter.join(" ") : value;
    }

    //email functions
    const validateEmail = (email: string): boolean => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    //This function is to allow users to enter a specific set of keys only (makes error checking simpler)
    const isAllowedKey = (key: string) => {
        return (
            key === 'Backspace' || 
            key === 'Delete' || 
            key === 'ArrowLeft' || 
            key === 'ArrowRight'
        );
    };

    useEffect(() => {
        if (addressInput) {
            const fetchSuggestions = async () => {
                //no more than one request/second allowed. Open source api with no api key necessary for it to work
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(addressInput)}`);
                const data = await response.json();
                setAddressSuggestions(data);
            };

            fetchSuggestions();
        } else {
            setAddressSuggestions([]);
        }
    }, [addressInput]);

    //handle functions
    const handleAddressSelect = (address: Address) => {
        console.log('Selected Address:', address);
        const display = address.display_name; //the display name contains the city and country
        const parts = display.split(',').map(part => part.trim());
        setAddressInput(address.display_name);
        setCity(parts[parts.length-3]); //in the display, the city is at this position always
        setCountry(parts[parts.length-1]); //in the display, the country is the last element always
        setAddressSuggestions([]);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!isValidExpiryDate(expiryDate)){
            alert('Invalid expiry date');
            return;
        }

        if(!validateEmail(email)){
            alert('Invalid email');
            return;
        }

        setMessage('Payment successfully submitted');
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    };

    const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedDate = expiry_format(e.target.value);
        setExpiryDate(formattedDate);
    }

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(e.target.value);
    }

    return(
    <div>
        <h1 className="text-3xl font-bold text-justify text-black-600 ms-4 my-4">Payment Checkout</h1>
        <form onSubmit={handleSubmit} className="bg-[#d4d4d8] max-w-[400px] mx-auto my-[80px] h-auto pt-[70px] p-[35px] rounded-[5px] relative">
            <h2 className="block text-lg font-medium text-gray-700 mb-2">Enter Payment Information</h2> 
            <div className="form-group my-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                <div className="relative">
                <input
                value={email}
                className="border border-gray-300 rounded-md p-2 w-full pl-10"
                onChange={handleEmail}
                pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                required
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </div>
            </div>

            <div className="form-group my-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number:</label>
                <div className="relative">
                <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX"
                value={creditCard_format(cardNumber)}
                className="border border-gray-300 rounded-md p-2 w-full pl-10"
                onChange={handleCardNumber}
                required
                onKeyDown = { (event) => 
                                {if (!/[0-9]/.test(event.key) && !(isAllowedKey(event.key))) {
                                    event.preventDefault();
                                }
                                }
                            }
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                </div>
            </div>

            <div className="flex space-x-4">
                <div className="form-group flex-1 my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date:</label>
                    <div className="relative">
                    <input
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={expiryDate}
                    className="border border-gray-300 rounded-md p-2 w-full  pl-10"
                    onChange={handleExpiry}
                    pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                    onKeyDown={(event) => {
                                    if (!/[0-9]/.test(event.key) && event.key !== '/' && !(isAllowedKey(event.key))) {
                                        event.preventDefault();
                                    }
                                }}
                    required
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    </div>
                </div>

                <div className="form-group flex-1 my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV:</label>
                    <div className="relative">
                    <input
                     type={cvvVisible ? "text" : "password"}
                     value={cvv}
                     className="border border-gray-300 rounded-md p-2 w-full pr-10 pl-10"
                     onChange={handleCvv}
                     maxLength={3}
                     pattern="[0-9]{3}"
                     onKeyDown={(event) => {
                         if (!/[0-9]/.test(event.key) && !(isAllowedKey(event.key))) {
                             event.preventDefault();
                         }
                     }}
                 />
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                </svg>

                 <button 
                     type="button" 
                     onClick={toggleCvvVisibility} 
                     className="absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none opacity-50 text-sm"
                 >
                     {cvvVisible ? "Hide" : "Show"}
                 </button>
                </div>
                </div>
            </div>

            <div className="form-group my-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder's Name:</label>
                <div className="relative">
                <input
                value={name}
                className="border border-gray-300 rounded-md p-2 w-full pl-10"
                onChange={handleName}
                pattern="[A-Za-z\s]{2,}"
                required
                onKeyDown={(event) => {
                    if (!/[A-Za-z]/.test(event.key) && event.key !== ' ' && event.key !== '.' && event.key !== '-' && !(isAllowedKey(event.key))) {
                        event.preventDefault();
                    }
                }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                </div>
            </div>

        <br></br>
            <h2 className="block text-lg font-medium text-gray-700 mb-2">Enter Billing Information</h2>

            <div className="form-group my-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address:</label>
                <input
                 type="text"
                 value={addressInput}
                 onChange={(e) => setAddressInput(e.target.value)}
                 placeholder="Enter billing address"
                 className="border border-gray-300 rounded-md p-2 w-full"
                 required
             />
              {addressSuggestions.length > 0 && (
                    <ul className="absolute bg-white border border-gray-300 w-full">
                        {addressSuggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="p-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => handleAddressSelect(suggestion)}
                            >
                                {suggestion.display_name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex space-x-4">
                <div className="form-group flex-1 my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">City:</label>
                    <input
                    type="text"
                    value={city}
                    readOnly // Optionally make it read-only as it's auto-filled
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                </div>

                <div className="form-group flex-1 my-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country:</label>
                    <input
                    type="text"
                    value={country}
                    readOnly // Optionally make it read-only as it's auto-filled
                    className="border border-gray-300 rounded-md p-2 w-full"
                />
                </div>
            </div>

            <br></br>
            <button type = "submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">
            Submit Payment </button>
            <button type = "reset" className="w-full py-2 bg-gray-500 text-white font-semibold rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition my-4">
            Cancel </button>
            
            {message && <div className="text-red-500 text-xs italic">{message}</div>}

        </form>
    </div>
    );

};
export default paymentForm;