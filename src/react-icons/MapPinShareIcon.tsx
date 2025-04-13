import React from "react";

export const MapPinShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69395)">
<path d="M9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0188 21.4835C11.753 21.4863 11.4894 21.436 11.2433 21.3356C10.9972 21.2351 10.7737 21.0865 10.5858 20.8985L6.3418 16.6555C5.35116 15.6644 4.63823 14.4304 4.27438 13.0772C3.91052 11.7239 3.90852 10.2988 4.26856 8.94457C4.6286 7.59029 5.33805 6.35434 6.3259 5.36044C7.31375 4.36654 8.54535 3.64955 9.8974 3.28125C11.2495 2.91295 12.6745 2.90626 14.03 3.26184C15.3854 3.61742 16.6237 4.3228 17.6209 5.30738C18.618 6.29195 19.339 7.52118 19.7118 8.87201C20.0845 10.2228 20.0959 11.6479 19.7448 13.0045"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69395">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
