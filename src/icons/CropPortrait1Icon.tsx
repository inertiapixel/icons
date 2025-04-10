import React from "react";

export const CropPortrait1Icon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_77589)">
<path d="M6 6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H16C16.5304 4 17.0391 4.21071 17.4142 4.58579C17.7893 4.96086 18 5.46957 18 6V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H8C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18V6Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_77589">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
