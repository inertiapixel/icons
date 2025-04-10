import React from "react";

export const HangerIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_72389)">
<path d="M14.0002 6C14.0002 5.46957 13.7895 4.96086 13.4144 4.58579C13.0393 4.21071 12.5306 4 12.0002 4C11.4698 4 10.961 4.21071 10.586 4.58579C10.2109 4.96086 10.0002 5.46957 10.0002 6C10.0002 7.667 10.6702 9 12.0002 10H11.9922M11.9922 10L19.9632 14.428C20.2751 14.6012 20.535 14.8548 20.716 15.1623C20.8969 15.4698 20.9923 15.8202 20.9922 16.177V17C20.9922 17.5304 20.7815 18.0391 20.4064 18.4142C20.0313 18.7893 19.5226 19 18.9922 19H4.99219C4.46175 19 3.95305 18.7893 3.57797 18.4142C3.2029 18.0391 2.99219 17.5304 2.99219 17V16.177C2.99209 15.8202 3.08746 15.4698 3.2684 15.1623C3.44933 14.8548 3.70925 14.6012 4.02119 14.428L11.9922 10Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_72389">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
