import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {
  const [detail, setDetail] = useState('')
  const [category, setCategory] = useState('Code')

  function handleDetailChange(e){
    setDetail(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={(e) => onTaskFormSubmit(e, detail, category)} >
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange} value={detail} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={category}>
          {categories.map(element => {
            if(element !== 'All') return <option key={element} value={element}>{element}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
