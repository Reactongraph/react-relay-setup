/**
 * @flow
 * @relayHash 4d20ffc6909e108e5fe91e69a068f0d8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +author: ?{|
    +id: ?string,
    +name: ?string,
    +topic: ?string,
  |}
|};
export type appQuery = {|
  variables: appQueryVariables,
  response: appQueryResponse,
|};
*/


/*
query appQuery {
  author {
    id
    name
    topic
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "author",
    "storageKey": null,
    "args": null,
    "concreteType": "Author",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "topic",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery {\n  author {\n    id\n    name\n    topic\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f25f79ef4ec627238b0aa04e1e46f37';
module.exports = node;
