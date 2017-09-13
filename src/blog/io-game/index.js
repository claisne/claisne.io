
import highlight from 'highlight.js/lib/highlight';
import highlightCpp from 'highlight.js/lib/languages/cpp';

import game from './game';

import 'highlight.js/styles/tomorrow.css';

import '../defaults';

highlight.registerLanguage('cpp', highlightCpp);
highlight.initHighlightingOnLoad();

document.querySelectorAll('.inline-code').forEach(highlight.highlightBlock);

game(document.getElementById('animation'));
