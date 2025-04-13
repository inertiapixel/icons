import React from "react";

export const MaskOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_69256)">
<path d="M19.42 19.41C19.2339 19.5972 19.0127 19.7457 18.769 19.8469C18.5253 19.9482 18.2639 20.0002 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.446 4.225 4.945 4.588 4.583M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88691 9.87025C9.60478 10.1482 9.38047 10.4792 9.22691 10.8442C9.07335 11.2092 8.99358 11.6011 8.99221 11.9971C8.99083 12.3931 9.06788 12.7855 9.2189 13.1515C9.36992 13.5176 9.59193 13.8502 9.87212 14.1301C10.1523 14.4099 10.4851 14.6315 10.8514 14.7821C11.2177 14.9327 11.6101 15.0093 12.0061 15.0075C12.4022 15.0056 12.7939 14.9254 13.1587 14.7714C13.5236 14.6174 13.8543 14.3927 14.1319 14.1103M14.7139 10.7142C14.4148 10.0846 13.9066 9.57812 13.2759 9.28125"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_69256">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
