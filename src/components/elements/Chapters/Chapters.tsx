import { StyledWrapper } from './Chapters.style'

type ChaptersProps = {
  episodeList: string[] | undefined
}

// Name of the chapters the character is featured in will be isted.

function Chapters({episodeList}: ChaptersProps): JSX.Element {

    return (
      <StyledWrapper>
        { episodeList !== undefined && 
          episodeList.map((episode, index) => {
            return (
              <li key={index}>{episode}</li>
            )
          }
        )}
      </StyledWrapper>
     )
}

export default Chapters