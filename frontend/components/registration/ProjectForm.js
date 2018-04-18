import React from 'react';


const ProjectForm = ({ data, onChange, index }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    Name: <input type="text" name="company" value={data.name} onChange={e => { onChange(index, { name: e.target.value})}} />
    Description: <input type="text" name="description" value={data.description} onChange={e => { onChange(index, { description: e.target.value})}} />
  </div>
)


export default ProjectForm
