import { StyledWrapper } from './OriginLocationInfo.style'
import OriginLocation from '../../../interfaces/originLocation'

type OriginLocationInfoProps = {
    originLocation: OriginLocation | undefined
}

// Information regarding to the character's origin and location will be listed.

function OriginLocationInfo({originLocation}: OriginLocationInfoProps): JSX.Element {

    return (
        <StyledWrapper>
           { originLocation !== undefined &&
            <>
              <li>
                <strong>Location's Name:</strong> {originLocation.name}
              </li>
              <li>
                <strong>Type:</strong> {originLocation.type}
              </li>
              <li>
                <strong>Dimension:</strong> {originLocation.dimension}
              </li>
              <li>
                <strong>Amount of Residents:</strong> {originLocation.residents && originLocation.residents.length}
              </li>
              <li>
                <strong>Created:</strong> {originLocation.created}
              </li>
            </>
           }
        </StyledWrapper>
    )
}

export default OriginLocationInfo