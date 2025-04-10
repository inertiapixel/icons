import React from "react";

export const OmegaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_67216)">
<path d="M4 19.0013H9V18.0013C7.46361 17.3144 6.20949 16.121 5.4472 14.6206C4.68491 13.1201 4.46062 11.4036 4.81181 9.75764C5.163 8.11173 6.0684 6.63619 7.37673 5.57758C8.68505 4.51897 10.317 3.94141 12 3.94141C13.683 3.94141 15.315 4.51897 16.6233 5.57758C17.9316 6.63619 18.837 8.11173 19.1882 9.75764C19.5394 11.4036 19.3151 13.1201 18.5528 14.6206C17.7905 16.121 16.5364 17.3144 15 18.0013V19.0013H20" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67216">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
