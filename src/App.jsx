import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("lahore");
  const [city, setCity] = useState(null);

  const fetchData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1923446b7a5efb0f68fef945d34844ff`;
    const response = await fetch(url);
    const data = await response.json();
    setCity(data);
    console.log(data, "ghg");
    
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const inputHandler =(e)=>{
   setSearch(e.target.value)
   e.preventDefault()
  }
  return (
    <>
      <div className="mainSection bg-black py-8">
        <h1>title here</h1>
        <div className="input">
          <form action="">
            <label htmlFor=""> city name</label>
            <input
              type="text"
          
              onChange={inputHandler}
              placeholder="Enter your city name"
            />
          {
            !city ? (
            <><h1>not found</h1></>
            ):(
              <h4>{city.main}</h4>
            )
          }
           
            <button type="button" onClick={() => fetchData()}>
              get data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
