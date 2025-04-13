import React from "react";

export const MusicOffIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_67786)">
<path d="M3 17C3 17.7956 3.31607 18.5587 3.87868 19.1213C4.44129 19.6839 5.20435 20 6 20C6.79565 20 7.55871 19.6839 8.12132 19.1213C8.68393 18.5587 9 17.7956 9 17C9 16.2044 8.68393 15.4413 8.12132 14.8787C7.55871 14.3161 6.79565 14 6 14C5.20435 14 4.44129 14.3161 3.87868 14.8787C3.31607 15.4413 3 16.2044 3 17Z"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.4186 14.4492C14.0339 14.6879 13.7081 15.0105 13.4658 15.3929C13.2235 15.7754 13.0709 16.2077 13.0195 16.6575C12.968 17.1073 13.019 17.5629 13.1686 17.9902C13.3183 18.4175 13.5627 18.8054 13.8836 19.1248C14.2044 19.4442 14.5934 19.6868 15.0214 19.8345C15.4494 19.9821 15.9052 20.0311 16.3548 19.9775C16.8043 19.924 17.236 19.7694 17.6173 19.5253C17.9986 19.2812 18.3197 18.954 18.5566 18.5682"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 17V9M9 5V4H19V15"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8H19"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 3L21 21"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_67786">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
