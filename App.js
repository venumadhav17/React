// React-18 stuff

/*
<div id="parent">
       <div id="child">
             <h1>Hello</h1>
        </div>
</div>
*/

// ReactElement(Object) => HTML(Browser Understands)

/*
How to create Sibblings
------------------------

<div id="parent">
       <div id="child">
             <h1>Hello</h1>
             <h2>Hello1</h2>
        </div>
</div>
*/

/*
<div id="parent">
       <div id="child">
             <h1>Hello</h1>
             <h2>Hello1</h2>
        </div>
        <div id="child">
             <h1>Hello</h1>
             <h2>Hello1</h2>
        </div>
</div

*/

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Im an h1 tag'),
    React.createElement('h2', {}, 'Im an h2 tag'),
    React.createElement('h1', {}, 'Im an h1 tag'),
    React.createElement('h2', {}, 'Im an h2 tag'),
  ])
);

/*const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Im an h1 tag'),
    React.createElement('h2', {}, 'Im an h2 tag'),
  ])
); 
console.log(parent);
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, 'Im an h1 tag')
  )
); 

// 1st line comes form 1st cdn link
const heading = React.createElement('h1', { id: 'heading' }, 'Hello React');
// If we need to put heading into DOM / into browser we use ReactDom.createRoot
// root is the place where react code is render
console.log(heading); // Object */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
