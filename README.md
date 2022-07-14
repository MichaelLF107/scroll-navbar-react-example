# About

This is a simple project to demonstrate the functionality of a componentized scroll navigation bar, where the sections of the page can be passed as an argument to the component

## Usage of the component

The component takes as props an array of React Refs and an Array containing the name and the icon of the sections.

For example, on the page Home we have 2 sections, Projects and Skills. To use this component first we create an array with the names and icons (optional) of the sections. Code snippet: 

`const sectionArr = [
    { name: "Projects", Icon: <ApiOutlinedIcon /> },
    { name: "Skills", Icon: <AutoAwesomeOutlinedIcon /> },
];`

And then, map the sectionArr to a Ref array. Code snippet:

`const refs = useRef(sectionArr.map(() => React.createRef()));`

With the refs array created, we assign a Ref of the array to a section of the page, in the order they appear on the page, using `refs.current[i]`.

## Available Scripts

To start this project, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
