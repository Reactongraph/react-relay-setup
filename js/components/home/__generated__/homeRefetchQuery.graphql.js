/**
 * @flow
 * @relayHash 93a97215755dac520ad9e6e8ed3f0021
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type home_author$ref = any;
export type homeRefetchQueryVariables = {||};
export type homeRefetchQueryResponse = {|
  +author: ?{|
    +$fragmentRefs: home_author$ref
  |}
|};
export type homeRefetchQuery = {|
  variables: homeRefetchQueryVariables,
  response: homeRefetchQueryResponse,
|};
*/


/*
query homeRefetchQuery {
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
  "name": "homeRefetchQuery",
  "id": null,
  "text": "query homeRefetchQuery {\n  author {\n    ...home_author\n    id\n  }\n}\n\nfragment home_author on Author {\n  id\n  name\n  topic\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "homeRefetchQuery",
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
    "name": "homeRefetchQuery",
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
(node/*: any*/).hash = 'cc3780482a654f28015463f43cb56a67';
module.exports = node;
