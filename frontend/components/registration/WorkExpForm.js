import React from 'react';


const WorkExpForm = ({ data, onChange, index }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    Company: <input type="text" name="company" value={data.company} onChange={e => { onChange(index, { company: e.target.value})}} />
    Position: <input type="text" name="position" value={data.position} onChange={e => { onChange(index, { position: e.target.value})}} />
    Description: <input type="text" name="description" value={data.description} onChange={e => { onChange(index, { description: e.target.value})}} />
  </div>
)


export default WorkExpForm
