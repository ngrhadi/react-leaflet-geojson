import React from 'react';

const Legend = ({ legendItems }) => {
  consol.log(legendItems);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      {legendItems.map((item) => (
        <div
          key={item.item}
          style={{
            backgroundColor: item.color,
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
