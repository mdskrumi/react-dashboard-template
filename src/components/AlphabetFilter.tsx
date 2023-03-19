export interface IAlphabetFilter {
    currentAlphabet: string;
    setCurrentAlphabet: Function;
    className?: string;
}

const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'All',
];

const AlphabetFilter: React.FC<IAlphabetFilter> = ({
    currentAlphabet,
    setCurrentAlphabet,
    className,
}) => {
    return (
        <ul
            className={`flex justify-center items-center p-8 flex-wrap ${className}`}
        >
            {alphabets.map((a) => (
                <li
                    key={a}
                    className={
                        a === currentAlphabet
                            ? 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded h-10 w-fit min-w-[2.5rem] m-[.15rem] bg-primary_dark font-bold'
                            : 'cursor-pointer text-base text-center px-[10px] pt-[9px] rounded h-10 w-fit min-w-[2.5rem] m-[.15rem] bg-primary hover:bg-primary_light shadow-sm'
                    }
                    onClick={() => setCurrentAlphabet(a)}
                >
                    {a}
                </li>
            ))}
        </ul>
    );
};

export default AlphabetFilter;
