import React, { useEffect, useState } from 'react'
import Productcard from '../Components/Productcard'

 function Homepage() {
  const url1="https://fakestoreapi.com/products"
  let [products,setProducts]=useState([])
  let [loading,setLoading]=useState(true)
  let [searchTerm, setSearchTerm] = useState("");

  async function allProducts()
  {
    let response = await fetch(url1)
    let data = await response.json()
    setProducts(data)
    setLoading(false)
  }

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm.length > 0) {
      let result = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(result);
    }
  };


  useEffect(()=>{
    allProducts()
  },[])

  useEffect(() => {
    if (searchTerm.length === 0) {
      allProducts();
    }
  }, [searchTerm]);
  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div className="mb-8 max-w-7xl mx-auto">
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Quick search
        </label>
        <div className="relative mt-2 flex items-center">
          <input
            type="text"
            name="search"
            id="search"
            value={searchTerm}
            className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-400 sm:text-sm sm:leading-6"
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
            <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
              ⌘K
            </kbd>
          </div>
        </div>
      </div> 
    <div className='max-w-7xl mx-auto flex flex-wrap justify-between'>
      {loading ? "Fetching products":(
        products.map((product)=>{
          return(
             <>
              <Productcard key={product.id} product={product} />
             </>
          )

        })
      )}
  </div>
  </div>
  )
}
export default Homepage