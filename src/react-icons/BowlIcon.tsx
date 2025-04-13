import React from "react";

export const BowlIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58867)">
<path d="M20 7C20.5304 7 21.0391 7.21071 21.4142 7.58579C21.7893 7.96086 22 8.46957 22 9V9.5C22 11.194 19.753 14.99 18.017 16.483L18 16.496V17C18.0002 17.5046 17.8096 17.9906 17.4665 18.3605C17.1234 18.7305 16.6532 18.9572 16.15 18.995L16 19H8C7.46957 19 6.96086 18.7893 6.58579 18.4142C6.21071 18.0391 6 17.5304 6 17V16.504L5.935 16.451C4.175 14.955 2.141 11.486 2.007 9.681L2 9.5V9C2 8.46957 2.21071 7.96086 2.58579 7.58579C2.96086 7.21071 3.46957 7 4 7H20Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58867">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
