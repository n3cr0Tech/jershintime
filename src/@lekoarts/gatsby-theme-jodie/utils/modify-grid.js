// - Show ONLY Pages directory:
// import{
//     onlyPages,
// } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";
// const modifyGrid = (data) => onlyPages(data);

// export default modifyGrid

//- Default:
import { shuffle } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => shuffle(data);

export default modifyGrid;
