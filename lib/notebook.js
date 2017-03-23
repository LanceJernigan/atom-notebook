'use babel'

import {CompositeDisposable} from 'atom'

import saveNote from '../lib/saveNote'

export default (() => {
  
  const activate = state => {
    
    const subscriptions = new CompositeDisposable();
    
    subscriptions.add(atom.commands.add('atom-workspace', {
      'notebook:save': saveNote
    }));
    
  }
  
  return {
    activate,
  }
  
})()