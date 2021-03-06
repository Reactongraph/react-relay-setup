/**
 * @flow
 * @relayHash 34ccba89f608596fba9f593a1dd2c912
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type home_author$ref = any;
export type appQueryVariables = {||};
export type appQueryResponse = {|
  +author: ?{|
    +$fragmentRefs: home_author$ref
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
    ...home_author
    id
  }
}

fragment home_author on Author {
  id
  name
  topic
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "appQuery",
  "id": null,
  "text": "query appQuery {\n  author {\n    ...home_author\n    id\n  }\n}\n\nfragment home_author on Author {\n  id\n  name\n  topic\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "appQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "home_author",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "appQuery",
    "argumentDefinitions": [],
    "selections": [
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
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b1bc9e8ea05c662801346176b96d3e80';
module.exports = node;
