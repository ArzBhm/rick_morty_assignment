import { useEffect, useState } from 'react'
import axios from "axios";
import Character from '../../interfaces/character'
import OriginLocation from '../../interfaces/originLocation'
import CharacterInfo from '../elements/CharacterInfo'
import OriginLocationInfo from '../elements/OriginLocationInfo'
import Chapters from '../elements/Chapters'
import { 
  StyledModalContainer,
  StyledModal, 
  StyledCloseButton, 
  StyledProfileDetails, 
  StyledImage, 
  StyledInfoWrapper,
  StyledButtonWrapper 
} from './ProfileCard.styled'

type ProfileCardProps = {
  character: Character | null
  originLocation: OriginLocation | null
  handleClick: () => void
}

// The modal containing the whole information of a selected character will be shown.

function ProfileCard({ character, originLocation, handleClick }: ProfileCardProps): JSX.Element {
  const [episodeList, setEpisodeList] = useState<string[]>([]);
  const [showInfo, setShowInfo] = useState<boolean>(false)
  const [showOriginLocation, setShowOriginLocation] = useState<boolean>(false)
  const [showChapters, setShowChapters] = useState<boolean>(false)

  useEffect(() => {
    if (character) {
      let episodeUrls = character.episode

      if (episodeUrls !== null) {
        const list: string[] = [];
        episodeUrls.forEach(episodeUrl => {
          async function loadEpisodeList() {
            await axios.get(episodeUrl)
              .then(response => response.data)
              .then(data => list.push(data.name))
          } 
          loadEpisodeList();    
        })
        setEpisodeList(list) 
      }
    }
  }, [])

  const handleShowInfo = () => {
    setShowInfo(!showInfo)
  }

  const handleShowOriginLocation = () => {
    setShowOriginLocation(!showOriginLocation)
  }

  const handleShowChapters = () => {
    setShowChapters(!showChapters)
  }

  return (
    <StyledModalContainer>
      { (character !== null) && (originLocation !== null) &&
        <StyledModal >
        <StyledCloseButton onClick={() => handleClick()}>
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </StyledCloseButton>
        <StyledProfileDetails>
            <h1>Character Details</h1>
            <StyledInfoWrapper>
            <StyledImage src={character.image} alt={character.name} />           
            <StyledButtonWrapper>
              <button onClick={handleShowInfo}>
                Character's Information
              </button>
              {showInfo && <CharacterInfo character={character} />}
            </StyledButtonWrapper>
            <StyledButtonWrapper>
              <button onClick={handleShowOriginLocation}>
                Origin and Location
              </button>
              {showOriginLocation && <OriginLocationInfo originLocation={originLocation} />}
            </StyledButtonWrapper>
            <StyledButtonWrapper>
              <button onClick={handleShowChapters}>
                Chapters
              </button>
              {showChapters && <Chapters episodeList={episodeList} />}
            </StyledButtonWrapper>
          </StyledInfoWrapper>
        </StyledProfileDetails>
      </StyledModal>
      }
    </StyledModalContainer>
  )
}

export default ProfileCard
