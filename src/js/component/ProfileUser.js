import React, { useEffect, useState } from 'react';

//import Tab from '@/components/tab';

const ProfileUser = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.URLBACKEND}/user/${id}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };
    fetchData();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  return (
    <>
      <div className="flex justify-center h-40 items-center flex-shrink-0 bg-custom-bg bg-center bg-cover rounded-lg border-white md:bg-auto">
        <div className="w-25 h-25 flex-shrink-0 translate-y-[70px] sm:translate-y-[65px] my-1">
          <Image
            src={user.photourl}
            alt="Avatar Usuario"
            className="flex-shrink-0 border-4 border-white rounded-full "
            width={100}
            height={100}
            priority
          />
        </div>
      </div>

      <div className="flex justify-center flex-col items-center mt-10 sm:mt-9 gap-7">
        <h2 className="text-custom-nameuser text-center text-2xl leading-relaxed font-semibold tracking-tighter">{user.name}</h2>
        <div className="flex justify-center items-center sm:px-10 px-4 max-w-lg">
          <p className="text-center self-stretch text-base font-normal leading-6 text-gray-900">{user.description}</p>
        </div>
        <Tab />
      </div>
    </>
  );
};

export default ProfileUser;
