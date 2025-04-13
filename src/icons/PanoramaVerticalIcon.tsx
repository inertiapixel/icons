import React from "react";

export const PanoramaVerticalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67105)">
<path d="M18.4644 4.338C16.5324 9.444 16.5324 14.549 18.4644 19.655C18.5198 19.8058 18.5381 19.9677 18.5177 20.127C18.4973 20.2864 18.4388 20.4384 18.3472 20.5704C18.2556 20.7023 18.1335 20.8103 17.9913 20.8851C17.8491 20.9598 17.691 20.9993 17.5304 21H6.53041C5.83841 21 5.32241 20.308 5.56841 19.66C7.50041 14.553 7.50041 9.446 5.56841 4.339C5.32241 3.691 5.81141 3 6.50341 3H17.5314C18.2244 3 18.7114 3.691 18.4664 4.338H18.4644Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67105">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
