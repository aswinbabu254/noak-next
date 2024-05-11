export const useParse = (content)=>{

    const parse = require("html-react-parser");
    return parse(content ?? "");

}