import React from "react";

export const PhoneOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_66702)">
<path d="M3 21L21 3" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.831 14.161C4.15446 11.7529 3.17485 8.92899 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H9L11 9L8.5 10.5C8.608 10.72 8.723 10.935 8.845 11.145M10.596 13.422C11.439 14.262 12.418 14.966 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0981 20.7665 10.4175 19.1094 7.656 16.343" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_66702">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
