import React from "react";

export const AirBalloonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_86170)">
<path d="M10 20C10 19.7348 10.1054 19.4804 10.2929 19.2929C10.4804 19.1054 10.7348 19 11 19H13C13.2652 19 13.5196 19.1054 13.7071 19.2929C13.8946 19.4804 14 19.7348 14 20V21C14 21.2652 13.8946 21.5196 13.7071 21.7071C13.5196 21.8946 13.2652 22 13 22H11C10.7348 22 10.4804 21.8946 10.2929 21.7071C10.1054 21.5196 10 21.2652 10 21V20Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 16C15.314 16 18 11.314 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 11.314 8.686 16 12 16Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 9C10 10.8565 10.2107 12.637 10.5858 13.9497C10.9609 15.2625 11.4696 16 12 16C12.5304 16 13.0391 15.2625 13.4142 13.9497C13.7893 12.637 14 10.8565 14 9C14 7.14348 13.7893 5.36301 13.4142 4.05025C13.0391 2.7375 12.5304 2 12 2C11.4696 2 10.9609 2.7375 10.5858 4.05025C10.2107 5.36301 10 7.14348 10 9Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_86170">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
