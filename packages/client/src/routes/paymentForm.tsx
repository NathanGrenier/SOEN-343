import { useState } from "react";

const paymentForm = () => {
    const[email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [billing, setBilling] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    // const [errors, setErrors] = useState({
    //     cardNumber: '',
    //     expiryDate:'',
    //     cvv:''
    // });

    const[message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // if(!validInputs()) {
        //     alert('Error in the payment information, please correct before proceeding');
        //     return;
        // }
        setMessage('Payment successfully submitted');
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCardNumber(e.target.value);
    };

    const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExpiryDate(e.target.value);
    }

    const handleBilling = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBilling(e.target.value);
    }

    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value);
    }

    const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCvv(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
                <label>Email</label>
                <input
                value={email}
                onChange={handleEmail}
                required
                />
            </div>

            <div className="form-group">
                <label>Card Number:</label>
                <input
                type="text"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={cardNumber}
                onChange={handleCardNumber}
                required
                />
            </div>

            <div className="form-group">
                <label>Expiry Date</label>
                <input
                type="text"
                placeholder="MM/YY"
                value={expiryDate}
                onChange={handleExpiry}
                required
                />
            </div>

            <div className="form-group">
                <label>CVV</label>
                <input
                type="password"
                value={cvv}
                onChange={handleCvv}
                required
                />
            </div>

            <div className="form-group">
                <label>Billing Address:</label>
                <input
                value={billing}
                onChange={handleBilling}
                required
                />
            </div>

            <div className="form-group">
                <label>City</label>
                <input
                value={city}
                onChange={handleCity}
                required
                />
            </div>

            <div className="form-group">
                <label>Country</label>
                <input
                value={country}
                onChange={handleCountry}
                required
                />
            </div>

            <button type = "submit">Submit Payment</button>
            
            {message && <div className="message">{message}</div>}

        </form>
    );

};
export default paymentForm;