const prompt = require('prompt');
const moment = require('moment');
const basename = require('basename');
const { printTable } = require('console-table-printer');
const {ApiClient, TreeServiceApi, RestGetBulkMetaRequest} = require('cells-sdk');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
const schema = {
    properties: {
        url: {description:'Server URL'},
        token: {description:'Personal Access Token'},
        path:{description:'Folder Path', default: 'common-files'}
    }
}

prompt.get(schema, function (err, result) {

    var client = new ApiClient();
    client.basePath = result.url + '/a';
    client.defaultHeaders = {'Authorization': 'Bearer ' + result.token};

    var api = new TreeServiceApi(client);
    var request = new RestGetBulkMetaRequest();
    request.NodePaths = [result.path + '/*'];
    api.bulkStatNodes(request).then(res => {
        if(!res.Nodes) {
            console.log('No results found');
            return;
        }
        console.log(`Listing ${res.Nodes.length} nodes in folder ${result.path}`);
        printTable(res.Nodes.map(n => {
            return {
                Type: n.Type === 'LEAF' ? 'File' : 'Folder',
                Name: basename(n.Path),
                Modified: moment(n.MTime * 1000).fromNow(),
                Size: n.Size
            };
        }));
    }).catch(e => {
        console.error('Could not list nodes', e);
    });

});