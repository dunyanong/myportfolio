import React, { useState, useEffect } from "react";
import TwitterProfileImage from "./TwitterProfileImage";
import twitterpp from '../images/my-pictures/twitterpp.jpg'
import Image from "next/image";

const TwitterFollowers = () => {
  const [followersCount, setFollowersCount] = useState(4300);

  useEffect(() => {
    const fetchFollowersCount = async () => {
      try {
        const response = await fetch(
          'https://api.twitter.com/2/users/by/username/dun_yan_', 
          {
            headers: {
              'Authorization': `AAAAAAAAAAAAAAAAAAAAADkOuwEAAAAAqGyReo3Js0O2pifYiINWTvjVRdo%3DXd9Oa6bEQHvuPPaYl21CipNPjoJmUUvADv2TESVzzyy2FdcWBG`
            }
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFollowersCount(data.data.public_metrics.followers_count);
      } catch (error) {
        console.error("Error fetching followers count", error);
      }
    };

    fetchFollowersCount();
    const intervalId = setInterval(fetchFollowersCount, 60000); // Update every 60 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex w-full">
      <a
        href="https://x.com/dun_yan_"
        target="_blank"
        className="flex w-full items-center justify-between rounded border px-3 py-4 border-neutral-700 bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
          <Image
            alt="Dun Yan"
            width={64}
            height={64}
            decoding="async"
            data-nimg={1}
            className="h-16 w-16 rounded-full border border-neutral-700"
            style={{ color: "transparent" }}
            sizes="33vw"
            src={twitterpp}
          />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border bg-white p-1 border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="Twitter logo">
              <path d="M23.643 4.675c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.905-2.06-1.47-3.4-1.47-2.573 0-4.657 2.084-4.657 4.657 0 .365.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.687-.63 1.486-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.481-.234-2.11-.583v.058c0 2.257 1.605 4.13 3.737 4.558-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.114-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.4-.014-.598.91-.658 1.7-1.477 2.322-2.412z"/>
            </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-100">
              @dun_yan_
            </p>
            <p className="text-neutral-400">
              {followersCount.toLocaleString()}+ Followers
            </p>
          </div>
        </div>
        <div className="transform transition-transform duration-300 group-hover:-rotate-12 text-neutral-300">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </a>
    </div>
  );
};

export default TwitterFollowers;
