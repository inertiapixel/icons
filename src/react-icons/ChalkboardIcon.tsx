import React from "react";

export const ChalkboardIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_79792)">
<path d="M8 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 17C11 16.7348 11.1054 16.4804 11.2929 16.2929C11.4804 16.1054 11.7348 16 12 16H16C16.2652 16 16.5196 16.1054 16.7071 16.2929C16.8946 16.4804 17 16.7348 17 17V18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19H12C11.7348 19 11.4804 18.8946 11.2929 18.7071C11.1054 18.5196 11 18.2652 11 18V17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_79792">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
