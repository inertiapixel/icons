import React from "react";

export const LemonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70709)">
<path d="M17.5375 3.39453C21.4425 7.30053 21.4425 13.6315 17.5375 17.5375C13.6315 21.4425 7.30053 21.4425 3.39453 17.5375L17.5375 3.39453Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.86719 15.0592C7.08612 16.2783 8.73941 16.9632 10.4633 16.9633C12.1873 16.9634 13.8406 16.2786 15.0597 15.0597C16.2788 13.8408 16.9637 12.1875 16.9638 10.4635C16.9639 8.73961 16.2791 7.08626 15.0602 5.86719"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4648 10.4648L15.0618 15.0618"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4648 10.4648V16.8288"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4648 10.4648H16.8288"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70709">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
