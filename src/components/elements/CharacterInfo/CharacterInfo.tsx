import Character from '../../../interfaces/character'
import { StyledWrapper } from './CharacterInfo.styled'

type CharacterInfoProps = {
    character: Character | undefined
}

// The character's information will be listed.

function CharacterInfo({character}: CharacterInfoProps): JSX.Element {

    return (
        <StyledWrapper>
            { character !== undefined &&
                <>
                <li>
                <strong>Name:</strong> {character.name}
                </li>
                <li>        
                    <strong>Created:</strong> {character.created}
                </li>
                <li>
                    <strong>Type:</strong> {character.type? character.type : ' ___ ' }
                </li>
                <li>
                    <strong>Status:</strong> {character.status}
                </li>
                <li>
                    <strong>Gender:</strong> {character.gender}
                </li>
                <li>
                    <strong>Species:</strong> {character.species}
                </li>
                <li>
                    <strong>Location:</strong> {character.location.name}
                </li>
                <li>
                    <strong>Originally From:</strong> {character.origin.name}
                </li>
                </>
            }
     </StyledWrapper>
    )
}

export default CharacterInfo