import document from "document";
import { gettext } from "i18n";

const demoText = document.getElementById("#demotext");
demoText.text = `100 ${gettext("Active Minutes")}`;
