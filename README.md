# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down


**Stretch Goals** 

Both players have two choices to modify their paddle.
If the N key is pressed, both players will have a reduced paddle size and width but increased paddle movement speed.
If the M key is pressed, both players will have a larger paddle size but will have a significant slow movement speed.

Whenever the G key is pressed, it will play an amazing song that will bring you to tears.


**Personal Learnings** 
I have learned that when setting attribues for object, its value has to be exact. for example when i was rendering a ball i had 'radius',this.radius and i couldnt figure out why it wouldnt show up in the pong game. after 15 minutes of struggling on how to fix it my self i asked a classmate and they told me that radius had to be set to 'r' and it worked.

I forgot to run npm run build before uploading it to github and realized its SUPER important to do so for every project going into production

I also learned how to import and export files, i find it super useful having seperate files for each function, working on them individually then importing them all into the main file for it to run
