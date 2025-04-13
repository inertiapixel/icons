import React from "react";

export const BuildingFactoryIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80778)">
<path d="M4 21C5.147 16.98 5.983 12.973 6 9H12C12.017 12.973 12.853 16.98 14 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 13H17C17.025 15.612 17.894 18.296 19 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 5.00053C9.22717 4.68403 9.52797 4.4276 9.87642 4.25337C10.2249 4.07915 10.6105 3.99237 11 4.00053C11.3895 3.99237 11.7751 4.07915 12.1236 4.25337C12.472 4.4276 12.7728 4.68403 13 5.00053C13.2272 5.31702 13.528 5.57345 13.8764 5.74768C14.2249 5.9219 14.6105 6.00869 15 6.00053C15.3895 6.00869 15.7751 5.9219 16.1236 5.74768C16.472 5.57345 16.7728 5.31702 17 5.00053C17.2272 4.68403 17.528 4.4276 17.8764 4.25337C18.2249 4.07915 18.6105 3.99237 19 4.00053C19.3895 3.99237 19.7751 4.07915 20.1236 4.25337C20.472 4.4276 20.7728 4.68403 21 5.00053"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 21H22"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80778">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
