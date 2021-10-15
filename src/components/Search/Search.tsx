import { ChangeEvent } from "react";
import { StyledSearchContainer } from "./Search.style";

type SearchProps = {
  searchText: string
  setSearchText: (value: string) => void
}

function Search({ searchText, setSearchText }: SearchProps): JSX.Element {
  
  async function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
  }

  return (
    <StyledSearchContainer>
      <input
        type='text'
        placeholder='Search ...'
        value={searchText}
        onChange={handleChange}
      />
    </StyledSearchContainer>
  );
}

export default Search