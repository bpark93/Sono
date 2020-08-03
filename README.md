# POCUS App

## App Description

[NAME] is an all in one POCUS app that contains screencasts, reference guides for technique, a standard images library, on-going cases of the week, and everything you need to learn and use POCUS! It is meant to supplement in-person training as well as to serve as an on the job guide for acquiring and interpreting ultrasound clips. 

## Installation Guide - Try it out on your own phone (Android Only)

This is a temporary method for trying out the app. Once complete, beta versions of the app will be available through Apple TestFlight and Google Play Store.   

1. Download “Expo” from the App store, or Google Play Store
  - The icon looks like this: ![expo](./docs/expo%20icon.png)

2. Open: https://expo.io/@bparking/pocus on your computer
3. Open the Expo app, Press the Scan QR Code button at the top, then scan the QR code on the webpage

NOTE: Sometimes it takes a couple of tries to load the project on your phone. If it doesn’t work on the first try, just close the app and try again.

## Page description and roadmap

### Learn 

![LearnDemo](https://res.cloudinary.com/dwtw3ge2z/image/upload/v1596475773/Misc/Github%20Readme/LearnDemo_sq9olv.png)

Tab for all your lecture content, neatly organized into applicable organ systems. Bookmark your favorite screencasts for easy access from the front page. Each lecture also has a transcript you can follow along with, and you can leave notes with timestamps to mark the high yield stuff from the video. You can always come back to videos, and the app will save your progress. Test your new found knowledge at the end with a quick quiz, and if you are feeling confident, try out the comprehensive, case-based module test! 

#### Known issues

- Missing screencasts for: Fundamentals
- Missing module tests for: Most except for Lung, Echo
- Transcripts incomplete

#### To do list
- [ ] Screencasts
  - [x] Fix issue with fullscreen video
  - [ ] Organize content: Advanced vs. Basic, EM vs. ICU
  - [ ] Complete transcripts for every page
  - [ ] Add description text for every video
- [x] State management implementation
  - [x] Save progress
  - [x] Bookmarks
  - [ ] Next Up link
  - [ ] Quizzes
    - [ ] Create quiz questions (3-5 per each video?)
    - [x] Create quiz modal popup
  - [x] Module Test
    - [x] Copy questions from existing quizzes on Westernsono (Lungs, Echo)
    - [ ] Create new test questions (5-10 per each Module?)
  - [x] Transcript
    - [x] Modal popup
- [ ] Download locally for offline viewing?
- [ ] Animations?

### Library

![Librarydemo](https://res.cloudinary.com/dwtw3ge2z/image/upload/v1596476197/Misc/Github%20Readme/LibraryDemo_ljjl1k.png)

The main feature of [NAME], the library tab is a vast repository of every possible POCUS finding, both normal and pathological, that will aid you in your image interpretation skills. Navigate the categories by clicking or search for what you are looking for in the search bar. Need a reminder on image acquisition techniques? Check out our Rapid Reviews videos, which are quick 1-2 minute review videos on technique combined with brief information about probe types, presets, positioning. They can be easily distinguished by the play button beside its name!  

#### Known issues

- Webp images not showing up on iOS - switch to GIF?

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
  - [x] Buttons to filter images (eg. PSLA, PSSA, A4C…)
- [ ] Database 
  - [ ] Organization - [Link](https://docs.google.com/document/d/1pwCXTgI44gxT_2zYitCvivjdxV3YslLDd58anNW5ZMY/edit?usp=sharing)
  - [ ] Input video and image file urls into database
  - [ ] Input additional text/images into database
- [ ] Add bookmark functionality

### Cases

![CasesDemo](https://res.cloudinary.com/dwtw3ge2z/image/upload/v1596475912/Misc/Github%20Readme/CasesDemo_zmaedo.png)

Apply your skills to real clinical cases. New cases, composed by Western's POCUS fellows, will be uploaded every week. The cases will come from a variety of settings including the ICU, ED, and the wards. Carefully read the background text, peruse the images, and come to your conclusion. You can always check your answer with the one provided by our POCUS fellows. Let us know what you think of the case with a comment below!

#### Known Issues

#### To-do list

### Settings

Need help? Find explanations of each functionality here. Still need help? Email us your concerns by clicking on the Support button. Check out our team of medical studetns and physicians while you are here. 

#### Known Issues

#### To-do list

