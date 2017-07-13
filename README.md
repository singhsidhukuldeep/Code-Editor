# Code-Editor

> A code editor, based on Electron

![Editor Working](https://github.com/singhsidhukuldeep/Code-Editor/raw/master/assets/app_working.png)

## Advantages

> This code editor is written completely using `JavaScript` therefore,
it is completely platform independent.

> It uses `Electron` which is combination of `Node.JS` and `Chromium` (Base of `Google Chrome`)

## To Use

To run this app you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

![Terminal Commands](https://github.com/singhsidhukuldeep/Code-Editor/raw/master/assets/terminal.png)

```bash
git clone https://github.com/singhsidhukuldeep/code-editor
cd code-editor
npm install
npm start
```

![Editor Working Gif](https://github.com/singhsidhukuldeep/Code-Editor/raw/master/assets/app_working.gif)

## Languages Supported
```
* bat
* coffee script
* cpp
* csharp
* fsharp
* go
* handlebars
* html
* ini
* lua
* objective-c
* postiats
* php
* powershell
* pug
* python
* r
* razor
* ruby
* sql
* swift
* vb
* xml
```

Also `css` dialects:

```
* css
* less
* scss
```

Language in the project is set to `JavaScript`

To change go to `renderer.js` and change there:

```$xslt
loader().then((monaco) => {
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',//Change your language here
    theme: 'vs-dark',
    automaticLayout: true,
  });
```

## Working

This app is build using

- [Microsoft Monaco Editor](https://microsoft.github.io/monaco-editor/)
- [Node.js](https://nodejs.org/)
- [Electron.js](https://electron.atom.io/)
- [Electron forge](https://electronforge.io/)


Everything is packaged using [Node Package Manager](https://www.npmjs.com/) (`npm`)

<!---## Resources for Learning Electron

- [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
- [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
-->

## CREDITS

>Kuldeep Singh Sidhu

Github: [github/singhsidhukuldeep](https://github.com/singhsidhukuldeep)
`https://github.com/singhsidhukuldeep`

Website: [Kuldeep Singh Sidhu (Website)](http://kuldeepsinghsidhu.esy.es)
`http://kuldeepsinghsidhu.esy.es`

LinkedIn: [Kuldeep Singh Sidhu (LinkedIn)](https://www.linkedin.com/in/kuldeep-singh-sidhu-96a67170/)
`https://www.linkedin.com/in/kuldeep-singh-sidhu-96a67170/`
