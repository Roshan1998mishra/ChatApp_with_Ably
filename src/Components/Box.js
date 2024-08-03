// import React, { useState, useEffect } from 'react';
// import Ably from 'ably';

// const Box = () => {
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [ablyChannel, setAblyChannel] = useState(null);

//   useEffect(() => {
//     const ably = new Ably.Realtime('7KajCg.dJ_W-Q:y7CsI_ehfXFW_JhVjM63GRimD45Xbb4_d7H1ttR3CKw');
//     const channel = ably.channels.get(`chat_${Math.random().toString(36).substring(7)}`); // Unique channel name

//     channel.attach();
//     channel.once('attached', () => {  
//       setAblyChannel(channel);

//       channel.subscribe('message', (msg) => {
//         setMessages((prevMessages) => [...prevMessages, msg.data]);
//       });
//     });

//     return () => {
//       if (ablyChannel) {
//         ablyChannel.detach();
//       }
//       ably.close();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (inputValue.trim() !== '' && ablyChannel) {
//       ablyChannel.publish('message', inputValue);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <div className='get'> 
//         {messages.map((message, index) => (
//           <div key={index}>{message}</div>
//         ))}
//       </div>
      
//     <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <div>
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Box;
