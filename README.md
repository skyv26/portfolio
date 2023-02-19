# Personal Portfolio

> It is my personal portfolio project and it is for my learning purposes in order to become good software developer and it is not only a project but also a way to know my skills and with the help of it I can be able to showcase my hard-work that I have done in past or whatever I will do in future.


## Built With

- HTML5
- CSS3 [Flexbox, Box Model, Background and Image, Grid, Media Query]
- Linters
- Vector Graphics


## Live Demo (if available)

[Live Project](https://skyv26.github.io/portfolio/)


## Getting Started

In order to use the files you should have to clone it and then follow the instruction given below.

### Prerequisites
 - Good Knowlege on HTML and CSS (Semantics,Box-Model, Background style and Image Tag, Flexbox, Grid and Media Query)
 - Install Node.js, Npm Copy the linters from https://github.com/microverseinc/linters-config/tree/master/html-css
 - Please install the HTML, CSS and Lighthouse linters using Node Package Manager by typing below commands
   
   * npm install -g @lhci/cli@0.7.x (For LightHouse linter)
   * npm install --save-dev hint@7.x
          [ -f .hintrc ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css/.hintrc (For HTML linter)
   * npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
          [ -f .stylelintrc.json ] || wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css/.stylelintrc.json

### Setup
- **use "git clone https://github.com/skyv26/portfolio.git"**
- After adding html skeleton and adding style make sure your work by running test linters by typing following commands
  * npx hint . **[For HTML debugging]**
  * npx stylelint "**/*.{css,scss}"   **[For CSS debugging]**

## Authors

👤 **Aakash Verma**

- GitHub: [@skyv26](https://github.com/skyv26)
- LinkedIn: [@devaakash](https://www.linkedin.com/in/devaakash/)
- Twitter: [@vrma_aakash](https://twitter.com/vrma_aakash)
- Frontend Mentor: [@skyv26](https://www.frontendmentor.io/profile/skyv26)

## Screenshot
<div style="display: flex; flex-direction: column; gap: 1rem;">

  <p>Challenged Design (Mobile Version)</p>
  
  <div style="display: flex; gap: 5px; align-items: flex-start; justify-content: center;">
    <a href="./assets/screenshot_1.png" target="_blank"><img src="./assets/screenshot_1.png" width="auto" height="auto"/></a>
    <a href="./assets/screenshot_2.png" target="_blank"><img src="./assets/screenshot_2.png" width="auto" height="auto"/></a>
    <a href="./assets/screenshot_3.png" target="_blank"><img src="./assets/screenshot_3.png" width="auto" height="auto"/></a>
    <a href="./assets/screenshot_4.png" target="_blank"><img src="./assets/screenshot_4.png" width="auto" height="auto"/></a>
    <a href="./assets/screenshot_5.png" target="_blank"><img src="./assets/screenshot_5.png" width="auto" height="auto"/></a>
  </div>
</div>

<br /> <br />
<p>Challenged Design (Desktop Version)</p>
  
  <div style="display: flex; gap: 5px; align-items: flex-start; justify-content: center; margin-bottom: 4rem;">
    <a href="./assets/desktop-screenshot.png" target="_blank"><img src="./assets/desktop-screenshot.png" width="auto" height="auto"/></a>
  </div>
</div>

## 🧑‍🦱 Contributor

[William Raga](https://github.com/itsmraga-hub)


## 📝 License

This project is [MIT](./LICENSE) licensed.

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run Linters](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 🧑‍💻 Leaderboard <a name="about-project"></a>

> **This project aims to create a leaderboard system to track and display user performance in an engaging way. Through the use of an interactive and intuitive interface, users can quickly and easily view scores and rankings of their peers. The leaderboard system is driven by a backend database.**

**Leaderboard** is a vanilla-js blog website.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Leaderboard is front-end project

<details>
<summary>Technologies</summary>
  <ul>
    <li><a href="https://html.com/">HTML</a></li>
    <li><a href="https://sass-lang.com/">SASS/SCSS</a></li>
    <li><a href="https://javascript.info/">JavaScript</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> We can see the event details and can connect with the organizers and speakers.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Link to your deployed project.

- [**See Project 🚀**](https://skyv26.github.io/leaderboard/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> In order to start with this project do as follows :

To get a local copy up and running, follow these steps.

### Prerequisites

- use git clone in order to get the copy this repo. You need to have atleast basic understanding of JavaScript. Use below command

  - git clone https://github.com/skyv26/leaderboard.git

### Setup

- You can simply open it on your vscode in order to start working on it
  - cd leaderboard

### Install

- please first install the node package files
  - npm install


### Usage

- In order to use this project you either create branch to add more feature.
- But in order to run the project use below commands.
  - npm run build **(It will create a production ready file)**
  - npm start **(It will run the server on your machine)**

### Run Linters

I have added the linters or tests in order to avoid anykind of typos and ensure the good practices in this project. So while using this repository if you need to check your work no matters have worked on html, css and js you can use below commands

- In order to run the linter test on `index.html` or any html file. Use below command

  `npx hint .`

- To run linter test on stylesheets. Use below command

  `npx stylelint "**/*.{css,scss}"`

- To run linter test on javascript files. Use below command

  `npx eslint .`

**it will automatically correct the errors**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> Mention all of the collaborators of this project.

👨‍💻 **Aakash Verma**

- GitHub: [@skyv26](https://github.com/skyv26)
- Twitter: [@vrma_aakash](https://twitter.com/vrma_aakash)
- LinkedIn: [skyv2022](https://linkedin.com/in/skyv2022)
- Frontend Mentor: [@skyv26](https://www.frontendmentor.io/profile/skyv26)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> In upcoming weeks I will add some features as mentioned below

- [ ] **Add full features like sign-up, sign-in and API**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project then please give a ⭐️ and also share your feedback using github_issues.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgments

Thanks to everyone who helped me ❤️

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
