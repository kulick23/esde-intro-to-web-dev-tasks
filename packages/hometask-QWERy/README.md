# Hometask QWERy Landing Page

## Task descrition

You task is to implement Figma design. The main goal is to implement it close to design, not pixel-perfect.

Please be flexible and do not stick completly to design in these cases:

- Font used in Figma is a paid or not available on the internet - try to replace it with a font you would like to. The best practice is just to used standard fonts like Roboto
- Figma elements' dimenstion specified in:
  - real numbers (44.21) --> round to closest odd number (46 or 44)
  - even number (11, 67) --> round to closes odd number or to the closes pow of 2 (12, 64)
  - visually margins left and right are equal to each other, but in numbers they are i.e 51 and 49. Choose one value, better odd number (24, 12, etc)

## Evaluation criteria

Maximum score - 10 consists of:

- Section "Discover wonderful Indonesia" - maximum score 3
  - [ ] Used image as background (like in design) - 1
  - [ ] Used Header (QWERy, Information, ..., Search) - 0.5
  - [ ] Used Follow us and social icons - 0.5
  - [ ] Used main heading, scroll down element (without any interactive logic) and Explore the nature beauty orange label - 1
- Section "Have you enjoyed your holiday?" - maximum score 1
  - [ ] Used image on the left - 0.5
  - [ ] Used text content on the right - 0.5
- Section "Steady your steps" - maximum score 1
  - [ ] Used image as background - 0.5
  - [ ] Used texts - 0.5
- Section "Our culture..." - maximum score 1
  - [ ] Used image on the right - 0.5
  - [ ] Used text content on the left - 0.5
- Footer - maximum score 4
  - [ ] Used a row with "QWERy" and "Ready to explore" with Button "Get started" - 1
  - [ ] Used "Let's go on vacation, Make your day" and email address with button - 1
  - [ ] Used three columns with Services, About and Help - 1
  - [ ] Used a row with "Terms Conditions", social media links and a row with Copyright text - 1

No code requirements are specified and be evaluated. Write code as you want to. On our code review we will reveal all possible mistakes and share solutions and best practices

## Figma design link

[Figma design link is here](https://www.figma.com/file/G75r4esXzrWtkPq1Yyhjrk/QWERy-landing?node-id=4-17&t=s2ChapX8V39rwE50-0)

## Image design

<details>
<summary>Click to display final design</summary>

![image info](assets/design/QWERy.png)

</details>

## Project structure

`index.html` - contains HTML code

`assets/design` - contains final design template

`assets/images` - contains images

`assets/icons` - contains icons

`styles` - contains CSS code

## How to run

### Running by simply opening index.html in browser

- Open file `index.html` on browser
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
