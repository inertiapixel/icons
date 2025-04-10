import React from "react";

export const LinkPlusIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_70390)">
<path d="M9 15L15 9" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 6.00093L11.463 5.46493C11.9273 5.0005 12.4786 4.63208 13.0853 4.38073C13.692 4.12937 14.3423 4 14.999 4C15.6557 4 16.306 4.12937 16.9127 4.38073C17.5194 4.63208 18.0707 5.0005 18.535 5.46493C19.0002 5.92884 19.3693 6.47999 19.6211 7.08681C19.8729 7.69362 20.0024 8.34416 20.0023 9.00114C20.0022 9.65812 19.8725 10.3086 19.6205 10.9154C19.3686 11.5221 18.9993 12.0732 18.534 12.5369" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6031 18.534C11.6541 19.4717 10.3738 19.9976 9.03964 19.9976C7.70551 19.9976 6.42515 19.4717 5.47614 18.534C5.0085 18.0716 4.63724 17.521 4.38385 16.9141C4.13047 16.3073 4 15.6561 4 14.9985C4 14.3408 4.13047 13.6897 4.38385 13.0829C4.63724 12.476 5.0085 11.9254 5.47614 11.463L6.00014 11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 19H22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 16V22" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70390">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
