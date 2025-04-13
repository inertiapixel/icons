import React from "react";

export const CameraShareIcon = (
  props: React.SVGProps<SVGSVGElement> & { width?: number; height?: number; color?: string }
) => (
  <svg   viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" stroke={props.color || 'currentColor'} fill={props.fill || 'none'} width={props.width || 15} height={props.height || 15} {...props}>
<g clipPath="url(#clip0_802_80190)">
<path d="M12.5 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V13"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.9799 13.3464C15.0531 12.7172 14.9252 12.0809 14.6145 11.5289C14.3039 10.9768 13.8265 10.5372 13.2507 10.2731C12.6749 10.009 12.0302 9.934 11.4092 10.0588C10.7881 10.1835 10.2225 10.5017 9.79331 10.9676C9.36416 11.4336 9.09352 12.0234 9.02018 12.6527C8.94683 13.2819 9.07455 13.9182 9.38502 14.4703C9.69549 15.0225 10.1728 15.4622 10.7485 15.7265C11.3242 15.9908 11.9688 16.066 12.5899 15.9414"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22L21 17"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 21.5V17H16.5"  strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_802_80190">
<rect width="24" height="24" />
</clipPath>
</defs>
</svg>
);
