import { useEffect, useState } from "react";
import styled from "styled-components";

const BASE_URL = `http://localhost:9000/`;
function App() {

  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  
  // make a network call

  const fetchFoodData =  async () => {
   
  
    
  }

  // fetchFoodData(); this question is being called unlimitedly

  // use Effect, before rendering any elements react will trigger the callback function inside
  // use eefect
  // fetch the data first then render UI

    useEffect(() => {

    const fetchFoodData = async () => {
      setLoading(true);

      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setdata(json);
        setLoading(false);

      } catch (e) {
        setError("Unable to fetch data");
        setLoading(false);
      }
    };

    fetchFoodData();

  }, []); // runs only once

 // this dependency array [] will call func only once



  if(error) return <div> {error} </div>
  if(loading) return <div> </div>

  return (
    <Container>
      <TopContainer>
        <div className="logo">
           <img src="/logo.svg" alt="" />
        </div>

        <div className="search">
          <input type="text" placeholder="Search here ..." />
        </div>
      </TopContainer>

      <FilterComponent>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterComponent>

      <FoodCardContainer>
         <FoodCard></FoodCard>
    
      </FoodCardContainer>

    </Container>
  )
}

export default App

const Container = styled.div`
  margin: 0 auto;
`

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search{
    input{
      background-color: transparent;
      border: 1px solid gray;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`

const FilterComponent = styled.section`
 display: flex;
 justify-content: center;
 gap: 15px;
 padding-bottom: 40px;
`

 const Button = styled.button`
  background-color: #ff4343;
  border-radius: 5px;
  padding: 8px 20px;
  color: white;
  border: none;
 
 `

 const FoodCardContainer = styled.section`
 /* include height to show image */
   height: calc(100vh - 215px); // to remove scroll bar
   background-image: url("/bg.png");
   background-size: cover;
 `

  const FoodCard = styled.section``
