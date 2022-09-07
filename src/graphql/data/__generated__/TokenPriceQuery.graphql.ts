/**
 * @generated SignedSource<<fe7060dd669184e091e89fe39ac3b210>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Chain = "ARBITRUM" | "ETHEREUM" | "ETHEREUM_GOERLI" | "OPTIMISM" | "POLYGON" | "%future added value";
export type ContractInput = {
  address?: string | null;
  chain: Chain;
};
export type TokenPriceQuery$variables = {
  contract: ContractInput;
};
export type TokenPriceQuery$data = {
  readonly tokenProjects: ReadonlyArray<{
    readonly markets: ReadonlyArray<{
      readonly priceHistory1D: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1H: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1M: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1W: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
      readonly priceHistory1Y: ReadonlyArray<{
        readonly timestamp: number;
        readonly value: number | null;
      } | null> | null;
    } | null> | null;
    readonly name: string | null;
    readonly tokens: ReadonlyArray<{
      readonly address: string | null;
      readonly chain: Chain;
      readonly decimals: number | null;
      readonly symbol: string | null;
    }>;
  } | null> | null;
};
export type TokenPriceQuery = {
  response: TokenPriceQuery$data;
  variables: TokenPriceQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "contract"
  }
],
v1 = [
  {
    "items": [
      {
        "kind": "Variable",
        "name": "contracts.0",
        "variableName": "contract"
      }
    ],
    "kind": "ListValue",
    "name": "contracts"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "currencies",
    "value": [
      "USD"
    ]
  }
],
v4 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "HOUR"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "DAY"
  }
],
v9 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "WEEK"
  }
],
v10 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "MONTH"
  }
],
v11 = [
  {
    "kind": "Literal",
    "name": "duration",
    "value": "YEAR"
  }
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "chain",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "symbol",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "decimals",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v17 = [
  (v5/*: any*/),
  (v6/*: any*/),
  (v16/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TokenProject",
        "kind": "LinkedField",
        "name": "tokenProjects",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "TokenProjectMarket",
            "kind": "LinkedField",
            "name": "markets",
            "plural": true,
            "selections": [
              {
                "alias": "priceHistory1H",
                "args": (v4/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v7/*: any*/),
                "storageKey": "priceHistory(duration:\"HOUR\")"
              },
              {
                "alias": "priceHistory1D",
                "args": (v8/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v7/*: any*/),
                "storageKey": "priceHistory(duration:\"DAY\")"
              },
              {
                "alias": "priceHistory1W",
                "args": (v9/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v7/*: any*/),
                "storageKey": "priceHistory(duration:\"WEEK\")"
              },
              {
                "alias": "priceHistory1M",
                "args": (v10/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v7/*: any*/),
                "storageKey": "priceHistory(duration:\"MONTH\")"
              },
              {
                "alias": "priceHistory1Y",
                "args": (v11/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v7/*: any*/),
                "storageKey": "priceHistory(duration:\"YEAR\")"
              }
            ],
            "storageKey": "markets(currencies:[\"USD\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Token",
            "kind": "LinkedField",
            "name": "tokens",
            "plural": true,
            "selections": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TokenPriceQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TokenProject",
        "kind": "LinkedField",
        "name": "tokenProjects",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
            "concreteType": "TokenProjectMarket",
            "kind": "LinkedField",
            "name": "markets",
            "plural": true,
            "selections": [
              {
                "alias": "priceHistory1H",
                "args": (v4/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v17/*: any*/),
                "storageKey": "priceHistory(duration:\"HOUR\")"
              },
              {
                "alias": "priceHistory1D",
                "args": (v8/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v17/*: any*/),
                "storageKey": "priceHistory(duration:\"DAY\")"
              },
              {
                "alias": "priceHistory1W",
                "args": (v9/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v17/*: any*/),
                "storageKey": "priceHistory(duration:\"WEEK\")"
              },
              {
                "alias": "priceHistory1M",
                "args": (v10/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v17/*: any*/),
                "storageKey": "priceHistory(duration:\"MONTH\")"
              },
              {
                "alias": "priceHistory1Y",
                "args": (v11/*: any*/),
                "concreteType": "TimestampedAmount",
                "kind": "LinkedField",
                "name": "priceHistory",
                "plural": true,
                "selections": (v17/*: any*/),
                "storageKey": "priceHistory(duration:\"YEAR\")"
              },
              (v16/*: any*/)
            ],
            "storageKey": "markets(currencies:[\"USD\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Token",
            "kind": "LinkedField",
            "name": "tokens",
            "plural": true,
            "selections": [
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/)
            ],
            "storageKey": null
          },
          (v16/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ba71ef3b66bc0913a7f472e12f29caf7",
    "id": null,
    "metadata": {},
    "name": "TokenPriceQuery",
    "operationKind": "query",
    "text": "query TokenPriceQuery(\n  $contract: ContractInput!\n) {\n  tokenProjects(contracts: [$contract]) {\n    name\n    markets(currencies: [USD]) {\n      priceHistory1H: priceHistory(duration: HOUR) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1D: priceHistory(duration: DAY) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1W: priceHistory(duration: WEEK) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1M: priceHistory(duration: MONTH) {\n        timestamp\n        value\n        id\n      }\n      priceHistory1Y: priceHistory(duration: YEAR) {\n        timestamp\n        value\n        id\n      }\n      id\n    }\n    tokens {\n      chain\n      address\n      symbol\n      decimals\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6e21cf8af7cb398a93015c2bbc3715f8";

export default node;
