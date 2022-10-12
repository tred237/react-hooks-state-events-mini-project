import React, { useState } from "react";

function CategoryFilter({ categories, tasks, setTasks }) {
  const [selected, setSelected] = useState('All')

  function handleCategory(e){
    console.log(e.target)
    setSelected(e.target.textContent)
    const newTasks = tasks.filter(element => e.target.textContent === 'All' ? true : element.category === e.target.textContent)
    setTasks(newTasks)
  }

  const buttons = categories.map(e => {
    if(selected === e){
      return <button key={e} className="selected" onClick={handleCategory}>{e}</button>
    } else {
      return <button key={e} onClick={handleCategory}>{e}</button>
    }
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
