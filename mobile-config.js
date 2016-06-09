App.info({
    name: 'Shicha App',
    description: 'XXX',
    author: 'Erdem Guengoer and Marc Koster',
    email: 'erdemguengoer@googlemail.com',
    website: 'http://www.google.de',
    version: '1.0'
});

App.icons({
    // iOS
    'iphone_2x': 'res/icons/Icon-120.png',
    'iphone_3x': 'res/icons/Icon-60@3x.png',
    'ipad': 'res/icons/Icon-76.png',
    'ipad_2x': 'res/icons/Icon-76@2x.png',
    'ios_settings': 'res/icons/Icon-Small.png',
    'ios_settings_2x': 'res/icons/Icon-Small@2x.png',
    'ios_settings_3x': 'res/icons/Icon-Small@3x.png',
    'ios_spotlight': 'res/icons/Icon-Small-40.png',
    'ios_spotlight_2x': 'res/icons/Icon-Small-40@2x.png',

    // Android
    'android_mdpi': 'res/icons/Icon-mdpi.png',
    'android_hdpi': 'res/icons/Icon-hdpi.png',
    'android_xhdpi': 'res/icons/Icon-xhdpi.png',
    'android_xxhdpi': 'res/icons/Icon-xxhdpi.png',
    'android_xxxhdpi': 'res/icons/Icon-xxxhdpi.png'
});

App.launchScreens({
    // Android
  /*  'android_mdpi_portrait': 'res/splash/android/mdpi/background.png',
    'android_mdpi_landscape': 'res/splash/android/mdpi/background.png',
    'android_hdpi_portrait': 'res/splash/android/hdpi/background.png',
    'android_hdpi_landscape': 'res/splash/android/hdpi/background.png',
    'android_xhdpi_portrait': 'res/splash/android/xxxhdpi/background.png',
    'android_xhdpi_landscape': 'res/splash/android/xxxhdpi/background.png',*/

    //IPhone
    'iphone_2x': 'res/splash/ios/Default@2x.png',
    'iphone5': 'res/splash/ios/Default-568h@2x.png',
    'iphone6': 'res/splash/ios/Default-Portrait.png',
    'iphone6p_portrait': 'res/splash/ios/Default-Portrait@2x.png',
    'iphone6p_landscape': 'res/splash/ios/Default-Landscape-1536h.png'

});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
App.accessRule("blob:*");
App.accessRule('*');