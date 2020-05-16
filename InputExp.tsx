import React from 'react';

export default ({ val,handleChange }) => 
<div className="uk-text-small">
<span className="uk-text-primary">Трудовой стаж до 1998 года</span>
<label className="uk-text-small uk-flex uk-flex-around">
  <input type="text" value={val} onChange={handleChange} className="uk-text-right"/>
  лет
  <input type="text" value={val} onChange={handleChange} className="uk-text-right"/>
  мес.
</label>
</div>;