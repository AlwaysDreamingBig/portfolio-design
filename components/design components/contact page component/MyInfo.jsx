// components/MyInfo.js
import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '@heroicons/react/solid';

export default function MyInfo() {
  return (
    <div>
      <h1 className="text-xl font-bold text-white">My Information</h1>

      <div className="mt-4 space-y-6">
        <div className="flex items-center">
          <div className="bg-[#303030] p-2 rounded-lg">
            <PhoneIcon className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-white ml-4">
            <strong>Phone:</strong> +1 234 567 8901
          </span>
        </div>

        <div className="flex items-center">
          <div className="bg-[#303030] p-2 rounded-lg">
            <MailIcon className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-white ml-4">
            <strong>Email:</strong> myemail@example.com
          </span>
        </div>

        <div className="flex items-center">
          <div className="bg-[#303030] p-2 rounded-lg">
            <LocationMarkerIcon className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-white ml-4">
            <strong>Address:</strong> 1234 Example St, City, Country
          </span>
        </div>
      </div>
    </div>
  );
}
