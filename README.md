Custom URL Schemes in iOS and Android
========================
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2Fsample-custom-url-scheme" target="_blank"><img src="http://docs.telerik.com/platform/samples/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>  

<a id="top"></a>
* [Overview](#overview)
* [Important Directories and Files](#important-directories-and-files)
* [Screenshots](#screenshots)
* [Test the Sample](#test-the-sample)
* [Limitations](#limitations)

This sample shows you how to use an Android-specific custom plugin and the Info.plist configuration file for iOS to register a custom URL scheme for your app. You can later call the app from another app using the custom URL scheme.

> *Supported mobile platforms:* iOS, Android
>
> *Developed with:* Windows Phone SDK 8.1, Apache Cordova 4.0.0, WebIntent 1.0.0

[Back to Top](#top)

# Important Directories and Files

* `Plugins\WebIntent`: Contains the Android-specific custom plugin.
* `App_Resources\Android\AndroidManifest.xml`: Contains the configuration changes which register the app to a custom URI scheme.
* `App_Resources\iOS\Info.plist`: Contains the configuration changes which register the app to a custom URI scheme.

[Back to Top](#top)

# Screenshots

Platform | Home
---|---
All | ![](https://raw.githubusercontent.com/Icenium/sample-custom-url-scheme/master/screenshots/navigation.jpg)

[Back to Top](#top)

# Test the Sample

Apart from exploring the sample code base in GitHub, you can also clone and run the sample in your preferred AppBuilder client.

## In-Browser

With the AppBuilder in-browser client, you can develop hybrid and NativeScript cross-platform mobile apps from your browser. You can use the in-browser client at [https://platform.telerik.com](https://platform.telerik.com).

### Clone the sample

1. Click the button at the top of this document.
1. Provide your login credentials, if prompted.

### Run the sample

1. [Deploy on device via QR code.][QR code in-browser]
1. After the installation completes, run the app.
1. [Create a new Blank (JavaScript) project.][create new project in-browser]
1. In the **Project Navigator**, double-click `index.html`.
1. Within the `<body>` element, add the following line.
		
	```HTML
	<button onclick="window.open('myapp://views/navigate.html', '_system')">Open App</button>
	```

1. [Deploy on device via QR code.][QR code in-browser]
1. On the device, run the app that you have just deployed and tap **Open App**.

[Back to Top](#top)

## Windows

With the AppBuilder Windows client, you can develop hybrid and NativeScript cross-platform mobile apps from your Windows desktop. You can download and install the Windows client from [http://www.telerik.com/appbuilder/windows-client](http://www.telerik.com/appbuilder/windows-client).

### Clone the sample

1. Verify that the AppBuilder Windows client is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. In the dashboard, click **Samples** and select **Hybrid**.
1. From the **Workspace** drop-down menu, select the workspace in which you want to develop your application.
1. Select **Advanced APIs**.
1. Select **Custom URL Scheme**.
1. (Optional) Rename the project.
1. Click **Clone**.

### Run the sample

With the AppBuilder Windows client, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Deploy on device via QR code][QR code windows] or [deploy on device via USB cable][USB deploy windows].
1. After the installation completes, run the app.
1. [Create a new Blank (JavaScript) project.][create new project windows]
1. In the **Project Navigator**, double-click `index.html`.
1. Within the `<body>` element, add the following line.
		
	```HTML
	<button onclick="window.open('myapp://views/navigate.html', '_system')">Open App</button>
	```

1. [Deploy on device via QR code][QR code windows] or [deploy on device via USB cable][USB deploy windows].
1. On the device, run the app that you have just deployed and tap **Open App**.

[Back to Top](#top)

## Visual Studio

With the AppBuilder extension for Visual Studio, you can develop hybrid and NativeScript cross-platform mobile apps from Microsoft Visual Studio. You can download and install the extension from [http://www.telerik.com/appbuilder/visual-studio-extension](http://www.telerik.com/appbuilder/visual-studio-extension).

### Clone the sample

1. Verify that the AppBuilder extension for Visual Studio is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. Select **AppBuilder** &#8594; **Get Sample**.
1. Select **Hybrid**.
1. Select **Advanced APIs**.
1. Select **Custom URL Scheme**.
1. (Optional) Rename the project.
1. Click **Get**.

The extension for Visual Studio copies the sample files locally. The extension creates a new solution and project and loads them.

### Run the sample

With the AppBuilder extension for Visual Studio, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Deploy on device via QR code][QR code vse] or [deploy on device via USB cable][USB deploy vse].
1. After the installation completes, run the app.
1. [Create a new Blank (JavaScript) project.][create new project vse]
1. In the **Solution Explorer**, double-click `index.html`.
1. Within the `<body>` element, add the following line.
		
	```HTML
	<button onclick="window.open('myapp://views/navigate.html', '_system')">Open App</button>
	```

1. [Deploy on device via QR code][QR code vse] or [deploy on device via USB cable][USB deploy vse].
1. On the device, run the app that you have just deployed and tap **Open App**.

[Back to Top](#top)

## CLI

With the AppBuilder command-line interface, you can develop hybrid and NativeScript cross-platform mobile apps from the command line. You can learn how to add the AppBuilder commands to your command line from [http://www.telerik.com/appbuilder/command-line-interface](http://www.telerik.com/appbuilder/command-line-interface).

### Clone the sample

1. Verify that a command prompt is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. To list the available samples, run the following command.

	```bash
	appbuilder sample
	```
1. Run the clone command for the sample as listed by `appbuilder sample`.
	
	```bash
	appbuilder sample clone custom-url-scheme
	```

The AppBuilder command-line interface shows the following message: `Successfully initialized project in the folder!`

### Run the sample

With the AppBuilder command-line interface, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Deploy on device via QR code][QR code cli] or [deploy on device via USB cable][USB deploy cli].
1. After the installation completes, run the app.
1. [Create a new Blank (JavaScript) project.][create new project cli]
1. For the newly created project, open `index.html`.
1. Within the `<body>` element, add the following line.
		
	```HTML
	<button onclick="window.open('myapp://views/navigate.html', '_system')">Open App</button>
	```

1. [Deploy on device via QR code][QR code cli] or [deploy on device via USB cable][USB deploy cli].
1. On the device, run the app that you have just deployed and tap **Open App**.

[Back to Top](#top)

# Limitations

* You cannot run this sample in the device simulator.
* You cannot run this sample on Android emulators.
* You cannot run this sample in the iOS Simulator.
* You cannot run this sample in the companion apps.
* This sample is not enabled for Windows Phone development.

[Back to Top](#top)

[QR code in-browser]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote#in-browser
[QR code windows]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote#windows
[QR code vse]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote#visual-studio
[QR code cli]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote#cli
[USB deploy windows]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/running-on-connected-devices/deploy-connected#windows
[USB deploy vse]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/running-on-connected-devices/deploy-connected#visual-studio
[USB deploy cli]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/running-on-connected-devices/deploy-connected#cli
[create new project cli]: http://docs.telerik.com/platform/appbuilder/creating-your-project/creating-a-new-project#cli
[create new project windows]: http://docs.telerik.com/platform/appbuilder/creating-your-project/creating-a-new-project#windows
[create new project in-browser]: http://docs.telerik.com/platform/appbuilder/creating-your-project/creating-a-new-project#in-browser
[create new project vse]: http://docs.telerik.com/platform/appbuilder/creating-your-project/creating-a-new-project#visual-studio