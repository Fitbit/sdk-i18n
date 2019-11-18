import document from "document";
import { gettext } from "i18n";
import { localizedDate } from "./locale-date";

const demoText = document.getElementById("demotext");
const dateText = document.getElementById("datetext");
const date = new Date();

demoText.text = `100 ${gettext("Active Minutes")}`;
dateText.text = localizedDate(date);