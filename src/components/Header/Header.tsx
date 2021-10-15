import { StyledHeaderWrapper, StyledHeaderContainer, StyledImage } from './Header.style';
import rickAndMortyImg from '../../assets/images/rick-morty.png';

function Header() {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <h1>RICK &amp; MORTY</h1>
      </StyledHeaderContainer>
      <StyledImage>
        <img src={rickAndMortyImg} alt='Rick and Morty' />
      </StyledImage>
    </StyledHeaderWrapper>
  );
}

export default Header