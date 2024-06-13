import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement -> React Element -> Object -> HTML Element(Renders into DOM)
// core element in React
const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
// use fragments or array for multiple lines in JSX
const jsx = [<h1>Class</h1>, <h2>Hello</h2>];

// JSX is not HTML in JS -> It's HTML(XML) like Syntax
// JSX(transpiled) before it return the JS Code -> Parcel -> Babel(package)
// JSX => Babels transpiles -> React.createElement => React Element => Object => HTML Element
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;

// React Component
// Class Based Components -> Older Way - Uses Javascript Classes
// functional Component -> Newer Way - Uses Javascript Functions

// React Functional Component (React Javascript function)

// const fn = () => true;

/*const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
}; */

// Component Composition - composing 2 components into one another
/*const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React
  </h1>
); */

const title = <h1>Hello</h1>;

const data = getData();
// Cross Side Scripting Attack
// JSX can take of this attacks

//const title = 10000;
const HeadingComponent = () => (
  <div id="container">
    {12345 + 678910}
    <Title />
    <Title></Title>
    {Title()}
    {title}
    {data}
    {console.log('Hello')}
    <h1 className="head" tabIndex="5">
      Namaste React Using JSX
    </h1>
  </div>
);

// we can use functional component inside element
// Don't put div(Component) inside h1
/*const HeadingComponent = () => (
  <h1 className="heading">Namaste React Functional Component</h1>
);*/

/* const HeadingComponent = () => (
  <div>
  Hello</div>) */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
