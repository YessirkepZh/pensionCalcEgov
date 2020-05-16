import React from 'react';

export default ({ val,handleChange }) => 
<label className="uk-text-small uk-flex uk-flex-between">
  текущая сумма накоплений:
  <input type="text" value={val} onChange={handleChange} className="uk-text-right"/>
</label>;

