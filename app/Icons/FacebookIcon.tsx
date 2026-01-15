import React from 'react';

type FacebookIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const FacebookIcon: React.FC<FacebookIconProps> = ({ width = 21, height = 20, color = '#C40C0C' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.0601 10.025C20.0601 4.50502 15.5801 0.0250244 10.0601 0.0250244C4.54006 0.0250244 0.0600586 4.50502 0.0600586 10.025C0.0600586 14.865 3.50006 18.895 8.06006 19.825V13.025H6.06006V10.025H8.06006V7.52502C8.06006 5.59502 9.63006 4.02502 11.5601 4.02502H14.0601V7.02502H12.0601C11.5101 7.02502 11.0601 7.47502 11.0601 8.02502V10.025H14.0601V13.025H11.0601V19.975C16.1101 19.475 20.0601 15.215 20.0601 10.025Z"
                fill={color}
            />
        </svg>
    );
};

export default FacebookIcon;
