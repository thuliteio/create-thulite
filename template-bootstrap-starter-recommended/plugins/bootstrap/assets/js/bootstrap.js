'use strict';

// Source: https://github.com/twbs/examples/blob/main/vite/src/js/main.js

// Include parts of Bootstrap
import { Alert, Button, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
