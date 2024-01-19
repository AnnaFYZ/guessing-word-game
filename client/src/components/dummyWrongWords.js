import Subtitle from "./subtitle";
import LetterCard from "./card";

const HolderForWrongLetters = ({ letterState }) => {
    return (
        <div>
            {letterState === "wrong" && (
                <>
                    <Subtitle subtitle="The letters you didn't guess:" fontSize="16pt" />
                    <LetterCard letterState={letterState} />
                </>
            )}
        </div>
    );
};

export default HolderForWrongLetters;
