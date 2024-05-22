import React from 'react';

const UserAccount = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-black">
        {/* User Information Section */}
        <div className="bg-blue-100 p-6 rounded-lg mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-bold">Jon Doe</h2>
              <a href="#" className="text-blue-600">Change name</a>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span>Email</span>
              <a href="#" className="text-blue-600">Change email</a>
            </div>
            <p>jon.doe@email.com</p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <span>Password</span>
              <a href="#" className="text-blue-600">Change password</a>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <span>Email Preferences</span>
              <a href="#" className="text-blue-600">Update</a>
            </div>
            <p>Choose your email preferences.</p>
          </div>
        </div>

        {/* Plan & Billing Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Plan & Billing</h3>
          <div className="bg-gray-100 p-6 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h4 className="font-bold">Plan</h4>
                <p>Annual Plan (US)</p>
                <p className="text-gray-600">Next payment on October 31, 2024</p>
              </div>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded">Cancel subscription</button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-bold">Payment Method</h4>
                <div className="flex items-center">
                  <img src="images/icons/mastercard.png" alt="MasterCard" className="h-8 mr-2" />
                  <p>MasterCard ending in 8393</p>
                </div>
                <p className="text-gray-600">Expires 03/2024</p>
              </div>
              <button className="bg-gray-800 text-white px-4 py-2 rounded">Manage payment method</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
