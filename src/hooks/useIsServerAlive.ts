// import React from 'react';
// import { API_URL } from '../constants/api.constants';
//
// const useServerStatus = () => {
//   const [isServerAlive, setIsServerAlive] = React.useState(false);
//
//   React.useEffect(() => {
//     fetch(API_URL)
//       .then(response => {
//         if (response.status === 200) {
//           setIsServerAlive(true);
//         } else {
//           setIsServerAlive(false);
//         }
//       })
//       .catch(() => {
//         setIsServerAlive(false);
//       });
//   }, []);
//
//   return isServerAlive;
// };
//
// export default useServerStatus;
