/**
 * @generated SignedSource<<beca5c854d72792aa4bf301cd7a2c54f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CountryFragment$data = {
  readonly name: string;
  readonly " $fragmentType": "CountryFragment";
};
export type CountryFragment = CountryFragment$data;
export type CountryFragment$key = {
  readonly " $data"?: CountryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CountryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CountryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Country",
  "abstractKey": null
};

(node as any).hash = "341b01fd272ccfad05991815d3e3a605";

export default node;
