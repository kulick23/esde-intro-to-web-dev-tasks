# Class Task - Instagram Carousel

[[_TOC_]]

## Task descrition

Your task is to implement <b>any</b> of the Figma designs

- "1" first screen - "Carousel" Page from Pages section (top left corner)
- "2" second screen - "Carousel" Page from Pages section (top left corner)
- "3" third screen - "Carousel" Page from Pages section (top left corner)
- "8" last screen - "Carousel" Page from Pages section (top left corner)

## Figma design link

[Figma design link is here](<https://www.figma.com/file/nm0tngMap2yDdPLsypNMfW/Instagram-Carousels-(Community)>)

## Font Poppins

[fonts google link](https://fonts.google.com/specimen/Poppins?query=poppins)

## Image design

<details>
<summary>Click to display final design (first screen)</summary>

![image info](assets/design/1.jpg)

</details>

<details>
<summary>Click to display final design (second screen)</summary>

![image info](assets/design/2.jpg)

</details>

<details>
<summary>Click to display final design (thrid screen)</summary>

![image info](assets/design/3.jpg)

</details>

<details>
<summary>Click to display final design (last screen)</summary>

![image info](assets/design/8.jpg)

</details>

## Project structure

`index.html` - contains HTML code

`styles` - contains CSS code

`assets/design` - contains final design template

`assets/images` - contains images

`assets/icons` - contains icons

`partials/{surname}` - contains isolated code for each students

## How to run

### Running by simply opening index.html in browser

- Open file index.html in browser
  - In Visual Studio Code right click in index.html -> Copy Path
  - Open browser and paste copied path as an url (i.e `D://Proejcts/intro-to-web-dev-tasks/packages/classtask-YuliaVorman/index.html`)
- Enjoy

Why not to use that approach - every time you're making changes you have to reload your page manually

Why to use - simply you don't want to deal with NPM and JavaScript or there might be any issues currently with it

### Running using NPM and JavaScript (Preferred)

- Open console
- In console navigate to the project root (`./intro-to-web-dev-tasks`)
- Run `npm install`
- Navigate to the project `cd packages/classtask-YuliaVorman`
- Run `npm run serve`
- Open browser
- Navigate to `http://localhost:8080/`
- Enjoy

Why to use - every time you make a change your page is automatically reloaded and your changes applied

Why not to use - you don't want to deal with NPM and JavaScript or there might be any issues currently with it

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
