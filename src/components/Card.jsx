import React from "react";

const Card = ({ icon, title, value }) => {
  return (
    <div className="bg-gray-100 text-slate-900 p-4 rounded-lg shadow-md flex items-center space-x-6 dark:bg-slate-900 dark:text-white">
      <div className="text-3xl text-slate-900 dark:text-white">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
};

export default Card;
