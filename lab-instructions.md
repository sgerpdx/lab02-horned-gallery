LAB 02: Horned Creatures Gallery with Filter
Create a photo gallery app.

Image Data
Use the supplied images data file at data.js

Component Tree
App (has state of the filter, with a dropdown)
Header
ImageList
[ImageItem]
1. Build Out Basic App Structure
App.js - top level component. App.js imports the horned creatures data and passes it to ImageList
Header.js - header component
ImageList.js - image list component
ImageItem.js - image item component
Build out basic tree of app, starting at top and working down. The App component should introduce the image list data, passing as a prop to ImageList.

Initially, ImageList component can just show count of images so you know it is receiving the data via props.

Time to git ACP!

3. Create ImageItem children in ImageList
ImageList.js
Map over this.props.images and create/render and ImageItem for each image in the array.

Time to git ACP!

4. Filter Images
App.js
In the render method of App.js, filter through the image data, based on the current state of a dropdown. This dropdown allows users to filter by keyword. That means you'll need to hard code a dropdown in App.js.

Create a key in state to track keyword you are filtering by.

Use a .filter method to filter the list down to items that match the keyword.

Pass the filtered array of images down to ImageList.

Time to git ACP!

STRETCH: Add second filter for number of horns.
This state will need to be tracked separately. Filter cumulatively. That means look at all filters when filtering your array. Add more data points and more filters for more points (up to 2)

STRETCH: Derive Keywords from Data
When filtering, derive unique keywords from the data and use that to create the select options using a .map operation on the unique list of keywords. (hint: Object.keys will give you a list of all the keys).

Time to git ACP!

Points Break Down
Looking For	Points (10)
App and Header components, nicely styled	2
ImageList component that takes in a list of items through a images prop	1
Use .map to render out a list of ImageItem inside ImageList, nicely styled	2
Tracking the state of the keyword dropdown using setState and handlers	2
Working filter in App.js with dropdown that filters the image list by keyword (before passing that array downto ImageList	3
More filters	+1 each
Derive keyword from data	+1