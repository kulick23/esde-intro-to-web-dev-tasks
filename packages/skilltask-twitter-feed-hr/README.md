# Skill Task - Twitter Feed for HR Students

[[_TOC_]]

## Task descrition

Your task is to implement Figma design (**DARK Theme**)

## Evaluation criteria - maximum 8 points

- [ ] Your name and surname instead of `John Doe` - **1 point**
- [ ] - Your correct EHU mail address instead of `@realjohndoe` - **1 point**
  - [ ] [Clickable](https://www.tutorialspoint.com/html/html_email_links.htm) EHU mail address - **1 point**
- Correct dimensions
  - [ ] Card width 600px - **0.5 points**
  - [ ] Font sizes (18px, 16px where is needed) - **0.5 points**
- [ ] Correct image/icons usage from `assets` folder (please read Q&A section at the end of the page for details) - **0.5 point**
- [ ] Instead of an image of a person (in Figma that image is called `Ellipse 1` and it's an image of a man) draw just CSS circle with some color you would like (solid, gradient, anything) - **0.5 points**
- [ ] Instead of `Why do they call it 'debugging' when it feels more like 'wildly guessing and hoping for the best'? #programming #coding #debugging` write down your personal thoughts about anything in IT/EHU/JavaScript/Frontend/Backend/Math/etc. It should smth personal and rather neutral (no offence, harsh words, politics, etc) that could describe you as a student/person from a professional point of view. No need to write a lot - please keep limit up to max 280 characters. Don't forget to use and style hashtags! It's a must to have at least one styled #hashtag - **3 points**

## Figma design link

[A link to Figma Design (**DARK Theme**)](<https://www.figma.com/file/ZnQ0IxVzG6VGku4KvZQf7Q/Twitter-Embed-(Community)>)

## Image design

<details>
<summary>Click to display design to implement</summary>

![image info](assets/design/twit.png)

</details>

## Project structure

`assets/design` - contains final design template

`assets/images` - contains images

`assets/icons` - contains icons

`partials/{surname}` - contains isolated code for each students

`partials/{surname}/index.html` - contains HTML code

`partials/{surname}/styles` - contains CSS code

## How to run

### Running using NPM and JavaScript

- Open console
- In console navigate to the project root (`./intro-to-web-dev-tasks`)
- Run `npm install`
- Navigate to the project `cd packages/skilltask-twitter-feed-lr`
- Run `npm run serve`
- Open browser
- Navigate to `http://localhost:8080/`
- Enjoy

## Q&A

### How to use images?

To use an image from assets folder inside partial/your_surname/index.html file please use the path starting with `assets/...` i.e

```html
<img src="assets/images/image-man.png" height="80" width="80" alt="" />

<img src="assets/icons/save-icon.svg" height="26" width="18" alt="" />
```

### NPM Troubleshoting

#### npm err! cannot set properties of null (setting 'peer')

- Remove `package-lock.json`
- Remove `node_modules` folder/folders
- From repository root folder (intro-to-web-dev-tasks, not packages/any) run `npm install`

If an issue still persists, follow the next steps:

- From repository root folder (intro-to-web-dev-tasks, not packages/any)
  - Run `npm install -g npm-force-resolutions`
  - Run `npm-force-resolutions`
  - Run `npm install`
  - Run `npm uninstall -g npm-force-resolutions`

Source: [https://you.com/search?q=npm+err%21+cannot+set+properties+of+null+%28setting+%27peer%27%29&tbm=youchat&cfr=chatb&cid=c2_b44a3506-b7e8-4458-bcc7-7bedde76ab7b](https://you.com/search?q=npm+err%21+cannot+set+properties+of+null+%28setting+%27peer%27%29&tbm=youchat&cfr=chatb&cid=c2_b44a3506-b7e8-4458-bcc7-7bedde76ab7b)

#### Cannot read properties of null (reading 'pickAlgorithm')

Source: [https://bobbyhadz.com/blog/npm-err-cannot-read-properties-of-null-reading-pickalgorithm](https://bobbyhadz.com/blog/npm-err-cannot-read-properties-of-null-reading-pickalgorithm)
