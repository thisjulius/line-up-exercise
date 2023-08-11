/* Bootstrap parent container */
import Container from 'react-bootstrap/Container';

/* Types */
import { IPerformance } from "utils/types";

/* Retrieve API data */ 
import PerformancesData from '../hooks/PerformancesData';

/* Component (Listing individual performances) */
import ListPerformance from 'components/ListPerformance';


const Performances = () => {


  /* Retrieving DATA from API */
  let performances = PerformancesData();

  if (!performances) {
    /* Data is still loading or not available */
    return <p>Loading...</p>;
  }

  return (
    <Container className="pt-5 pb-5"> 
      <h1 className='pt-4 pb-5'>Peformances</h1>
      {/* Map through the data and assign data structure of what is to be expected using TypeScript */}
      {performances?.pricing.map((performance: IPerformance) => (
        <ListPerformance key={performance.id} {...performance.priceBand} />
      ))}
    </Container>
  )
}

export default Performances;