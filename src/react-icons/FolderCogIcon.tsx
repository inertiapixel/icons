import React from "react";

export const FolderCogIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_73305)">
<path d="M12.5 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H9L12 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V12"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 19C17 19.5304 17.2107 20.0391 17.5858 20.4142C17.9609 20.7893 18.4696 21 19 21C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19C21 18.4696 20.7893 17.9609 20.4142 17.5858C20.0391 17.2107 19.5304 17 19 17C18.4696 17 17.9609 17.2107 17.5858 17.5858C17.2107 17.9609 17 18.4696 17 19Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 15.5V17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 21V22.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0334 17.25L20.7344 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.2688 20L15.9688 20.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.9688 17.25L17.2688 18"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.7344 20L22.0344 20.75"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_73305">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
