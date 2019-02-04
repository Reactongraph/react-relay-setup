/**
 * @flow
 * @relayHash f06ff8f480f969a9f4b2c5f961552afd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type homeMutationVariables = {|
  topic: string
|};
export type homeMutationResponse = {|
  +updateTopic: ?{|
    +topic: ?string
  |}
|};
export type homeMutation = {|
  variables: homeMutationVariables,
  response: homeMutationResponse,
|};
*/


/*
mutation homeMutation(
  $topic: String!
) {
  updateTopic(topic: $topic) {
    topic
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "topic",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateTopic",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "topic",
        "variableName": "topic",
        "type": "String!"
      }
    ],
    "concreteType": "UpdateTopic",
    "plural": false,
    "selections": [
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
  "operationKind": "mutation",
  "name": "homeMutation",
  "id": null,
  "text": "mutation homeMutation(\n  $topic: String!\n) {\n  updateTopic(topic: $topic) {\n    topic\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "homeMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "homeMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f65e014de5a724521b8f699a9fd760b';
module.exports = node;
