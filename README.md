# Unit Tests
03/17/2022
 
 PASS  ./test.test.js
  ✓ Testing get users (435 ms)
  ✓ Testing findUserByName -- success (22 ms)
  ✓ Testing findUserByID -- success (22 ms)
  ✓ Testing findUserByJob -- success (18 ms)
  ✓ testing deleting a user by Id -- successful path (471 ms)
  ✓ testing adding user -- successful path (63 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.266 s, estimated 2 s
Ran all test suites.

# InfoUnion
Front &amp; Backend of our webapp, InfoUnion

# Product Spec
https://docs.google.com/document/d/1gftDwFXkpsSZekMuVqWvDATEhlRc-7KY_5gV8A2Uh-Y/edit?usp=sharing

# Goal

InfoUnion aims to act as a metasearch engine and database for information regarding labor and labor laws in the United States with an emphasis on providing workers better information regarding their worker's rights. The goal is coallate all available information regarding topics of labor including labor laws, unions, worker's rights advocacy groups, worker's legal representation, labor statistics, and general information regarding work in the US.

Additionally the web site aims to have avenues for collecting testimonials through forum boards and groups. A place for people to post fair job listings, commisserate on working conditions, and find community for their respective fields and jobs.

# UI / Mockup
https://www.figma.com/file/rutKpveKGSOwXUVdEoiSVr/Untitled

# Dev Info

Whenever you are working on a new branch remember to checkout that branch. Don't make changes on the main branch. Once you are done with the issue at hand, create a new pull request. Copy a link and a message into the discord for someone to review the pull request. Anyone can review anyone else's pull request. If it's been a couple of days and no one has reviewed your pull request yet, choose a specific person and ask them to review your request.

If someone asks you to review their request or you see a message for a request review, try to make time to do it in a timely manner.

Useful Git Commands
```
git checkout -b name-of-branch. 
// Creates a new branch of name-branch
// Stick to a this format for naming branches, lower case and word separated with dashes

git push --set-upstream origin name-of-branch
// Run this after creating a new branch to connect a branch to the main

git checkout main
// Go back to main

git add file.txt
// Stage a specific file

git add .
// Stage all files

git commit -m 'Message'
// Commit all staged files with a message to local repo

git push
// Push local repo files to online repo

git pull
// Pull from main and makes it up to date

git fetch
// Pulls references to other branches

```

# Figma Conventions

Each compoent is grouped and ready for import, more information here: https://www.alphr.com/figma-export-code/#:~:text=Select%20the%20elements%20you%20want,and%20press%20%E2%80%9CExport%20Code.%E2%80%9D

https://www.figma.com/file/GSU8HTkdhz2fkcTbZujBKM/InfoUnion!?node-id=0%3A1

Please comment when changes that are needed 

# Folder Conventions

Here's a general folder naming convention to stick to when creating new React coomponents. Under src in the frontend folder, when creating new components, create a new folder for it capitalized to the name you'll be using for the component as well.

```
Example:
.
├── prototype
│   ├──frontend
│   │  ├──src
│   │  │  ├──Navbar
│   │  │  ├──Footer
│   │  │  ├──Home
│   │  │  ├──Login
│   │  │  │  ├──Login.js
│   │  │  │  ├──Login.css
│   │  │  │  ├──Login.test.js
```

# API / Web Scrapping Research

Federal Database: https://developer.dol.gov/beginners-guide/
Other APIs:
- https://www.unionware.com/products/api-framework/
- https://www.data.gov/local/get-local-government-data-gov
- https://www.usa.gov/developer
- https://code.gov/agencies

https://docs.google.com/document/d/1IT6KDD4dduXokwT3u3gDnck2O6mgQQ3ZRDBKUSYWvWE/edit?usp=sharing
