interface SettingsProps {
    className: string;
}
export default function Settings({ className }: SettingsProps) {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="inherit" height="inherit"
            viewBox="0 0 24.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M87 200 c-10 -12 -22 -18 -28 -14 -18 11 -38 -27 -25 -48 8 -13 8
-23 0 -36 -13 -21 7 -59 25 -48 6 4 18 -2 28 -14 10 -11 24 -20 33 -20 9 0 23
9 33 20 10 12 22 18 28 14 18 -11 38 27 25 48 -8 13 -8 23 0 36 13 21 -7 59
-25 48 -6 -4 -18 2 -28 14 -10 11 -24 20 -33 20 -9 0 -23 -9 -33 -20z m63 -55
c26 -32 -13 -81 -47 -59 -10 6 -19 19 -21 28 -8 38 43 61 68 31z"/>
            </g>
        </svg>


    );
}