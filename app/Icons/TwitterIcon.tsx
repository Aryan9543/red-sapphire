import React from 'react';

type TwitterIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const TwitterIcon: React.FC<TwitterIconProps> = ({ width = 19, height = 17, color = '#C40C0C' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 19 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="mask0" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="-1" width="19" height="18">
                <path d="M0.0600586 -1H18.0601V17H0.0600586V-1Z" fill="white" />
            </mask>
            <g mask="url(#mask0)">
                <path
                    d="M14.2351 -0.156616H16.9955L10.9655 6.75281L18.0601 16.1565H12.5058L8.15234 10.4544L3.17663 16.1565H0.41363L6.86277 8.76367L0.0600586 -0.155331H5.75577L9.68492 5.05567L14.2351 -0.156616ZM13.2643 14.5005H14.7943L4.92006 1.41324H3.27949L13.2643 14.5005Z"
                    fill={color}
                />
            </g>
        </svg>
    );
};

export default TwitterIcon;
