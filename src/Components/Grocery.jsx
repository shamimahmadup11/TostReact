// import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Grocery = () => {
//   const [searchText, setSearchText] = useState("Add todo...");
//   const [data, setData] = useState([{ text: "add data", toggle: false }]);
//   const notify = () => toast("Wow so easy!");
//   function handleToggle(index) {
//     setData((prevData) =>
//       prevData.map((item, i) =>
//         i === index ? { ...item, toggle: !item.toggle } : item
//       )
//     );
//   }

//   function handleAddItem() {
//     if (searchText.trim().length === 0) {
//         notify();
//         <ToastContainer />
       
//         return; 
//       }
//     setData([...data, { text: searchText, toggle: false }]);
//     setSearchText("");
//   }

//   function deleteFun(key){
//     const filterData=data.filter((index)=>{
//         return  index===key;
//     })
//     setData(filterData)
//   }
//   return (
//     <div className="h-auto min-h-52 w-1/2 flex flex-col items-center justify-center align-middle border m-44 gap-4">
//       <h1 className="text-3xl font-bold mb-4 h-auto w-1/3">Grocery Bud :</h1>
     
//       <div className="flex items-center">
//         <input
//           type="text"
//           className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <button
//           className="px-4 py-2 bg-green-500 text-white rounded-md"
//           onClick={handleAddItem}
          
//         >
//           Add Item
//         </button>
//       </div>
//       <div className="flex flex-col gap-3 align-middle justify-center">
//         {data.map((item, index) => (
//           <div key={index} className="flex gap-10 border justify-between ">
//             <input
//               type="checkbox"
//               onClick={() => handleToggle(index)}
//               checked={item.toggle}
//             />
//             <li className={`text-xl font-bold list-none ${item.toggle ? "line-through" : ""}`}>
//               {item.text}
//             </li>
//             <button className="h-10 w-16 bg-green-400 rounded-md text-xl font-bold" onClick={deleteFun}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Grocery;

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Grocery = () => {
  const [searchText, setSearchText] = useState("Add todo...");
  const [data, setData] = useState([{ text: "add data", toggle: false }]);
//   const notify = () => toast("Data added");

  function handleToggle(index) {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, toggle: !item.toggle } : item
      )
    );
  }

  function handleAddItem() {
    if (searchText.trim().length === 0) {
         toast("Please provide the value");
        return; 
      }
    setData([...data, { text: searchText, toggle: false }]);
     toast(" Item Added");
    setSearchText("");
  }

  function deleteFun(index){
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
    toast("  Item Deleted");
  }

  return (
    <div className="h-auto min-h-52 w-1/2 flex flex-col items-center justify-center align-middle border m-44 gap-4">
      <h1 className="text-3xl font-bold mb-4 h-auto w-1/3">Grocery Bud :</h1>
      <ToastContainer />
     
      <div className="flex items-center">
        <input
          type="text"
          className="px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500 mr-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
      <div className="flex flex-col gap-3 align-middle justify-center">
        {data.map((item, index) => (
          <div key={index} className="flex gap-10 border justify-between ">
            <input
              type="checkbox"
              onClick={() => handleToggle(index)}
              checked={item.toggle}
            />
            <li className={`text-xl font-bold list-none ${item.toggle ? "line-through" : ""}`}>
              {item.text}
            </li>
            <button className="h-10 w-16 bg-green-400 rounded-md text-xl font-bold" onClick={() => deleteFun(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
