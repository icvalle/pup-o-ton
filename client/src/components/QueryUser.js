import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, } from '../utils/queries';

const QueryUser = () => {
    
    const { data } = useQuery(QUERY_USER, {
        variables: { username: "username" }
    });
    const user = data?.user || [];

    const userEmail = user.email;
  
    return (
      <div className="list-of-dogs">
        {userEmail}
      </div>
    );
  };

  export default QueryUser;