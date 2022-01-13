/**
 * @generated SignedSource<<770888c12827489490b1832a7269dde8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DataExampleQuery$variables = {};
export type DataExampleQueryVariables = DataExampleQuery$variables;
export type DataExampleQuery$data = {
  readonly country: {
    readonly " $fragmentSpreads": FragmentRefs<"CountryFragment">;
  } | null;
};
export type DataExampleQueryResponse = DataExampleQuery$data;
export type DataExampleQuery = {
  variables: DataExampleQueryVariables;
  response: DataExampleQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "AU"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DataExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CountryFragment"
          }
        ],
        "storageKey": "country(code:\"AU\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DataExampleQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": "country(code:\"AU\")"
      }
    ]
  },
  "params": {
    "cacheID": "16052d08e50aa161608e069af90577d0",
    "id": null,
    "metadata": {},
    "name": "DataExampleQuery",
    "operationKind": "query",
    "text": "query DataExampleQuery {\n  country(code: \"AU\") {\n    ...CountryFragment\n  }\n}\n\nfragment CountryFragment on Country {\n  name\n}\n"
  }
};
})();

(node as any).hash = "dda978288c88e9b12c1a7ee1509a1576";

export default node;
