interface NotificationsProps {
    className: string;
}
export default function Notifications({ className }: NotificationsProps) {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="height" height="height" viewBox="0 0 48.000000 48.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M188 375 c-45 -30 -54 -46 -63 -110 -4 -27 -15 -62 -26 -77 -10 -15
-19 -36 -19 -48 0 -19 6 -20 160 -20 154 0 160 1 160 20 0 12 -9 33 -19 48
-11 15 -22 50 -26 77 -9 65 -18 80 -65 110 -48 30 -55 30 -102 0z"/>
                <path d="M205 90 c3 -5 19 -10 35 -10 16 0 32 5 35 10 4 6 -10 10 -35 10 -25
0 -39 -4 -35 -10z"/>
            </g>
        </svg>



    );
}