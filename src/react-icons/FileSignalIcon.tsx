import React from "react";

export const FileSignalIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_74122)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V14.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.52525 11.5234C9.20021 11.8484 8.94237 12.2343 8.76646 12.659C8.59054 13.0836 8.5 13.5388 8.5 13.9984C8.5 14.4581 8.59054 14.9132 8.76646 15.3379C8.94237 15.7626 9.20021 16.1484 9.52525 16.4734M14.4753 16.4734C14.8003 16.1484 15.0581 15.7626 15.234 15.3379C15.41 14.9132 15.5005 14.4581 15.5005 13.9984C15.5005 13.5388 15.41 13.0836 15.234 12.659C15.0581 12.2343 14.8003 11.8484 14.4753 11.5234"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_74122">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
