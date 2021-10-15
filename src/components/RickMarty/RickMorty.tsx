import { useEffect, useState, useReducer } from 'react'
import api from '../../services/api'
import notFoundImg from '../../assets/images/not-found.png';
import Character from '../../interfaces/character'
import OriginLocation from '../../interfaces/originLocation'
import Header from '../Header'
import Search from '../Search'
import CharacterList from '../CharacterList'
import ProfileCard from '../ProfileCard'
import Pagination from '../Pagination'
import { HomeContainer, StyledLoadingDiv, StyledNotFoundDiv } from "./RickMorty.style";
import { reducer } from '../../helpers'
import {
  ERROR, 
  FETCH_CHARACTERS_SUCCESS, 
  FETCH_LOCATIONS_SUCCESS,
  MODAL_OPEN_CLOSE,
  PAGE_DECREMENT,
  PAGE_INCREMENT, 
  SET_SEARCH_TEXT
} from '../../helpers/actionTypes'

const initialState = {
  characters: [] as Character[],
  pageNum: 1 as number,
  isOpen: false as boolean,
  loading: true as boolean,
  notFound: false as boolean,
  originsLocations: [] as OriginLocation[],
  searchText: '' as string   
}

// Rick and Morty API - All characters will be shown page by page, 20 characters 
// per page. 

function RickMorty(): JSX.Element {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [character, setCharacter] = useState({} as Character);
  const [originLocation, setOriginLocation] = useState({} as OriginLocation);

// Fetching all character's Information details.
  useEffect(() => {
    async function loadCharacters() {
      if (state.searchText === "") {
        await api.get(`/character/?page=${state.pageNum}`)
          .then((response) => {
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results })
          },
          (error) => {
            console.log(error)
            dispatch({ type: ERROR, payload: true})
          });
      } else {
        await api.get(`/character/?name=${state.searchText}`)
          .then((response) => {
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: response.data.results })
          },(error) => {
            console.error(error);
            dispatch({ type: ERROR, payload: true})
          })
      }
    }

    loadCharacters();
  }, [state.searchText, state.pageNum])

  // Fetching all character's origin and location details.

  useEffect(() => {
    async function loadOriginLocation() {
        await api.get(`/location/?page=${state.pageNum}`)
          .then((response) => {
            dispatch({ type: FETCH_LOCATIONS_SUCCESS, payload: response.data.results })
          },
          (error) => {
            console.error(error);
            dispatch({ type: ERROR, payload: true})
          });
    } 
    loadOriginLocation();
  }, [state.pageNum])

  const onCloseModalHandler = () => {
    dispatch({ type: MODAL_OPEN_CLOSE, payload: !state.isOpen })
  }

  const handleClick = (index: number) => {
    setCharacter(state.characters[index])
    setOriginLocation(state.originsLocations[index])
    dispatch({ type: MODAL_OPEN_CLOSE, payload: !state.isOpen })
  }

  const prevPage = () => dispatch({ type: PAGE_DECREMENT, payload: state.pageNum - 1 })
  const nextPage = () => dispatch({ type: PAGE_INCREMENT, payload: state.pageNum + 1  })
 
  return (
    <div>
      {state.isOpen && <ProfileCard character={character} originLocation={originLocation} 
        handleClick={onCloseModalHandler}/>}
      <Header />
      <HomeContainer>
        <Search 
          searchText={state.searchText} 
          setSearchText={(value)=> dispatch({ type: SET_SEARCH_TEXT, payload: value })} 
        />
        {
          state.loading ? (
            <StyledLoadingDiv>
              <p>Loading...</p>
            </StyledLoadingDiv>
          ) : (
            state.notFound ? (
              <StyledNotFoundDiv>
                <h3>The searched character was not found</h3>
                <img src={notFoundImg} alt="Rick and Morty looking for the character" />
              </StyledNotFoundDiv>
            ) : (
              <>
                <CharacterList characters={state.characters} loading={state.loading} handleClick={handleClick}/>
                <Pagination loading={state.loading} prevPage={prevPage} nextPage={nextPage} />
              </>
          ))
        }
      </HomeContainer>
    </div>
  )
}

export default RickMorty