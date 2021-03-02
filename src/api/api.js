import React, { useState } from "react";

// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
export const getData = async (category) => {
  const response = await fetch(
    `https://anapioficeandfire.com/api/${category}`
  );
  const getDataLog = await response.json();
    console.log(getDataLog);
};