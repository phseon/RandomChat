import React, { useState, useEffect } from 'react';
import axios from 'axios';

function InUseIntro() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getIntro = async () => {
        setUsers(null);
        const response = await axios.get(
          'http://localhost:3001/nickname?id=1'
        );
        setUsers(response.data); // 데이터는 response.data 안에 들어있음
    };

    getIntro();
  }, []);

  if (!users) return null;
  return (
    <>
      {users.map(user => (
        <p key={user.id}>
          {user.introduce}
        </p>
      ))}
    </>
  );
}

export default InUseIntro;