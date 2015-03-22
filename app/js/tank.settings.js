;
(function (undefined) {
    'use strict';

    if (typeof tank === 'undefined')
        throw 'tank is not declared';

    // Packages initialization:
    sigma.utils.pkg('tank.settings');

    var settings = {

        // id of the dom element
        id: 'tank-container',
        // Do we have to execute the query on load ?
        onload_runquery: false,
        // default query
        query: {
            title: 'Get some data',
            query: 'MATCH (n) OPTIONAL MATCH (n)-[r]->(m) RETURN n,r,m LIMIT 100'
        },
        // Custome labels & types array
        labels : [], // must contain object like {  name: 'my label' , color : '#FFFFFF' }
        types : [], // must contain object like {  name: 'my type' , color : '#FFFFFF' }

        // Config module
        // ===========================
        // List all comonent
        components: ['panel', 'query', 'sigmajs'],
        // List all plugins
        plugins: ['config', 'favorite', 'graph', 'history', 'codemirror' ],


        // General config
        // ===========================
        // Neo4j url
        server: 'http://localhost:7474',
        // Force atlas2 algo default time
        forceAtlas2Time: 5000,
        // Table of field that can be used of label on graph
        field_named: ['title', 'name' , 'label']

    };

    // Export the previously designed settings:
    tank.settings = sigma.utils.extend(tank.settings || {}, settings);

}).call(this);