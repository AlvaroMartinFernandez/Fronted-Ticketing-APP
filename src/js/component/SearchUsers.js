import React, { ChangeEvent, useState } from 'react';

//import ListUser from './listuser';
//import { libreFranklin } from '@/app/fonts';

const SearchUsers = ({ users }) => {
  const [value, setValue] = useState('');
  const [order, setOrder] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOrder = () => {
    setOrder((prevOrder) => !prevOrder);
  };

  return (
    <>
      <div className="flex px-6 justify-between items-center flex-shrink-0 bg-white gap-3">
        <div className="flex h-8 py-2 px-3 flex-shrink-0 items-center rounded border border-gray-300 w-8/12">
          <Image
            src="/search.svg"
            alt="Icono de busqueda"
            className="text-[#808B9B] mx-3 my-2 translate-x-[-14px]"
            width={20}
            height={20}
            priority
          />
          <input
            type="search"
            className={`flex-1 pl-1 sm:pl-10 border-none outline-none ${libreFranklin.className} text-sm font-normal leading-normal text-[#808B9B] translate-x-[-30px]`}
            value={value}
            onChange={handleChange}
            placeholder="Buscar por nombre"
          />
        </div>
        <button
          onClick={handleOrder}
          className={`${libreFranklin.className} text-sm font-semibold px-0 sm:px-4 py-3 ${
            order
              ? 'bg-[#FDF9F7] text-[#ED8936] border rounded-[32px] border-[#ED8936]  '
              : 'text-[#2D1937] bg-white'
          } w-4/12 sm:w-auto hover:scale-110`}
        >
          <p className="hidden sm:block"> Ordenar por nombre </p>
          <p className="block sm:hidden"> Ordenar (A - Z) </p>
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center ">
        <ListUser users={users} filter={value} order={order} />
      </div>
    </>
  );
};

export default SearchUsers;
