import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from '../../CartContext/CartContext';

const CheckoutPage = () => {
  const { state } = useCart();
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    shippingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    sameAsShipping: false,
    billingAddress: "",
    billingCity: "",
    billingZipCode: "",
    billingCountry: "",
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
  });

   // Calculate total amount
   const totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for required fields
    const requiredFields = Object.keys(formData).filter(
      (key) => key !== "sameAsShipping"
    );

    if (!sameAsShipping) {
      const isFormValid = requiredFields.every((field) => formData[field]);
      if (!isFormValid) {
        alert("Please fill in all required fields.");
        return;
      }
    }

    // You can perform additional actions here
    setIsPaymentSuccessful(true);
  };

  const closePopup = () => {
    setIsPaymentSuccessful(false);
  };

  return (
    <div className="container mx-auto my-8" style={{ width: "80%" }}>
      <Link to={`/cart`}>
        <FaArrowLeftLong className="absolute top-12 left-20 text-2xl" />
      </Link>
      <div className="flex flex-wrap">
        {/* Left Side - Account Information, Shipping Address, Billing Address */}
        <div className="w-full lg:w-1/2 pr-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Account Information</h2>
          <div className={`mb-4 pb-2 border-b `}>
            <label htmlFor="email" className="block text-sm text-gray-300">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>
          <div className={`mb-4 pb-2 border-b `}>
            <label
              htmlFor="phoneNumber"
              className="block text-sm text-gray-300"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4 mt-6">Shipping Address</h2>
          <div className={`mb-4 pb-2 border-b `}>
            <label
              htmlFor="shippingAddress"
              className="block text-sm text-gray-300"
            >
              Address:
            </label>
            <input
              type="text"
              id="shippingAddress"
              name="shippingAddress"
              required
              value={formData.shippingAddress}
              onChange={handleInputChange}
              placeholder="Enter your shipping address"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>
          <div className={`mb-4 pb-2 border-b `}>
            <label htmlFor="city" className="block text-sm text-gray-300">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter your city"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>
          <div className={`mb-4 pb-2 border-b `}>
            <label htmlFor="state" className="block text-sm text-gray-300">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              required
              value={formData.state}
              onChange={handleInputChange}
              placeholder="Enter your state"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>
          <div className={`mb-4 pb-2 border-b `}>
            <label htmlFor="zipCode" className="block text-sm text-gray-300">
              ZIP Code:
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              required
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Enter your ZIP code"
              className="w-full p-2 border-none focus:outline-none focus:border-dark"
            />
          </div>

          {/* Billing Address */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="sameAsShipping"
              checked={sameAsShipping}
              onChange={() => setSameAsShipping(!sameAsShipping)}
              className="mr-2"
            />
            <label htmlFor="sameAsShipping" className="text-sm text-gray-300">
              Same as Shipping Address
            </label>
          </div>

          {sameAsShipping && (
            <>
              <h2 className="text-2xl font-semibold mb-4">Billing Address</h2>
              <div className={`mb-4 pb-2 border-b `}>
                <label
                  htmlFor="billingAddress"
                  className="block text-sm text-gray-300"
                >
                  Address:
                </label>
                <input
                  type="text"
                  id="billingAddress"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your billing address"
                  className="w-full p-2 border-none focus:outline-none focus:border-dark"
                />
              </div>
              <div className={`mb-4 pb-2 border-b `}>
                <label
                  htmlFor="billingCity"
                  className="block text-sm text-gray-300"
                >
                  City:
                </label>
                <input
                  type="text"
                  id="billingCity"
                  name="billingCity"
                  value={formData.billingCity}
                  onChange={handleInputChange}
                  placeholder="Enter your billing city"
                  className="w-full p-2 border-none focus:outline-none focus:border-dark"
                />
              </div>
              <div className={`mb-4 pb-2 border-b `}>
                <label
                  htmlFor="billingZipCode"
                  className="block text-sm text-gray-300"
                >
                  ZIP Code:
                </label>
                <input
                  type="text"
                  id="billingZipCode"
                  name="billingZipCode"
                  value={formData.billingZipCode}
                  onChange={handleInputChange}
                  placeholder="Enter your billing ZIP code"
                  className="w-full p-2 border-none focus:outline-none focus:border-dark"
                />
              </div>
              <div className={`mb-4 pb-2 border-b `}>
                <label
                  htmlFor="billingCountry"
                  className="block text-sm text-gray-300"
                >
                  Country:
                </label>
                <input
                  type="text"
                  id="billingCountry"
                  name="billingCountry"
                  value={formData.billingCountry}
                  onChange={handleInputChange}
                  placeholder="Enter your billing country"
                  className="w-full p-2 border-none focus:outline-none focus:border-dark"
                />
              </div>
            </>
          )}
        </div>

        {/* Right Side - Payment Details, Order Summary */}
        <div className="w-full lg:w-1/2 pl-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
          <form onSubmit={handleSubmit}>
            <div className={`mb-4 pb-2 border-b `}>
              <label
                htmlFor="cardholderName"
                className="block text-sm text-gray-300"
              >
                Cardholder Name:
              </label>
              <input
                type="text"
                id="cardholderName"
                name="cardholderName"
                required
                value={formData.cardholderName}
                onChange={handleInputChange}
                placeholder="Enter cardholder name"
                className="w-full p-2 border-none focus:outline-none focus:border-dark"
              />
            </div>
            <div className={`mb-4 pb-2 border-b `}>
              <label
                htmlFor="cardNumber"
                className="block text-sm text-gray-300"
              >
                Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Enter card number"
                className="w-full p-2 border-none focus:outline-none focus:border-dark"
              />
            </div>
            <div className={`mb-4 pb-2 border-b `}>
              <label
                htmlFor="expiryDate"
                className="block text-sm text-gray-300"
              >
                Expiry Date:
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                required
                value={formData.expiryDate}
                onChange={handleInputChange}
                className="w-full p-2 border-none focus:outline-none focus:border-dark"
              />
            </div>

            {/* Order Summary */}
            <h2 className="text-2xl font-semibold mb-4 mt-8">Order Summary</h2>
            {state.items.map((item, index) => (
              <div key={index} className="mb-4 pb-2">
                <p className="text-sm text-gray-700">{`${item.title}: $${(
                  item.price * item.quantity
                ).toFixed(2)}`}</p>
              </div>
            ))}
            {/* Total Price */}
            <div className="mt-8">
              <p className="text-xl font-semibold text-gray-700">{`Total Amount: $${totalAmount}`}</p>
            </div>

            {/* Make Payment Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Make Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Payment Successful Popup */}
      {isPaymentSuccessful && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-2xl font-semibold mb-4">
              Thanks for your payment!
            </p>
            <button
              onClick={closePopup}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
