import React from 'react'

const cars = [
  {
    id: 1,
    name: 'ferrari',
    image: 'https://i.pinimg.com/1200x/68/e2/d5/68e2d57bbb51cf28c66f4b72ea9b8804.jpg',
  },
  {
    id: 2,
    name: 'lamborghini',
    image: 'https://i.pinimg.com/1200x/2b/cc/82/2bcc82121fd61c64507b56c9740d6251.jpg',
  },
  {
    id: 3,
    name: 'bugatti',
    image: 'https://i.pinimg.com/736x/68/b2/51/68b251cebdb3d003badbc10880b80fca.jpg',
  },
  {
    id: 4,
    name: 'porsche',
    image: 'https://i.pinimg.com/1200x/e4/36/a7/e436a705e3ff3165d1fc943ef0cbb629.jpg',
  },
  {
    id: 5,
    name: 'tesla',
    image: 'https://i.pinimg.com/736x/4f/fc/7e/4ffc7e2e27178ec64b9616c59f92f957.jpg',
  },
  {
    id: 6,
    name: 'aston martin',
    image: 'https://i.pinimg.com/736x/ae/03/37/ae0337cc97acbd81e6fc07a2bbe42569.jpg',
  },
  {
    id: 7,
    name: 'mclaren',
    image: 'https://i.pinimg.com/736x/77/06/39/7706396710b86c2c296ccd9c343e9379.jpg',
  },
  {
    id: 8,
    name: 'rolls royce',
    image: 'https://i.pinimg.com/736x/b1/e3/a3/b1e3a322bdf9b84c76532351da40548b.jpg',
  },
  {
    id: 9,
    name: 'bentley',
    image: 'https://i.pinimg.com/1200x/39/03/aa/3903aa74a47ef2bafffa55feb43331e8.jpg',
  },
  {
    id: 10,
    name: 'koenigsegg',
    image: 'https://i.pinimg.com/736x/73/26/90/732690ce341d74bc2e76f4cd48079ef3.jpg',
  },
  {
    id: 11,
    name: 'pagani',
    image: 'https://i.pinimg.com/1200x/c0/1c/89/c01c89fb0ddd86ca9ebc11810df8b3fb.jpg',
  },
  {
    id: 12,
    name: 'maserati',
    image: 'https://i.pinimg.com/736x/bd/98/aa/bd98aaaff478bd4d6b2619c3a3441929.jpg',
  },
  {
    id: 13,
    name: 'cadillac',
    image: 'https://i.pinimg.com/1200x/32/21/a7/3221a7272b38ecd8f77238023d1ab51f.jpg',
  },
  {
    id: 14,
    name: 'lexus',
    image: 'https://i.pinimg.com/736x/c6/91/79/c6917905ecf169ec317ed14e67b3f319.jpg',
  },
  {
    id: 15,
    name: 'bmw',
    image: 'https://i.pinimg.com/736x/e6/f9/89/e6f9896df28cbff9441e054dbbe1caa3.jpg',
  },
  {
    id: 16,
    name: 'audi',
    image: 'https://i.pinimg.com/736x/e2/57/b9/e257b9d180da2fbd1df4b271d1d06771.jpg',
  },
  {
    id: 17,
    name: 'mercedes benz',
    image: 'https://i.pinimg.com/736x/6f/4b/2e/6f4b2e0d5e686801f107213a4ce0a90c.jpg',
  },
  {
    id: 18,
    name: 'genesis',
    image: 'https://i.pinimg.com/736x/22/32/02/223202980309923e1bdf4bbd5b17969b.jpg',
  },
  {
    id: 19,
    name: 'infiniti',
    image: 'https://i.pinimg.com/736x/22/32/02/223202980309923e1bdf4bbd5b17969b.jpg',
  },
  {
    id: 20,
    name: 'lincoln',
    image: 'https://i.pinimg.com/736x/da/f4/d7/daf4d7ddb477e27393431f001882074e.jpg',
  },
  {
    id: 21,
    name: 'maybach',
    image: 'https://i.pinimg.com/736x/a0/62/66/a06266d4d30bdd45468516feea72e7fa.jpg',
  },
  {
    id: 22,
    name: 'rimac',
    image: 'https://i.pinimg.com/1200x/52/6f/50/526f50a380c9c3cc7432f14f0e6869b0.jpg',
  },
  {
    id: 23,
    name: 'hennessey',
    image: 'https://i.pinimg.com/736x/3f/d2/52/3fd252ffa1f74c586b2eb9e3e5a55f22.jpg',
  },
  {
    id: 24,
    name: 'deus',
    image: 'https://i.pinimg.com/1200x/29/c7/91/29c79111457d7dc01b3f97e901374889.jpg',
  },
  {
    id: 25,
    name: 'lucid motors',
    image: 'https://i.pinimg.com/1200x/b6/56/70/b656701a902c0bf7830bce16e67bb82a.jpg',
  },
  {
    id: 26,
    name: 'pininfarina',
    image: 'https://i.pinimg.com/1200x/b5/06/ac/b506accfe60e2a0b4dfa43cbfeb6bc71.jpg',
  },
  {
    id: 27,
    name: 'delorean',
    image: 'https://i.pinimg.com/1200x/38/e4/e5/38e4e5daa5d7554dd0cae2e3c5fd7969.jpg',
  }
];

const ShowAll = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredCars, setFilteredCars] = React.useState(cars);

  React.useEffect(() => {
    setFilteredCars(
      cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
  return (
    <>

    <input
      type="text"
      placeholder="Search cars..."
      value={searchTerm}
      onChange={handleSearchChange}
    />

    <div className="car-list">
      {filteredCars.map(car => (
        <div key={car.id} className="car-item">
          <img src={car.image} alt={car.name} />
          <h3>{car.name}</h3>
        </div>
      ))}
    </div>
    </>
  )
}

export default ShowAll