import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DOG } from '../utils/queries';

const DogProfile = () => {
    const { data } = useQuery(QUERY_DOG);
    const dogs = data?.dogs || [];

    const dogInfo = dogs.map(dog => {
        return <div>
            <p><b>Name:</b> {dog.name}</p>
            <p><b>Age:</b> {dog.age}</p>
            <p><b>Breed:</b> {dog.breed}</p>
            <p><b>Weight:</b> {dog.weight}</p>
        </div>
    })

    return (
        <div className="dog-information-container">
            {dogInfo}
        </div>
    );

};

export default DogProfile;