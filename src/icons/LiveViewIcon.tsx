import React from "react";

export const LiveViewIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_70286)">
<path d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11V11.01"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.999L8.5 12.999C8.16307 12.39 7.99085 11.7037 8.00037 11.0078C8.00989 10.3119 8.20082 9.63052 8.55428 9.03099C8.90774 8.43147 9.41151 7.93454 10.0158 7.58931C10.6201 7.24409 11.304 7.0625 12 7.0625C12.696 7.0625 13.3799 7.24409 13.9842 7.58931C14.5885 7.93454 15.0923 8.43147 15.4457 9.03099C15.7992 9.63052 15.9901 10.3119 15.9996 11.0078C16.0091 11.7037 15.8369 12.39 15.5 12.999L12 17.999Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_70286">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
