import React, { useState } from "react";
import Image from "next/image";
import linkedinpp from '../images/my-pictures/dunyanturkey.png';

const LinkedInFollowers = () => {
  const [followersCount, setFollowersCount] = useState(500); 

  return (
    <div className="flex w-full">
      <a
        href="https://www.linkedin.com/in/dunyan/"
        target="_blank"
        rel="noopener noreferrer"
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
              src={linkedinpp}
            />
            <div className="relative -right-10 -top-6 inline-flex h-6 w-6 items-center rounded-full border bg-white p-1 border-neutral-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="LinkedIn logo">
              <path fill="#0077B5" d="M20.5,0H3.5C1.573,0,0,1.573,0,3.5v17C0,22.427,1.573,24,3.5,24h17c1.927,0,3.5-1.573,3.5-3.5V3.5 C24,1.573,22.427,0,20.5,0z M7.882,18.475H4.632V9.338h3.25V18.475z M6.257,8.081c-1.043,0-1.883-0.847-1.883-1.892 c0-1.044,0.84-1.892,1.883-1.892c1.043,0,1.883,0.847,1.883,1.892C8.14,7.234,7.3,8.081,6.257,8.081z M19.367,18.475h-3.25v-4.933 c0-1.171-0.419-1.972-1.466-1.972c-0.801,0-1.279,0.54-1.491,1.064c-0.076,0.184-0.094,0.439-0.094,0.696v5.145h-3.25 c0,0,0.043-9.137,0-10.137h3.25v1.436c0.435-0.669,1.217-1.623,2.968-1.623c2.17,0,3.807,1.423,3.807,4.485V18.475z"/>
            </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-100">
              Dun Yan
            </p>
            <p className="text-neutral-400">
              {followersCount.toLocaleString()}+ Connections
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

export default LinkedInFollowers;
