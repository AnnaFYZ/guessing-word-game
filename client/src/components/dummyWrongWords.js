import Subtitle from "./subtitle"
import LetterCard from "./card"
const HolderForWrongLetters = ({ letterState }) => {
    return (
        <div>
            <Subtitle subtitle="The letters you didn't guess:" fontSize="16pt" />
            {letterState === "wrong" &&
                <LetterCard letterState={letterState} />
            }
        </div>
    )
}
export default HolderForWrongLetters