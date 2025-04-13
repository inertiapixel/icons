import React from "react";

export const HeartCodeIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_72290)">
<path d="M19.4986 12.572L18.9626 13.102M11.0526 19.062L4.49858 12.573C4.0045 12.0915 3.61541 11.5129 3.3558 10.8737C3.09618 10.2345 2.97166 9.54849 2.99006 8.85883C3.00846 8.16917 3.16939 7.49078 3.46272 6.86633C3.75604 6.24189 4.17543 5.68491 4.69448 5.23042C5.21353 4.77594 5.82103 4.43379 6.47874 4.2255C7.13646 4.01721 7.83016 3.94729 8.51621 4.02014C9.20226 4.09298 9.86581 4.30701 10.4651 4.64877C11.0644 4.99053 11.5865 5.45262 11.9986 6.00597C12.4121 5.45599 12.9347 4.99729 13.5337 4.65857C14.1326 4.31985 14.7951 4.10841 15.4795 4.03749C16.1639 3.96656 16.8557 4.03766 17.5114 4.24636C18.167 4.45505 18.7726 4.79684 19.2901 5.25033C19.8077 5.70382 20.226 6.25925 20.519 6.88186C20.812 7.50447 20.9733 8.18085 20.9929 8.86867C21.0125 9.5565 20.8898 10.241 20.6327 10.8792C20.3756 11.5175 19.9895 12.0958 19.4986 12.578"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 21L22 19L20 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 17L15 19L17 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72290">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
