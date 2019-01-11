import document from 'document';
import { gettext } from 'i18n';

const demoText = document.getElementById('#demotext');

demoText.text = gettext('hello_world');
