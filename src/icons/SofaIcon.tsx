import React from "react";

export const SofaIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg width={props.width || 15} height={props.height || 15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.25" {...props}>
<g clipPath="url(#clip0_802_63437)">
<path d="M4 11C4.53043 11 5.03914 11.2107 5.41421 11.5858C5.78929 11.9609 6 12.4696 6 13V14H18V13C18 12.4696 18.2107 11.9609 18.5858 11.5858C18.9609 11.2107 19.4696 11 20 11C20.5304 11 21.0391 11.2107 21.4142 11.5858C21.7893 11.9609 22 12.4696 22 13V18C22 18.2652 21.8946 18.5196 21.7071 18.7071C21.5196 18.8946 21.2652 19 21 19H3C2.73478 19 2.48043 18.8946 2.29289 18.7071C2.10536 18.5196 2 18.2652 2 18V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V11" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5V14" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_63437">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
);
