import React from "react";

export const FileUnknownIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73872)">
<path d="M14 3V7C14 7.26522 14.1054 7.51957 14.2929 7.70711C14.4804 7.89464 14.7348 8 15 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H14L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17V17.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9994 14C12.2511 14.0001 12.4988 13.9369 12.7196 13.8162C12.9405 13.6954 13.1274 13.5211 13.2632 13.3091C13.399 13.0972 13.4792 12.8545 13.4966 12.6034C13.5139 12.3523 13.4678 12.1009 13.3625 11.8723C13.2571 11.6437 13.0959 11.4452 12.8938 11.2953C12.6916 11.1453 12.455 11.0486 12.2057 11.0141C11.9563 10.9797 11.7023 11.0085 11.4671 11.0979C11.2318 11.1874 11.0228 11.3346 10.8594 11.526"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73872">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
