# POCUS App

## App Description

[NAME] is an all in one POCUS app that contains educational videos, reference guides for technique, a standard findings library, and on-going cases of the week. It is meant to supplement in-person training as well as to serve as an on the job guide for identifying and interpreting ultrasound images. 

## Screenshots

[Link to google drive folder](https://drive.google.com/drive/folders/1bubEIjzM9M8fxS3ddzpPDxZirixSs01l?usp=sharing)

## Installation Guide - Try it out on your own phone

1. Download “Expo” from the App store, or Google Play Store
  - The icon looks like this: ![expo](./docs/expo%20icon.png)

2. Open: https://expo.io/@bparking/pocus on your computer
3. 
**For iOS users**: Open Camera and point it at the QR code on the page. A link will pop up at the top. Click on the link.

**For Android users**: Open the Expo app, Press the Scan QR Code button at the top, then scan the QR code on the webpage

NOTE: Sometimes it takes a couple of tries to load the project on your phone. If it doesn’t work on the first try, just close the app and try again.

## Page description and roadmap

### Learn 

#### Features

- Screencasts
- Transcripts of screencasts
- Download for offline use
- Bookmarks
- Quizzes and tests
- Saved Progress

#### Known issues

- Rotating to Landscape when in Fullscreen video will cause the App to crash and layout to be messed up - currently disabled landscape to prevent crashes
- Android: On the Modules page, the back button cannot be pressed once you scroll up

#### To do list
- [ ] Screencasts
  - [ ] Fix issue with fullscreen video
  - [ ] Organize content: Screencasts vs. EM Pocus series vs. other content
  - [ ] Upload to Wordpress - Using the “Add new Media” button
  - [ ] Link the file url to database
  - [ ] Add description text for each video
- [ ] State management implementation
  - [ ] Save progress
  - [ ] Bookmarks
  - [ ] Next Up link
  - [ ] Quizzes
    - [ ] Create quiz questions (3-5 per each video?)
    - [ ] Create quiz modal popup
  - [ ] Module Test
    - [ ] Copy questions from existing quizzes on Westernsono (Lungs, Echo)
    - [ ] Create new test questions (5-10 per each Module?)
  - [ ] Transcript
    - [ ] Modal popup
    - [ ] Transcript text into database
- [ ] Download locally for offline viewing
- [ ] Animations

### Library

#### Features

- Search bar
- Rapid reviews 
- Image library

#### Known issues

- Rotating to Landscape when in Fullscreen video will cause the App to crash and layout to be messed up

#### To do list

- [X] Search Bar
  - [x]  React native paper search bar integration
  - [ ]  ~~Focus to SearchBar when focused to SearchScreen~~
    - [ ]  ~~Render list of Popular Searches~~
  - [x]  Fuse.js configuration - ~~Won't accept array of objects~~
  - [x]  Render list while typing, click navigates to SearchDetailsScreen
    - [x]  useResults Hook
    - [x]  resultsList component
  - [x]  Submit search — blur search bar and hide keyboard
  - [x]  Clear input when navigating away from bottom tab
  - [x]  If video exists, label with video icon; if not, label with other icon
  - [ ]  ~~Demo search using Json placeholder~~
- [X] Rapid reviews page framework
  - [X] Table of quick facts
  - [X] Body - additional text, images
  - [X] Additional links
- [X] Image library page framework
  - [ ] Buttons to filter images (eg. PSLA, PSSA, A4C…)
- [ ] Database 
  - [ ] Organization - [Link](https://docs.google.com/document/d/1pwCXTgI44gxT_2zYitCvivjdxV3YslLDd58anNW5ZMY/edit?usp=sharing)
  - [ ] Input video and image file urls into database
  - [ ] Input additional text/images into database

### Cases

#### Features

#### Known Issues

#### To-do list

### Settings

#### Features

#### Known Issues

#### To-do list

