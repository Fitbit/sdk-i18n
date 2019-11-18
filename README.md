# sdk-i18n

Fitbit SDK example application which demonstrates the i18n API.

![Screenshot](screenshot.gif)

The application provides translations for strings used in the app, companion,
settings, and GUI. At runtime, these strings are then selected based on the user
configured language.

## GUI i18n

To load localized strings directly into an svg element within a .gui file, just
specify the i18n `msgid` as defined in the `.po` file, prefixed by an
underscore. e.g. `_Active Minutes`.

## JavaScript

To dynamically set a localized string using JavaScript, import the `gettext()`
method and specify the i18n `msgid` as defined in the `.po` file. e.g.

```
import { gettext } from "i18n";
console.log(gettext("Active Minutes"));
```

## Dates

This project contains a demonstration of localized short dates, based on the
preferred format for each locale. 

```
import { localizedDate } from "./locale-date";

const date = new Date();
console.log(localizedDate(date));
```

Find out more information on the
[Fitbit Developer Website](https://dev.fitbit.com).

## License

This example is licensed under the [MIT License](./LICENSE).
