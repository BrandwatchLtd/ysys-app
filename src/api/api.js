// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.

const getData = async (
  radioSideBar,
  query,
  selectSideBar,
  pageSelector,
  alive,
  gender
) => {
  const URL = `https://anapioficeandfire.com/api/${radioSideBar}?name=${query}&page=${pageSelector}&pageSize=${selectSideBar}`;

  const selectURL = () => {
    switch (radioSideBar) {
      case "characters":
        return URL.concat(`&isAlive=${alive}&gender=${gender}`);
      case "houses":
        return URL;
      case "books":
        return URL;
      default:
        return URL;
    }
  };
  try {
    const fetchURL = selectURL();
    const response = await fetch(fetchURL);
    const links = response.headers.get("link").split(",");
    return response;

  } catch (error) {
    return console.log(error.message);
  }
};

export default getData;
