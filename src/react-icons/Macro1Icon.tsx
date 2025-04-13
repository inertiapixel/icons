import React from "react";

export const Macro1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69807)">
<path d="M6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 15C16.4087 15 14.8826 15.6321 13.7574 16.7574C12.6321 17.8826 12 19.4087 12 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21C12 19.4087 11.3679 17.8826 10.2426 16.7574C9.11742 15.6321 7.5913 15 6 15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C10.6739 11 9.40215 10.4732 8.46447 9.53553C7.52678 8.59785 7 7.32608 7 6V3L10 5L12 3L14 5L17 3V6C17 7.32608 16.4732 8.59785 15.5355 9.53553C14.5979 10.4732 13.3261 11 12 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69807">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
