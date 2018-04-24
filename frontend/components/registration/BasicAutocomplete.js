import React from 'react'
import Downshift from 'downshift'

const BasicAutocomplete = ({items, onChange, addSkill}) => (
    <Downshift
      onChange={onChange}
      onStateChange={(e) => onChange(e.inputValue)}
      render={({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
        clearSelection
      }) => (
        <div style={{border: '2px solid orange'}}>
          <input {...getInputProps({placeholder:  'What skills do you have?' })} /> <button onClick={(event) => { clearSelection(); addSkill();}}> Add Skill </button>
          {isOpen ? (
            <div style={{border: '1px solid #ccc'}}>
              {items
                .filter(
                  i =>
                    !inputValue ||
                    i.toLowerCase().includes(inputValue.toLowerCase()),
                )
                .map((item, index) => (
                  <div
                    {...getItemProps({item})}
                    key={item}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? 'gray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          ) : null}
        </div>
      )}
    />
  )

export default BasicAutocomplete;
