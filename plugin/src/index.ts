import fs from 'fs';
import { ConfigPlugin, withAndroidManifest } from '@expo/config-plugins';

const withAndroidProxyman: ConfigPlugin = config => {
  config = withAndroidManifest(config, props => {
    const xmlDirPath = 'android/app/src/main/res/xml';
    if (!fs.existsSync(xmlDirPath)) {
      fs.mkdirSync(xmlDirPath);

      fs.copyFileSync(
        'node_modules/expo-android-proxyman/network_security_config.xml',
        `${xmlDirPath}/network_security_config.xml`,
      );
    }

    const application = props.modResults.manifest.application;
    if (application) {
      application[0].$['android:networkSecurityConfig'] =
        '@xml/network_security_config';
    }

    return props;
  });

  return config;
};

export default withAndroidProxyman;
