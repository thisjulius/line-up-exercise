import React from 'react'

/* Boostrap Columns and Rows  */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Importing re-usable data type */
import { IVariants } from 'utils/types';

/* Data structure for this component */
interface IProps { 
  id: number,
  name: string,
  description: string,
  color: string,
  variants: IVariants[]
}

const ListPerformance = (props: IProps) => {

  /* Destructure props for easier access */
  const { name, description, variants } = props;


  /* Displaying table of the different Bands / Prices including variants and fees from the API. */

  return (
    <>

    {variants.map((variant, index) => (
      <div key={index}>
        <Row  className='pt-2'>
          <Col>
            {name + ' - ' + variant.name} 
          </Col>
          
          <Col>
            £{variant.price.value.toFixed(2)}
            <br/>

          {/* To refactor - Create a utils for formatting currencies */ }

           {'(+£' + variant.adjusters[0].price.value.toFixed(2) + ' ' + variant.adjusters[0].name + ')'}
          </Col>
          
        </Row>

        <Row>
          <Col>
          {description}
          </Col>
        </Row>

        <Row>
          <Col>
            {variant.description}
          </Col>
        </Row>

        <hr />

      </div>

    ))}


        </>
  )
}

export default ListPerformance