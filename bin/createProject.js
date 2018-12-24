'use strict';var e=require('commander'),n=require('path'),i=require("fs"),o=require("./config/common"),r=o.project_dir,t=o.API_LEVEL,c=o.SDK_VERSION;o.exec,o.execSync,o.makeDirs;e.version(c).usage("[options] <packageName>").option("-m, --models <models>","\u56fa\u4ef6 model","").description("\u751f\u6210\u9879\u76ee").parse(process.argv);try{!(function(){var o=e.args[0],a=n.join(r,"projects",o);if(i.existsSync(a))throw e.outputHelp(),"the package is exist or invalid package name";i.mkdirSync(a),i.writeFileSync(n.join(a,"project.json"),'{\n        "models": "'+(e.models||'')+'",\n        "package_path": "'+o+'",\n        "min_sdk_api_level":'+t+',\n        "developer_id": "'+(e.developer||'')+'",\n        "version_code":1\n    }'),i.writeFileSync(n.join(a,"package.json"),'{\n        "name": "project-'+o.replace(/[.]/g,'-')+'",\n        "version": "'+c+'",\n        "scripts":{\n            "start":"node ../../bin/runProject.js"\n        },\n        "dependencies":{\n            \n        }\n    }'),i.writeFileSync(n.join(a,"index.ios.js"),'import "./index.js";'),i.writeFileSync(n.join(a,"index.js"),'\n    import React from \'react\';\n    import { API_LEVEL, Package, Device, Service, Host } from \'miot\';\n    import { PackageEvent, DeviceEvent } from \'miot\';\n    import { View, Text } from \'react-native\';\n\n    class App extends React.Component {\n        render() {\n            return (\n            <View style={{ flex: 1, justifyContent: \'center\', alignItems: \'center\' }}>\n            <Text>hello, this is a plugin project of MIOT</Text>\n            <Text>API_LEVEL:{API_LEVEL}</Text>\n            <Text>{Package.packageName}</Text>\n            <Text>models:{Package.models}</Text>\n            </View>\n            )\n        }\n    }\n    Package.entry(App, () => {\n        \n    })\n    '),i.mkdirSync(n.join(a,"resources")),i.mkdirSync(n.join(a,"build"))})()}catch(e){console.log(e)}