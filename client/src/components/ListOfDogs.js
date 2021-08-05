import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOG } from '../utils/queries';

const ListOfDogs = () => {
    const { data } = useQuery(QUERY_DOG);
    const dogs = data?.dogs || [];

    const listOfDogs = dogs.map(dog => {
        return <button data-id={dog._id}>{dog.name}</button>;
        })
  
    return (
      <div className="list-of-dogs">
        {listOfDogs}
      </div>
    );
  };

  export default ListOfDogs;