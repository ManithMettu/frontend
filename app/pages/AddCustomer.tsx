import React, { useState, useEffect } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import axios from "axios";

const countryCodes = [
  { label: "🇮🇳 +91", value: "+91" },  // India
  { label: "🇺🇸 +1", value: "+1" },   // United States
  { label: "🇬🇧 +44", value: "+44" },  // United Kingdom
  { label: "🇦🇺 +61", value: "+61" },  // Australia
  { label: "🇨🇦 +1", value: "+1" },   // Canada
  { label: "🇩🇪 +49", value: "+49" },  // Germany
];

const Customer: React.FC = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const [selectedState, setSelectedState] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [otherGender, setOtherGender] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("+91");
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [showCodes, setShowCodes] = useState<boolean>(false);
  const [pinCode, setPinCode] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    setCountries(countryList().getData());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchStates(selectedCountry.label);
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const fetchStates = async (country: string) => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        { country: country }
      );
      setStates(response.data.data.states.map((state: any) => state.name));
    } catch (error) {
      console.error("Error fetching states:", error);
      setStates([]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      userName,
      email,
      mobileNumber: `${countryCode} ${mobileNumber}`,
      dob,
      gender,
      selectedCountry,
      selectedState,
      pinCode,
      address,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <h2 className="text-xl font-bold text-blue-700">Customer Registration</h2>
        </div>
        <p className="text-center text-gray-600 mb-4 text-sm">
          Join us today and experience the best services we offer.
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">User Name</label>
              <input
                type="text"
                required
                placeholder="Enter Full Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 text-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Date of Birth</label>
              <input
                type="text"
                required
                placeholder="DD/MM/YYYY"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 text-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Gender</label>
              <select
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={`w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none text-sm ${
                  !gender ? "text-gray-400" : "text-gray-700"
                }`}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {gender === "Other" && (
                <input
                  type="text"
                  placeholder="Specify Gender"
                  value={otherGender}
                  onChange={(e) => setOtherGender(e.target.value)}
                  className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none mt-2 text-sm"
                />
              )}
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Email Address</label>
              <input
                type="email"
                required
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 text-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Mobile Number</label>
              <div className="flex border border-gray-400 rounded-md focus-within:border-blue-500 relative">
                <div
                  className="w-20 p-1.5 cursor-pointer bg-gray-200 text-center text-sm"
                  onClick={() => setShowCodes(!showCodes)}
                >
                  {countryCode}
                </div>
                {showCodes && (
                  <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md w-20 shadow-lg z-10">
                    {countryCodes.map((c) => (
                      <div
                        key={c.value}
                        className="p-1.5 cursor-pointer hover:bg-gray-200 text-sm"
                        onClick={() => {
                          setCountryCode(c.value);
                          setShowCodes(false);
                        }}
                      >
                        {c.label}
                      </div>
                    ))}
                  </div>
                )}
                <input
                  type="tel"
                  required
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full p-1.5 outline-none placeholder-gray-400 text-sm"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Country</label>
              <Select
                options={countries}
                onChange={setSelectedCountry}
                className="w-full border border-gray-400 rounded-md focus:border-blue-500 outline-none text-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">State</label>
              <select
                required
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className={`w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none text-sm ${
                  !selectedState ? "text-gray-400" : "text-gray-700"
                }`}
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-blue-400 text-sm">Pin Code</label>
              <input
                type="text"
                required
                placeholder="Enter Pin Code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 text-sm"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-blue-400 text-sm">Address</label>
              <input
                type="text"
                required
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-1.5 border border-gray-400 rounded-md focus:border-blue-500 outline-none placeholder-gray-400 text-sm"
              />
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 text-sm">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
