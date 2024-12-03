interface CrownProps {
    className: string;
}
export default function Crown({ className }: CrownProps) {
    return (
        <svg className={className} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="26.000000pt" height="26.000000pt" viewBox="0 0 26.000000 26.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,26.000000) scale(0.100000,-0.100000)"
                stroke="none">
                <path d="M115 231 c-3 -6 -3 -15 0 -21 3 -5 -4 -28 -15 -51 -21 -39 -22 -40
-41 -23 -10 9 -19 23 -19 30 0 19 -20 28 -33 14 -9 -9 -8 -14 4 -23 9 -7 19
-29 23 -49 l7 -38 89 0 89 0 7 38 c4 20 14 42 23 49 12 9 13 14 4 23 -13 14
-33 5 -33 -14 0 -7 -9 -21 -19 -30 -19 -17 -20 -17 -40 21 -10 22 -19 47 -18
57 2 21 -18 33 -28 17z"/>
                <path d="M40 35 c0 -12 17 -15 90 -15 73 0 90 3 90 15 0 12 -17 15 -90 15 -73
0 -90 -3 -90 -15z"/>
            </g>
        </svg>

    );
}