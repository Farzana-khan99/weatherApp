import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1923446b7a5efb0f68fef945d34844ff`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main);
      console.log(data, "ghg");
    };
    fetchData();
  }, [search]);

  const inputHandler = (e) => {
    setSearch(e.target.value);
    //  e.preventDefault()
  };
  return (
    <>
      <div className="mainSection text-center  flex justify-center items-center  h-screen flex-col  bg-slate-50 py-8">
        <div className="input bg-slate-300 px-6 shadow py-5">
          <h1 className=" capitalize text-3xl  font-medium my-3 text-[#1F6E8C]">title here</h1>
          <form action="">
            <label
              className="capitalize block text-xl pb-2 font-medium"
              htmlFor=""
            >
              
              city name
            </label>
            <input
              type="text"
              value={search}
              onChange={inputHandler}
              placeholder="Enter your city name"
              className=" outline-none font-medium capitalize my-4 p-2 px-8 placeholder:text-black bg-slate-200  w-[100%]  rounded-full"
            />
            {!city ? (
              <>
                <h1 className=" capitalize text-red-600 text-3xl my-2">
                  not found
                </h1>
              </>
            ) : (
              <>
                <h2 className="capitalize  text-black text-3xl  my-2">
                  temp:{city.temp}
                </h2>
                <span className="capitalize text-orange-500 font-bold my-2">
                  Feel like: {city.feels_like}
                </span>
                <p className="capitalize  text-black font-bold my-2">
                  temp_max: {city.temp_max}
                </p>
              </>
            )}

            <button
              className=" mt-4 text-lg py-2 px-6 rounded font-medium bg-orange-500 text-white capitalize outline-none"
              type="button"
              onClick={() => fetchData()}
            >
              get data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
