import Hello from './components/Hello.html'

const hello = new Hello({
  target: document.querySelector('main'),
  data: {name: 'Svelte'}
})
