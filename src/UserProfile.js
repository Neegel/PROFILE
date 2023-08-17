import React, { useState } from 'react';
import profileImage from './Assets/nurse_1.jpg'; // Import the profile image
import jobTitles from './mockdata/Jobtitle';
import initialUser from './mockdata/Users';

const UserProfile = () => {
  const [editedUser, setEditedUser] = useState(initialUser);
  const [user, setUser] = useState(initialUser);

  const handleChange = (field, value) => {
    setEditedUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setUser(editedUser);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  font-source-code-pro">
      <div className="flex w-4/5">
       {/* Left Block */}
        <div className="w-1/3 bg-customGray shadow-md rounded-md p-6 mr-4">
          <h1 className="text-2xl font-bold mb-4 text-center">PERSONEL INFORMATION</h1>
          <img
            className="w-48 h-48 mx-auto rounded-full mb-4 border-4 border-customGreen"
            src={profileImage}
            alt="Profile"
          />
          <h1 className="text-xl font-semibold mb-4 text-primary">
            {user.firstName} {user.middleInitial} {user.lastName}
          </h1>
          <p className="text-gray mb-1">
            <strong className="font-normal">Job Title:</strong>{' '}
            <span className="font-normal">{user.jobTitle}</span>
          </p>
          <p className="text-gray mb-1">
            <strong className="font-normal">Address:</strong>{' '}
            <span className="font-normal">{user.address}</span>
          </p>
          <p className="text-gray mb-1">
            <strong className="font-normal">Email:</strong>{' '}
            <span className="font-normal">{user.email}</span>
          </p>
          <p className="text-gray mb-1">
            <strong className="font-normal">Phone Number:</strong>{' '}
            <span className="font-normal">{user.phoneNumber}</span>
          </p>
        </div>

        {/* Right Block */}
        <div className="w-2/3 bg-customGray shadow-md rounded-md p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Edit Information</h1>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label className="mb-1 font-bold">First Name</label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                value={editedUser.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-bold">Middle Initial</label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                value={editedUser.middleInitial}
                onChange={(e) => handleChange('middleInitial', e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-bold">Last Name</label>
              <input
                className="w-full p-2 border rounded-md"
                type="text"
                value={editedUser.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="col-span-3 font-bold mb-2">Job Title</label>
          <select
              className="w-full p-2 border rounded-md"
              value={editedUser.jobTitle}
              onChange={(e) => handleChange('jobTitle', e.target.value)}
            >
              <option value="" disabled>Select a job title</option>
              {jobTitles.map((title) => (
                <option key={title} value={title}>
                  {title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="mb-1 font-bold">Address</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              value={editedUser.address}
              onChange={(e) => handleChange('address', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 font-bold">Email</label>
            <input
              className="w-full p-2 border rounded-md"
              type="email"
              value={editedUser.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 font-bold">Phone Number</label>
            <input
              className="w-full p-2 border rounded-md"
              type="tel"
              value={editedUser.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          </div>

          <button
            className="bg-customBlue text-black font-bold py-2 px-4 rounded mx-auto block"
            onClick={handleSave}
          >
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
