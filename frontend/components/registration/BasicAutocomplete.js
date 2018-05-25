import React from 'react';
import Downshift from 'downshift';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


const BasicAutocomplete = ({ items, onChange, addSkill }) => (
  <Downshift
    onChange={onChange}
    onStateChange={e => onChange(e.inputValue)}
    render={({
        getInputProps,
        getItemProps,
        isOpen,
        inputValue,
        selectedItem,
        highlightedIndex,
        clearSelection,
      }) => (
        <div>
          <InputGroup>
            <Input className="skillsInput" {...getInputProps({ placeholder: 'What skills do you have?' })} />
            <InputGroupAddon addonType="append">
              <Button className="addSkillbutt" onClick={(event) => { clearSelection(); addSkill(); }}>Add Skill</Button>
            </InputGroupAddon>
          </InputGroup>

          {isOpen ? (
            <div style={{ border: '1px solid #ccc', borderRadius: '5px', width: '560px', marginLeft: '40px' }}>
              {items
                .filter(i =>
                    !inputValue ||
                    i.toLowerCase().includes(inputValue.toLowerCase()))
                .map((item, index) => (
                  <div
                    {...getItemProps({ item })}
                    key={item}
                    style={{
                      backgroundColor:
                        highlightedIndex === index ? '#FAFAFA' : 'white',
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
);

export default BasicAutocomplete;
