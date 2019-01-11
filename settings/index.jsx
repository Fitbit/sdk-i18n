import { gettext } from 'i18n';

function mySettings(props) {
  return (
    <Page>
      <Text align="center">{gettext('hello_world')}</Text>
    </Page>
  );
}

registerSettingsPage(mySettings);
