import loader from 'monaco-loader';
import { remote } from 'electron';
import FileManager from './filemanager';

const fs = require('fs');

loader().then((monaco) => {
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  });


  const fileManager = new FileManager({ editor, monaco });


  ipcRenderer.on('open-file', (e, url) => {
      console.log(url);
      fs.readFile(url.slice(7), 'utf-8', (err, data)=> {
        editor.setModel(monaco.editor.createModel(data,'javascript'))
      })
  });


  remote.getCurrentWindow().show();
});
