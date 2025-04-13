import React from "react";

export const BowlSpoonIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_58870)">
<path d="M20 10C20.5304 10 21.0391 10.2107 21.4142 10.5858C21.7893 10.9609 22 11.4696 22 12V12.5C22 14.194 19.753 17.99 18.017 19.483L18 19.496V20C18.0002 20.5046 17.8096 20.9906 17.4665 21.3605C17.1234 21.7305 16.6532 21.9572 16.15 21.995L16 22H8C7.46957 22 6.96086 21.7893 6.58579 21.4142C6.21071 21.0391 6 20.5304 6 20V19.504L5.935 19.451C4.175 17.955 2.141 14.486 2.007 12.681L2 12.5V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H20Z" fill="black"/>
<path d="M8 2C9.71 2 11.237 2.787 11.785 4H20C20.2652 4 20.5196 4.10536 20.7071 4.29289C20.8946 4.48043 21 4.73478 21 5C21 5.26522 20.8946 5.51957 20.7071 5.70711C20.5196 5.89464 20.2652 6 20 6L11.784 6.001C11.236 7.214 9.71 8 8 8C5.856 8 4 6.763 4 5C4 3.237 5.856 2 8 2Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_802_58870">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
