import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Col, Row } from 'reactstrap'
import { CountryCardapi } from '../../Store/api';

function CountryCard() {
  const dispatch = useDispatch()
  const { carts } = useSelector((state) => state.country);
  console.log("country",carts);
  useEffect(() => {
    dispatch(CountryCardapi());
  }, [dispatch]); 
  return (
    <div>
      
            <Row >
          {carts.map((item,key)=>(
          <Col md="6">
      <Card className='m-2' style={{border:"2px solid black", borderRadius:"0px"}}>
        
          <div key={key} className='d-flex'>
            <div className='d-flex align-items-center justify-content-center p-2'>
                <img src={item?.flag} alt='' width={"50px"} height={"50px"}/>
              </div>
              <div className='d-flex  justify-content-center m-2 p-1' style={{flexDirection:"column"}}>
                <h3>{item?.name}</h3>
                <p>{item?.region}
                </p>
              </div>
            </div>
        
      </Card>
          </Col>
          ))}
          </Row>
    </div>
  )
}

export default CountryCard
