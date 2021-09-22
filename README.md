# cells-sdk-js

Javascript SDK for communicating with Cells server.

This SDK is generated automatically using `swagger-codegen` tool from the OpenAPI specification of Cells Rest API. It does not rely on any framework and uses superagent internally for performing HTTP requests.

Since Cells v3, it is used internally by the official Pydio Cells web interface (written in React).

## Usage

### Installation

Simply use `npm install --save cells-sdk` to append the latest version to your package.json.

### Authentication

Authentication is passed via the `Authorization: Bearer $TOKEN` header, where `$TOKEN` can be a Personal Access Token, or retrieved dynamically by the frontend login process.

### Endpoints

All APIs described in Cells official documentation are supported. Below are listed the main services available : 

 - ACLService
 - ActivityService
 - AdminTreeService
 - ConfigService
 - FrontendService
 - GraphService
 - InstallService
 - JobsService
 - LogService
 - MailerService
 - MetaService
 - PolicyService
 - RoleService
 - SearchService
 - ShareService
 - TemplatesService
 - TokenService
 - TreeService
 - UpdateService
 - UserMetaService
 - UserService
 - WorkspaceService

Please refer to the docs for more information.

### Example

A sample application is available in example/app.js

Basic tree listing looks like : 

```javascript
    var api = new TreeServiceApi(client);
    var request = new RestGetBulkMetaRequest();
    request.NodePaths = ['/folder/*'];
    api.bulkStatNodes(request).then(res => {
        // Read array res.Nodes with all nodes
    });
```

## License

This library is licensed under Apache V2.0 license.