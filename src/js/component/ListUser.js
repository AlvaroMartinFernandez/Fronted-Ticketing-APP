import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Load from './load';
import Modal from './modal';
import { libreFranklin } from '@/app/fonts';

let PAGINATION = 0;

export default function ListUser({ users, filter, order }) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page < 0) {
      setPage(0);
      if (typeof window !== 'undefined' && window.localStorage.pagination) {
        localStorage.setItem('pagination', String(0));
      }
    }
    if (typeof window !== 'undefined' && !window.localStorage.pagination) {
      localStorage.setItem('pagination', String(0));
      PAGINATION = 0;
      setPage(PAGINATION);
      console.log('no existe pagination creamos');
      return;
    }
    if (typeof window !== 'undefined' && window.localStorage.pagination && PAGINATION === undefined) {
      PAGINATION = Number(localStorage.getItem('pagination'));
      console.log('pagina ya existe ' + PAGINATION);
      setPage(PAGINATION);
      return;
    }
    if (typeof window !== 'undefined' && window.localStorage.pagination) {
      if (isNaN(page)) {
        setPage(Number(localStorage.getItem('pagination')));
      }
      console.log('pagina guardada ' + localStorage.getItem('pagination'));
      localStorage.setItem('pagination', String(page));
    }
  }, [page]);

  const usersFilter = users.filter((user) => {
    return user.name.toLowerCase().includes(filter.toLowerCase());
  });

  const auxUsers = [...usersFilter];
  const usersOrder = auxUsers.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  const listUsers = [];
  let row = [];
  const usersForPagination = [];

  if (order) {
    usersForPagination.push(...usersOrder);
  } else {
    usersForPagination.push(...usersFilter);
  }

  usersForPagination.forEach((elemento, index) => {
    row.push(elemento);
    if (row.length === 10) {
      listUsers.push(row);
      row = [];
    }
    if (index === usersFilter.length - 1 && row.length !== 10) {
      if (row.length !== 0) {
        listUsers.push(row);
        row = [];
      }
    }
  });

  console.log(page);
  const maxpagination = listUsers.length - 1;
  console.log(maxpagination);

  useEffect(() => {
    if (page > maxpagination) {
      setPage(maxpagination);
      if (typeof window !== 'undefined' && window.localStorage.pagination) {
        localStorage.setItem('pagination', String(maxpagination));
      }
    }
  }, [maxpagination]);

  if (listUsers.length === 0) {
    return (
      <div className="flex-col justify-center items-center mt-20">
        <Image
          src="/empty-box.svg"
          alt="empty-box"
          className="flex-shrink-0 center sm:translate-x-4"
          width={120}
          height={120}
          priority
        />
        <h2 className="text-sm font-medium sm:text-xl sm:font-semibold text-center text-[#4B4B52]">
          No hay usuarios
        </h2>
      </div>
    );
  }

  if (PAGINATION === undefined) {
    return <Load />;
  }

  return (
    <div className="flex-col w-full justify-center mt-5">
      <ul className="flex flex-col flex-start items-center w-full mt-5 mb-11 border-b border-gray-300 border-opa">
        {page <= maxpagination
          ? listUsers[page].map((user, index) => {
              return (
                <li
                  key={user.id}
                  className={`px-3 flex w-full justify-around py-4 md:px-8 gap-3 ${
                    index % 2 ? '' : 'bg-[#FDF9F7]'
                  }`}
                >
                  <Link
                    href={`/profile/${user.id}`}
                    className="w-11/12 flex justify-start gap-3 lg:hover:scale-105 lg:hover:translate-x-[30px] xl:hover:translate-x-[50px]"
                  >
                    <Image
                      src={user.photourl}
                      alt="avatar user"
                      className="flex-shrink-0 text-[#D7D7D7] rounded-full"
                      width={24}
                      height={24}
                      priority
                    />
                    <p className="text-base font-normal leading-5 text-[#A09BA3]">{user.name}</p>
                  </Link>
                  <div className="flex justify-end w-1/12">
                    <Modal user={user} />
                  </div>
                </li>
              );
            })
          : listUsers[maxpagination].map((user, index) => {
              return (
                <li
                  key={user.id}
                  className={`flex w-full justify-around py-4 px-8 gap-3 ${
                    index % 2 ? '' : 'bg-[#FDF9F7]'
                  }`}
                >
                  <Link
                    href={`/profile/${user.id}`}
                    className="w-11/12 flex justify-start gap-3 lg:hover:scale-105 lg:hover:translate-x-[30px] xl:hover:translate-x-[50px]"
                  >
                    <Image
                      src={user.photourl}
                      alt="avatar user"
                      className="flex-shrink-0 text-[#D7D7D7] rounded-full"
                      width={24}
                      height={24}
                      priority
                    />
                    <p className="text-base font-normal leading-5 text-[#A09BA3]">{user.name}</p>
                  </Link>
                  <button>
                    <Image
                      src="/delete.svg"
                      alt="delete user"
                      className="w-1/12 flex-shrink-0 text-[#D7D7D7] lg:hover:scale-110"
                      width={24}
                      height={24}
                      priority
                    />
                  </button>
                </li>
              );
            })}
      </ul>

      <div className={`${libreFranklin.className} flex justify-center items-center gap-2`}>
        <ul className="inline-flex justify-center gap-2 items-center">
          <li
            className={`flex justify-center items-center py-1 bg-[#FDF9F7] border rounded w-8 ${
              page > 0 ? 'border-[#FFC592] hover:scale-110' : 'border-[#D7D7D7]'
            }`}
          >
            <button className="inline-flex hover:scale-110" disabled={page > 0 ? false : true} onClick={() => setPage(0)}>
              <Image
                src={page > 0 ? '/ordenador izq orange.svg' : '/ordenador izq grey.svg'}
                alt="Avatar Usuario"
                className={`flex-shrink-0 ${true ? 'text-[#FFC592]' : 'text-[#D7D7D7]'}`}
                width={20}
                height={20}
                priority
              />
              <Image
                src={page > 0 ? '/ordenador izq orange.svg' : '/ordenador izq grey.svg'}
                alt="Avatar Usuario"
                className="flex-shrink-0 text-[#D7D7D7] translate-x-[-12px]"
                width={20}
                height={20}
                priority
              />
            </button>
          </li>
          <li
            className={`flex justify-center items-center py-1 bg-[#FDF9F7] border rounded w-8 ${
              page > 0 ? 'border-[#FFC592] hover:scale-110' : 'border-[#D7D7D7]'
            }`}
          >
            <button
              className="hover:scale-110"
              disabled={page > 0 ? false : true}
              onClick={() => setPage((prevPage) => prevPage - 1)}
            >
              <Image
                src={page > 0 ? '/ordenador izq orange.svg' : '/ordenador izq grey.svg'}
                alt="Avatar Usuario"
                className="flex-shrink-0"
                width={20}
                height={20}
                priority
              />
            </button>
          </li>
          <li className="flex justify-center items-center  px-3 bg-[#FDF9F7] border rounded-md border-[#FFC592]">
            <button disabled={true} className={`${libreFranklin.className} text-xs text-center font-normal leading-7 text-[#FE9705]`}>
              {`${page + 1} de ${maxpagination + 1}`}
            </button>
          </li>
          <li
            className={`flex justify-center items-center py-1 bg-[#FDF9F7] border rounded w-8 ${
              maxpagination > page ? 'border-[#FFC592] hover:scale-110' : 'border-[#D7D7D7]'
            }`}
          >
            <button disabled={page >= maxpagination ? true : false} onClick={() => setPage((prevPage) => prevPage + 1)}>
              <Image
                src={maxpagination > page ? '/ordenador der orange.svg' : '/ordenador der grey.svg'}
                alt="Avatar Usuario"
                className="flex-shrink-0 text-[#D7D7D7]"
                width={20}
                height={20}
                priority
              />
            </button>
          </li>
          <li
            className={`flex justify-center items-center py-1 bg-[#FDF9F7] border rounded w-8 ${
              maxpagination > page ? 'border-[#FFC592] hover:scale-110' : 'border-[#D7D7D7]'
            }`}
          >
            <button
              className="inline-flex"
              disabled={page >= maxpagination ? true : false}
              onClick={() => setPage(maxpagination)}
            >
              <Image
                src={maxpagination > page ? '/ordenador der orange.svg' : '/ordenador der grey.svg'}
                alt="Avatar Usuario"
                className="flex-shrink-0 text-[#D7D7D7]"
                width={20}
                height={20}
                priority
              />
              <Image
                src={maxpagination > page ? '/ordenador der orange.svg' : '/ordenador der grey.svg'}
                alt="Avatar Usuario"
                className="flex-shrink-0 text-[#D7D7D7] translate-x-[-12px]"
                width={20}
                height={20}
                priority
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
