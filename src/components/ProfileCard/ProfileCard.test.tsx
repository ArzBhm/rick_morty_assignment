import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ProfileCard from './ProfileCard';
import { characterMock, originLocationMock } from '../../mocks';

const mockFn = jest.fn();

test('Should render profile details in three sections', () => {
  render(<ProfileCard character={characterMock} originLocation={originLocationMock} handleClick={mockFn}/>);
  
  screen.getByText(`Character's Information`);
  screen.getByText('Origin and Location');
  screen.getByText('Chapters');
  screen.getByLabelText('Close')
});

test(`Should render profile details character's information`, () => {
  render(<ProfileCard character={characterMock} originLocation={originLocationMock} handleClick={mockFn}/>);
  const characterInfoBox = screen.getByText(/character's information/i);

  userEvent.click(characterInfoBox);

  expect(screen.getByText(/name/i)).toBeDefined();
  expect(screen.getByText(/status/i)).toBeDefined();
  expect(screen.getByText(/species/i)).toBeDefined();
  expect(screen.getByText(/type/i)).toBeDefined();
  expect(screen.getByText(/gender/i)).toBeDefined();
});

test('Should render profile details origin and location', () => {
  render(<ProfileCard character={characterMock} originLocation={originLocationMock} handleClick={mockFn}/>);
  const placeInfoBox = screen.getByText(/origin and location/i);

  userEvent.click(placeInfoBox);

  expect(screen.getByText(/name/i)).toBeTruthy()
  expect(screen.getByText(/type/i)).toBeTruthy()
  expect(screen.getByText(/dimension/i)).toBeTruthy()
  expect(screen.getByText(/amount of residents/i)).toBeTruthy()
  expect(screen.getByText(/created/i)).toBeTruthy()
});
