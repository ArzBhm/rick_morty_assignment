import { 
  StyledCardContainer, 
  StyledCardContent, 
  StyledGridWrapper, 
  StyledImage 
} from "./CharacterList.style";

type Character = {
  id: number;
  image: string;
  name: string;
  species: string;
  type?: string;
}

type CharacterListProps = {
  characters: Array<Character> | undefined;
  loading: boolean;
  handleClick: (index: number) => void;
}

// A list of 20 characters will be shown.

function CharacterList({characters, loading, handleClick}: CharacterListProps): JSX.Element {

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <StyledGridWrapper>
    {
      characters !== undefined && (
        characters.map((item: Character, index) => (
          <StyledCardContainer key={item.id} onClick={() => handleClick(index)}>
            <StyledImage>
              <img src={item.image} alt={item.name} />
            </StyledImage>
            <StyledCardContent>
              <div>
                <h3>{item.name}</h3>
              </div>
              <div>
                <p>{item.species}</p>
                <p>{item.type}</p>
              </div>
            </StyledCardContent>
          </StyledCardContainer>
        )
      ))
    }
    </StyledGridWrapper>
  )
}

export default CharacterList