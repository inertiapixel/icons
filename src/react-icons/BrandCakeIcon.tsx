import React from "react";

export const BrandCakeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_82643)">
<path d="M20.8402 12C20.8402 14.05 21.8252 15.225 20.8002 17C19.7742 18.775 18.2632 18.51 16.4862 19.534C14.7102 20.56 14.1842 22 12.1332 22C10.0822 22 9.55716 20.559 7.78016 19.534C6.00416 18.51 4.49216 18.775 3.46616 17C2.44116 15.225 3.42616 14.05 3.42616 12C3.42616 9.95 2.44116 8.775 3.46616 7C4.49216 5.225 6.00316 5.49 7.78016 4.466C9.55616 3.44 10.0822 2 12.1332 2C14.1842 2 14.7102 3.441 16.4862 4.466C18.2622 5.49 19.7742 5.225 20.7992 7C21.8252 8.775 20.8402 9.95 20.8402 12Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_82643">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
