import React, { useState } from 'react';

const Product = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-700 text-lg mb-4">STEP 2 OF 3</h2>
        <h1 className="text-4xl font-bold mb-8 text-black">Choose the plan that’s right for you</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Premium Plan */}
          <div 
            className={`bg-white rounded-lg shadow-md p-6 border-4 cursor-pointer ${selectedPlan === 'Premium' ? 'border-[#eb113e]' : 'border-gray-300'} hover:border-[#00b6e6]`} 
            onClick={() => handleSelectPlan('Premium')}
          >
            <div className="bg-[#eb113e] text-white rounded-t-lg p-4 mb-4">
              <h3 className="text-2xl font-bold">Premium</h3>
              <p className="text-lg">4K + HDR</p>
            </div>
            <div className="text-black">
              <p className="mb-4"><span className="font-bold">Monthly price</span> <br /> £17.99</p>
              <p className="mb-4"><span className="font-bold">Video and sound quality</span> <br /> Best</p>
              <p className="mb-4"><span className="font-bold">Resolution</span> <br /> 4K (Ultra HD) + HDR</p>
              <p className="mb-4"><span className="font-bold">Spatial audio (immersive sound)</span> <br /> Included</p>
              <p className="mb-4"><span className="font-bold">Supported devices</span> <br /> TV, computer, mobile phone, tablet</p>
              <p className="mb-4"><span className="font-bold">Devices your household can watch at the same time</span> <br /> 4</p>
              <p className="mb-4"><span className="font-bold">Download devices</span> <br /> 6</p>
              <p><span className="font-bold">Adverts</span> <br /> No adverts</p>
            </div>
          </div>

          {/* Standard Plan */}
          <div 
            className={`bg-white rounded-lg shadow-md p-6 border-4 cursor-pointer ${selectedPlan === 'Standard' ? 'border-[#eb113e]' : 'border-gray-300'} hover:border-[#00b6e6]`} 
            onClick={() => handleSelectPlan('Standard')}
          >
            <div className="bg-[#eb113e] text-white rounded-t-lg p-4 mb-4">
              <h3 className="text-2xl font-bold">Standard</h3>
              <p className="text-lg">1080p</p>
            </div>
            <div className="text-black">
              <p className="mb-4"><span className="font-bold">Monthly price</span> <br /> £10.99</p>
              <p className="mb-4"><span className="font-bold">Video and sound quality</span> <br /> Good</p>
              <p className="mb-4"><span className="font-bold">Resolution</span> <br /> 1080p (Full HD)</p>
              <p className="mb-4"><span className="font-bold">Supported devices</span> <br /> TV, computer, mobile phone, tablet</p>
              <p className="mb-4"><span className="font-bold">Devices your household can watch at the same time</span> <br /> 2</p>
              <p className="mb-4"><span className="font-bold">Download devices</span> <br /> 2</p>
              <p><span className="font-bold">Adverts</span> <br /> No adverts</p>
            </div>
          </div>

          {/* Standard with Adverts Plan */}
          <div 
            className={`bg-white rounded-lg shadow-md p-6 border-4 cursor-pointer ${selectedPlan === 'Standard with adverts' ? 'border-[#eb113e]' : 'border-gray-300'} hover:border-[#00b6e6]`} 
            onClick={() => handleSelectPlan('Standard with adverts')}
          >
            <div className="bg-[#eb113e] text-white rounded-t-lg p-4 mb-4">
              <h3 className="text-2xl font-bold">Standard with adverts</h3>
              <p className="text-lg">1080p</p>
            </div>
            <div className="text-black">
              <p className="mb-4"><span className="font-bold">Monthly price</span> <br /> £4.99</p>
              <p className="mb-4"><span className="font-bold">Video and sound quality</span> <br /> Good</p>
              <p className="mb-4"><span className="font-bold">Resolution</span> <br /> 1080p (Full HD)</p>
              <p className="mb-4"><span className="font-bold">Supported devices</span> <br /> TV, computer, mobile phone, tablet</p>
              <p className="mb-4"><span className="font-bold">Devices your household can watch at the same time</span> <br /> 2</p>
              <p className="mb-4"><span className="font-bold">Download devices</span> <br /> 2</p>
              <p><span className="font-bold">Adverts</span> <br /> A few advert breaks</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <button className="w-full bg-[#eb113e] text-white text-xl py-4 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
