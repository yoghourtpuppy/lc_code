// Question
// Given a HTML structure

// <form id="parent">
// 	<input type="text" name="foo.bat" value="2"/>
// 	<input type="text" name="foo.bar.baz" value="1"/>
// 	<input type="text" name="fizz" value="3"/>
// </form>
// Write a function (in JS) that returns an object with values of text inputs in the form id passed to it.
// For eg:

// getValues("parent") should return object like

// {
// 	"foo": {
// 		"bat" : _____, //Actual value of 1st text box
// 		"bar" : {
// 			"baz" : _____ // Value of 2nd text box
// 		}
// 	},
// 	"fizz" : _____ // Value of 3rd text box
// }

const getValues = (parentId) => {
  const inputElems = document.getElementById(parentId).getElementsByTagName('input');
  const nameArr = [...inputElems].map((elem) => {
    return {name: elem.name, value: elem.value};
  });
  let res = {};
  nameArr.forEach((item)=> {
    const nameArr = item.name.split('.');
    const value = item.value;
    const helper = (res, nameArr) => {
      if(nameArr.length === 0) return value;
      const name = nameArr.shift();
      let next = {};
      if(res[name]) {
        next = res[name];
      }
      res[name] = helper(next, nameArr);
      return res;
    }
    res = helper(res, nameArr);
  });
  return res;
}
