/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GroDAIAllocator,
  GroDAIAllocatorInterface,
} from "../GroDAIAllocator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
      {
        internalType: "address",
        name: "_groDepositHandler",
        type: "address",
      },
      {
        internalType: "address",
        name: "_groWithdrawHandler",
        type: "address",
      },
      {
        internalType: "address",
        name: "_DAI",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timelockInBlocks",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_limit",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPulled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipPushed",
    type: "event",
  },
  {
    inputs: [],
    name: "DAI",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deployed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "exceedsLimit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "groDepositHandler",
    outputs: [
      {
        internalType: "contract IGroDepositHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "groWithdrawHandler",
    outputs: [
      {
        internalType: "contract IGroWithdrawHandler",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "limitChangeTimelockEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "lowerLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "newLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pullManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "pushManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMax",
        type: "uint256",
      },
    ],
    name: "queueRaiseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "raiseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceManagement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timelockInBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalValueDeployed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "contract ITreasury",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61012060405234801561001157600080fd5b50604051611381380380611381833981810160405260c081101561003457600080fd5b50805160208201516040808401516060850151608086015160a090960151600080546001600160a01b031916331780825594519697959693959294929391926001600160a01b0316917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba908290a36001600160a01b0386166100b557600080fd5b6001600160601b0319606087901b1660c0526001600160a01b0385166100da57600080fd5b6001600160601b0319606086901b166080526001600160a01b0384166100ff57600080fd5b6001600160601b0319606085901b1660a0526001600160a01b03831661012457600080fd5b6001600160601b031960609390931b9290921660e0526101005260045550505060805160601c60a05160601c60c05160601c60e05160601c610100516111a26101df600039806107b75280610a305250806104bd528061056c528061062852806107085280610c155280610cda5280610d8b5280610e2b5250806105a35280610657528061073952806109a95280610cab5280610d5c52508061045e52806107fe5250806103a65280610e5a5280610f1f52506111a26000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806361d027b3116100cd578063b5cc9ad211610081578063e0bab4c411610066578063e0bab4c4146102af578063e2bbb158146102b7578063f905c15a146102da5761016c565b8063b5cc9ad21461028a578063c901761d146102a75761016c565b80638da5cb5b116100b25780638da5cb5b14610272578063a4d66daf1461027a578063aa8a0002146102825761016c565b806361d027b31461024d578063735e9ba9146102555761016c565b80633067dd541161012457806346f68ee91161010957806346f68ee9146102175780635a96ac0a1461023d57806361192a33146102455761016c565b80633067dd54146101de578063375fe2221461020f5761016c565b806324cca3c61161015557806324cca3c61461019f5780632e1a7d4d146101b95780632f15f45e146101d65761016c565b8063089208d8146101715780631c21146b1461017b575b600080fd5b6101796102e2565b005b6101836103a4565b604080516001600160a01b039092168252519081900360200190f35b6101a76103c8565b60408051918252519081900360200190f35b610179600480360360208110156101cf57600080fd5b50356103ce565b6101a76107b5565b6101fb600480360360208110156101f457600080fd5b50356107d9565b604080519115158252519081900360200190f35b6101836107fc565b6101796004803603602081101561022d57600080fd5b50356001600160a01b0316610820565b6101796108e7565b6101a76109a1565b6101836109a7565b6101796004803603602081101561026b57600080fd5b50356109cb565b610183610a5c565b6101a7610a6b565b610179610a71565b610179600480360360208110156102a057600080fd5b5035610b8d565b6101a7610c0d565b610183610c13565b610179600480360360408110156102cd57600080fd5b5080359060200135610c37565b6101a7610fc6565b6000546001600160a01b03163314610341576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d908390a36000805473ffffffffffffffffffffffffffffffffffffffff19908116909155600180549091169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b60055481565b6000546001600160a01b0316331461042d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60408051630d49468b60e31b8152600160048201526000602482018190526044820184905291516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692636a4a3458926064808201939182900301818387803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561052857600080fd5b505afa15801561053c573d6000803e3d6000fd5b505050506040513d602081101561055257600080fd5b50516040805163f182178360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820184905291519293506000927f00000000000000000000000000000000000000000000000000000000000000009092169163f182178391604480820192602092909190829003018186803b1580156105ec57600080fd5b505afa158015610600573d6000803e3d6000fd5b505050506040513d602081101561061657600080fd5b5051905061062682826000610fcc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156106bd57600080fd5b505af11580156106d1573d6000803e3d6000fd5b505050506040513d60208110156106e757600080fd5b50506040805163bc157ac160e01b8152600481018490526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660248301526044820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163bc157ac1916064808201926020929091908290030181600087803b15801561078457600080fd5b505af1158015610798573d6000803e3d6000fd5b505050506040513d60208110156107ae57600080fd5b5050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000806107f18360035461103e90919063ffffffff16565b600454109392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b0316331461087f576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917fea8258f2d9ddb679928cf34b78cf645b7feda9acc828e4dd82d014eaae270eba91a36001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031633146109305760405162461bcd60e51b81526004018080602001828103825260228152602001806111746022913960400191505060405180910390fd5b600154600080546040516001600160a01b0393841693909116917faa151555690c956fc3ea32f106bb9f119b5237a061eaa8557cff3e51e3792c8d91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b03841617909155169055565b60065481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b03163314610a2a576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610a54437f000000000000000000000000000000000000000000000000000000000000000061103e565b600655600555565b6000546001600160a01b031690565b60045481565b6000546001600160a01b03163314610ad0576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600654431015610b27576040805162461bcd60e51b815260206004820152601460248201527f54696d656c6f636b206e6f742065787069726564000000000000000000000000604482015290519081900360640190fd5b600654610b7b576040805162461bcd60e51b815260206004820152601460248201527f54696d656c6f636b206e6f742073746172746564000000000000000000000000604482015290519081900360640190fd5b60058054600455600090819055600655565b6000546001600160a01b03163314610bec576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6004548110610bfa57600080fd5b6003548111610c0857600080fd5b600455565b60025481565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b03163314610c96576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610c9f826107d9565b15610ca957600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630b0eee307f0000000000000000000000000000000000000000000000000000000000000000846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610d4057600080fd5b505af1158015610d54573d6000803e3d6000fd5b5050505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663f18217837f0000000000000000000000000000000000000000000000000000000000000000856040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b158015610def57600080fd5b505afa158015610e03573d6000803e3d6000fd5b505050506040513d6020811015610e1957600080fd5b50519050610e2983826001610fcc565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000856040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610ec057600080fd5b505af1158015610ed4573d6000803e3d6000fd5b505050506040513d6020811015610eea57600080fd5b50506040805160608082018352858252600060208301819052828401819052925163d365d30360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169363d365d303939287926004019081908590808383875b83811015610f6e578181015183820152602001610f56565b50505050905001838152602001826001600160a01b031681526020019350505050600060405180830381600087803b158015610fa957600080fd5b505af1158015610fbd573d6000803e3d6000fd5b50505050505050565b60035481565b8015610ff757600354610fdf908461103e565b600355600254610fef908361103e565b600255611039565b6003548310156110165760035461100e908461109f565b60035561101c565b60006003555b60025482101561103357600254610fef908361109f565b60006002555b505050565b600082820183811015611098576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600061109883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506000818484111561116b5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611130578181015183820152602001611118565b50505050905090810190601f16801561115d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50505090039056fe4f776e61626c653a206d757374206265206e6577206f776e657220746f2070756c6ca164736f6c6343000705000a";

export class GroDAIAllocator__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _treasury: string,
    _groDepositHandler: string,
    _groWithdrawHandler: string,
    _DAI: string,
    _timelockInBlocks: BigNumberish,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GroDAIAllocator> {
    return super.deploy(
      _treasury,
      _groDepositHandler,
      _groWithdrawHandler,
      _DAI,
      _timelockInBlocks,
      _limit,
      overrides || {}
    ) as Promise<GroDAIAllocator>;
  }
  getDeployTransaction(
    _treasury: string,
    _groDepositHandler: string,
    _groWithdrawHandler: string,
    _DAI: string,
    _timelockInBlocks: BigNumberish,
    _limit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _treasury,
      _groDepositHandler,
      _groWithdrawHandler,
      _DAI,
      _timelockInBlocks,
      _limit,
      overrides || {}
    );
  }
  attach(address: string): GroDAIAllocator {
    return super.attach(address) as GroDAIAllocator;
  }
  connect(signer: Signer): GroDAIAllocator__factory {
    return super.connect(signer) as GroDAIAllocator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GroDAIAllocatorInterface {
    return new utils.Interface(_abi) as GroDAIAllocatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GroDAIAllocator {
    return new Contract(address, _abi, signerOrProvider) as GroDAIAllocator;
  }
}