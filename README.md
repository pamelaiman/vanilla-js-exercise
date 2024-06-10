# Vanilla JS DOM Manipulation example

## Setup

1. Use this repo as a template to make your own copy on github.
1. Clone it to your dev machine
1. Use live-server or live-preview vscode extension to run a web server and view the index.html page in a browser.
1. check everything seems to work before editing any code
1. check there are no error messages in the browser's console

## Questions and tasks

(Where these are _questions_, make sure you can answer them.)

### a look at index.html and chrome's devtools

1. Take a look at index.html and study the contents of the `body` element.
1. In the browser, right-click and choose Inspect, then choose the `elements` tab and look at what HTML elements are in the page body.
    - How does what you see here differ from what you see in the index.html file?
1. Leave the elements display open while hovering over the characters displayed in the normal browser view. You should see something changing - what's happening?
1. Change chrome's devtools to display the `console` instead of the `elements` tab. On the web page, click "cause an error" and check you can see where errors and console.log messages are being output.
    - You'll need to consult the console frequently when you are working with code which runs in the browser.
    - You can open the console directly with `ctrl+shift+J`
    - Try to leave it open all the time.
    - A smaller console can be placed under the elements view: toggle with `ctrl-`

### looking at myScript and other files

1. Open myScript.js and use vscode's "Fold all" command (accessed with ctrl-shift-p then "fold all") to get an overview of this script. (Later you can use "unfold all" if you need to see all lines of code.)
1. How many functions are declared in myScript.js?
1. Which functions are actually _called_ when myScript.js is executed? Judging by the function names what do you think they do?
1. What's in the imported `characters` variable?
1. Add (or substitute) some of your favourite characters from fiction to the list.
1. How does the JavaScript in myScript.js get access to the elements of the HTML page that it needs to manipulate or monitor?
1. Through all of myScript.js, look for some functions or methods that are called which are not defined in myScript, and any variables which are used which are not declared here. These are likely some DOM objects and methods.
    1. Search for their documentation on google, including the keyword "MDN".
    1. Read a little bit of the documentation for each of these functions to see if anything makes sense. No need to take notes.
1. use console.log to inspect `characterLiElements` after it is initialised, to see what's inside.
1. Look at the function `screwUpIntentionally`.
    - Where is it called from?
    - Check that you can see the result of the console.log messages it sends to the browser console. Is there anything surprising about the second call to console.log? Make sure you can explain what causes this.

### make some functional changes

1. Change the code so that when a character is clicked on, its name is displayed in capitals, _as well_ as its abilities reported.
1. Add another button to the html page and write javascript in myScript.js to make that new button do something different when clicked
    - e.g. remove one character from the array
    - e.g. pick and display one character at random

### reviewing

1. list ALL functions or methods that are called which are not defined in myScript, and any variables which are used which are not declared here. These are likely DOM objects and methods.

### Optional tasks (advanced):

1. The search button doesn't currently do much. Change the code so that it only shows characters in whose name the sought text appears. You'll likely have to find out how to remove the existing contents of the `charactersUL` element.
