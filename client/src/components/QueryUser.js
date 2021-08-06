import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, } from '../utils/queries';

const QueryUser = () => {
  let username2 = localStorage.getItem('username');
  const { data } = useQuery(QUERY_USER, {
      variables: { username: username2 }
  });
  const user = data?.user || [];
  const userEmail = user.email;
  return (
    <div className='list-of-dogs'>
      {userEmail}
    </div>
  );
};
export default QueryUser;