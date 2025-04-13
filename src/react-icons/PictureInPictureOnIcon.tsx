import React from "react";

export const PictureInPictureOnIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_66392)">
<path d="M11 19H5C4.46957 19 3.96086 18.7893 3.58579 18.4142C3.21071 18.0391 3 17.5304 3 17V7C3 6.46957 3.21071 5.96086 3.58579 5.58579C3.96086 5.21071 4.46957 5 5 5H19C19.5304 5 20.0391 5.21071 20.4142 5.58579C20.7893 5.96086 21 6.46957 21 7V11"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H20C20.2652 14 20.5196 14.1054 20.7071 14.2929C20.8946 14.4804 21 14.7348 21 15V18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19H15C14.7348 19 14.4804 18.8946 14.2929 18.7071C14.1054 18.5196 14 18.2652 14 18V15Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9L11 13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 13H11V10"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66392">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
