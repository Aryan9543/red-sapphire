import React from 'react';

type TelegramIconProps = {
    width?: number;
    height?: number;
    color?: string;
};

const TelegramIcon: React.FC<TelegramIconProps> = ({ width = 21, height = 18, color = '#C40C0C' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.9962 2.16978L16.9662 16.3548C16.7402 17.3538 16.1602 17.5788 15.3222 17.1278L10.7772 13.7758L8.55221 15.9028C8.32721 16.1288 8.10122 16.3548 7.58522 16.3548L7.94022 11.6798L16.4182 3.97578C16.7722 3.62078 16.3212 3.49178 15.8702 3.78278L5.32922 10.4228L0.783215 9.03678C-0.215785 8.71478 -0.215785 8.03678 1.00922 7.58678L18.6742 0.719785C19.5442 0.461785 20.2862 0.913785 19.9962 2.16978Z"
                fill={color}
            />
        </svg>
    );
};

export default TelegramIcon;

