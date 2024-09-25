import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

// BentoDescription Component
export default function BentoDescription({ person }) {
  const { name, age, profession, bio, location, email, phone, socialMedia, traits } = person;

  return (
    <div className="min-w-lg mx-auto xl:mx-10 bg-black/90 shadow-lg rounded-lg overflow-hidden p-6 space-y-4">
      {/* Header: Name and Profession */}
      <div className="text-center ">
      <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600">
        {name}
      </h2>
        <p className="text-neutral-500">{profession}</p>
      </div>

      {/* Bio and Traits */}
      <div>
        <p className="text-neutral-300 text-lg sm:px-6 ">{bio}</p>
        <ul className="mt-4 space-y-1">
          {traits.map((trait, index) => (
            <li key={index} className="text-neutral-500"><strong>•</strong> {trait}</li>
          ))}
        </ul>
      </div>

      {/* Contact Information */}
      <div>
        <h3 className="text-xl font-semibold mt-4 mb-2">Contact Information</h3>
        <p className="text-neutral-200"><strong>Email:</strong> {email}</p>
        <p className="text-neutral-200"><strong>Phone:</strong> {phone}</p>
        <p className="text-neutral-200"><strong>Location:</strong> {location}</p>
      </div>

      {/* Social Media Links */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Find me on</h3>
        <div className="flex space-x-4">
          {socialMedia.twitter && (
            <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-400 text-2xl hover:text-blue-500 transition" />
            </a>
          )}
          {socialMedia.linkedin && (
            <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-800 transition" />
            </a>
          )}
          {socialMedia.github && (
            <a href={socialMedia.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-blue-800 text-2xl hover:text-gray-900 transition" />
            </a>
          )}
        </div>
      </div>

      <button className='absolute sm:top-[9%] top-[5%] lg:top-[9%] || sm:left-[9%] left-[5%] lg:left-[30%] sxl:left-[27%] xl:left-[24%] border px-6 py-2 rounded-lg'>
        Click
      </button>
    </div>
  );
}
