import React, { useState } from "react";
import "./SidebarComponent.css";
import {
  RadioButton,
  RadioButtonGroup,
  Button,
  Dropdown,
  DropdownTarget,
  TextInput,
  TextInputIcon,
  DropdownSource,
  DropdownContext,
  DropdownMenuItem,
  DropdownMenu,
} from "@brandwatch/axiom-components";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = (props) => {
  const {
    setSidebarCategories,
    setSidebarLimit
  } = props;

  const items = [10, 25, 50];
  const [selectedItem, setSelectedItem] = useState(10);

  const handleDropdownChange = (value) => {
    setSidebarLimit(value);
  }

  return (
    <div className={"sidebar"}>
      <RadioButtonGroup>
        <RadioButton name="filter">Characters</RadioButton>
        <RadioButton name="filter">Books</RadioButton>
        <RadioButton name="filter">Houses</RadioButton>
      </RadioButtonGroup>

      <Dropdown>
        <DropdownTarget>
          <TextInput
            isTarget
            onChange={handleDropdownChange}
            placeholder="Pick an Option"
            value={selectedItem}
          >
            <TextInputIcon name="chevron-down" />
          </TextInput>
        </DropdownTarget>
        <DropdownSource>
          <DropdownContext>
            <DropdownMenu>
              {items.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => {
                    setSelectedItem(item)
                    handleDropdownChange(item)
                  }}
                  selected={selectedItem === item}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          </DropdownContext>
        </DropdownSource>
      </Dropdown>
      <Button onClick={() => {}}>Search</Button>

      {/* TODO - flesh out this component to include all controls for configuring
      your data retrieval. This must include the category
      (books/characters/houses) [STRETCH] Feel free to add anything else you
      want, for example: * a dropdown to select number of items you want to
      retrieve * a search bar to search for a particular item You could even
      change what you can see in the search bar based on what you are searching
      for. E.g add a dropdown to determine which field you're searching on
      ("name"/"title"/"alias") */}
    </div>
  );
};
