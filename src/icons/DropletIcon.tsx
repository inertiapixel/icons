import React from "react";

export const DropletIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_58199)">
<path d="M10.7089 2.37395C10.4269 2.55052 10.185 2.78421 9.99887 3.05995L5.10687 10.3199C3.12587 13.6339 3.88687 17.7859 6.87387 20.2019C9.84287 22.6039 14.1599 22.6039 17.1279 20.2019C20.1149 17.7859 20.8759 13.6329 18.9229 10.3659L14.0039 3.05995C13.2819 1.98495 11.8119 1.68395 10.7089 2.37395Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58199">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
