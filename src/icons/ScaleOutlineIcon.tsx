import React from "react";

export const ScaleOutlineIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_64600)">
<path d="M3 7C3 5.93913 3.42143 4.92172 4.17157 4.17157C4.92172 3.42143 5.93913 3 7 3H17C18.0609 3 19.0783 3.42143 19.8284 4.17157C20.5786 4.92172 21 5.93913 21 7V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V7Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9997 7.00002C13.9557 7.00002 15.7237 7.80202 16.9997 9.09502L14.0437 11.999C13.4893 11.4855 12.7614 11.2001 12.0057 11.2C11.2501 11.1999 10.5223 11.4849 9.96772 11.998L7.01172 9.09502C7.66326 8.42996 8.44129 7.90199 9.29999 7.54219C10.1587 7.1824 11.0807 6.99805 12.0117 7.00002H11.9997Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_64600">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
