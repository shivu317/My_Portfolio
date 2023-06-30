// import React from "react";
// import TwitterClone from "../assets/portfolio/TwitterClone.png";
// import KanbanBoard from "../assets/portfolio/KanbanBoard.png";
// import GoogleDoc from "../assets/portfolio/GoogleDoc.png";


// const Portfolio = () => {
//   const portfolios = [
//     {
//       id: 1,
//       src: TwitterClone,
    
//     },
//     {
//       id: 2,
//       src: KanbanBoard,
    
//     },
//     {
//       id: 3,
//       src:GoogleDoc,
      
//     },
    
//   ];

//   return (
//     <div
//       name="portfolio"
//       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-gray-500">
//             Portfolio
//           </p>
//           <p className="py-6">Check out some of my work right here</p>
//           <p className="pz-5 text-1xl font-bold inline border-b-4 border-gray-500">
//           <ol>
//               <li>Twitter-Clone </li>
//               <li>Kanban-Board </li>
//               <li>Google-Doc-Clone</li>
//           </ol>
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//           {portfolios.map(({ id, src}) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
//               <img
//                 src={src}
//                 alt=""
//                 className="rounded-md duration-200 hover:scale-105"
                
//               />
//               <div className="flex items-center justify-center">
//                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Demo
//                 </button>
//                 <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
//                   Code
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import TwitterClone from "../assets/portfolio/TwitterClone.png";
import KanbanBoard from "../assets/portfolio/KanbanBoard.png";
import GoogleDoc from "../assets/portfolio/GoogleDoc.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TwitterClone,
      name: "Twitter-Clone",
      codeLink: "https://github.com/shubham-tiwari171/function-up-tiwtter-clone.git",
      demoLink: "https://legendary-crisp-0923a2.netlify.app/"
    },
    {
      id: 2,
      src: KanbanBoard,
      name: "Kanban-Board",
      codeLink: "https://github.com/shivu317/Project-2-Kanban",
      demoLink: "https://kanban-board-vnoq.vercel.app/"
    },
    {
      id: 3,
      src: GoogleDoc,
      name: "Google-Doc-Clone",
      codeLink: "https://github.com/shivu317/Google-Doc-Clone/tree/google-doc-clone",
      demoLink: "https://your-netlify-link/google-doc-clone"
    }
  ];

  const openCodeLink = (link) => {
    window.open(link, "_blank");
  };

  const openDemoLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, codeLink, demoLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="text-center text-xl font-bold mt-4">{name}</p>
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openDemoLink(demoLink)}
                >
                  Demo
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => openCodeLink(codeLink)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
