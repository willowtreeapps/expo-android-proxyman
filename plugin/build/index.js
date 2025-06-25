"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const config_plugins_1 = require("@expo/config-plugins");
const withAndroidProxyman = config => {
    config = (0, config_plugins_1.withAndroidManifest)(config, props => {
        const xmlDirPath = 'android/app/src/main/res/xml';
        if (!fs_1.default.existsSync(xmlDirPath)) {
            fs_1.default.mkdirSync(xmlDirPath);
            fs_1.default.copyFileSync('modules/expo-android-proxyman/network_security_config.xml', `${xmlDirPath}/network_security_config.xml`);
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
exports.default = withAndroidProxyman;
