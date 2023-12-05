import React from 'react'
import AuctionCards from './AuctionCards';

async function getData() {
    const res = await fetch('http://localhost:6001/search?pageSize=10');

    if (!res.ok) {
        throw new Error('failed to fetch data');
    }

    return res.json();
}
export default async function Listings() {

    const data = await getData();

  return (
      <div className='grid grid-cols-4 gap-6'>
          {data && data.results.map((auction:any) => (
              <AuctionCards auction={auction} key={auction.id}/>
          ))}
    </div>
  )
}
