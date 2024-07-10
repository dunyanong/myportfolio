import React, { useState, useEffect } from 'react';

const TwitterProfileImage = () => {
  const [profileImageUrl, setProfileImageUrl] = useState('');

  useEffect(() => {
    // Replace with your actual fetch logic to get the image URL
    fetchTwitterProfileImageUrl().then((url) => {
      setProfileImageUrl(url);
    });
  }, []);

  // Function to fetch Twitter profile image URL
  const fetchTwitterProfileImageUrl = async () => {
    try {
      const response = await fetch('https://api.twitter.com/1.1/users/show.json?screen_name=dun_yan_');
      if (!response.ok) {
        throw new Error('Failed to fetch profile image');
      }
      const data = await response.json();
      return data.profile_image_url_https;
    } catch (error) {
      console.error('Error fetching profile image:', error);
      return ''; // or a default image URL
    }
  };

  return (
    <img
      alt="Dun Yan"
      width={64}
      height={64}
      decoding="async"
      data-nimg={1}
      className="h-16 w-16 rounded-full border border-neutral-700"
      style={{ color: "transparent" }}
      sizes="33vw"
      srcSet={`
        ${profileImageUrl}&w=256&q=75 256w,
        ${profileImageUrl}&w=384&q=75 384w,
        ${profileImageUrl}&w=640&q=75 640w,
        ${profileImageUrl}&w=750&q=75 750w,
        ${profileImageUrl}&w=828&q=75 828w,
        ${profileImageUrl}&w=1080&q=75 1080w,
        ${profileImageUrl}&w=1200&q=75 1200w,
        ${profileImageUrl}&w=1920&q=75 1920w,
        ${profileImageUrl}&w=2048&q=75 2048w,
        ${profileImageUrl}&w=3840&q=75 3840w
      `}
      src={profileImageUrl}
    />
  );
};

export default TwitterProfileImage;
