/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ConvexAllocator,
  ConvexAllocatorInterface,
} from "../ConvexAllocator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IOlympusAuthority",
        name: "_authority",
        type: "address",
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
        internalType: "contract IOlympusAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "rewardTokens",
        type: "address[]",
      },
    ],
    name: "addRewardTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "curveToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "rewardPool",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "rewardTokens",
        type: "address[]",
      },
      {
        internalType: "int128",
        name: "index",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "max",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
    ],
    name: "addToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IOlympusAuthority",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[4]",
        name: "amounts",
        type: "uint256[4]",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "pidForReserve",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "raiseLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
    ],
    name: "rewardsPending",
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
        internalType: "contract IOlympusAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "curveToken",
        type: "address",
      },
      {
        internalType: "contract IConvexRewards",
        name: "rewardPool",
        type: "address",
      },
      {
        internalType: "int128",
        name: "index",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "deployed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "limitChangeTimelockEnd",
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
    name: "updateTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
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
      {
        internalType: "bool",
        name: "reserve",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610120604052600c60e08190526b15539055551213d49256915160a21b6101009081526200003191600091906200012d565b507ff403c135812408bfbe8713b5a23a04b3d48aae310000000000000000000000006080527fa79828df1850e8a3a3064576f380d90aecdd335900000000000000000000000060a052600280546001600160a01b031916739a315bdf513367c0377fb36545857d12e85813ef1790556119c860c052348015620000b357600080fd5b50604051620029133803806200291383398181016040526020811015620000d957600080fd5b5051600180546001600160a01b0319166001600160a01b0383169081179091556040518291907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a25050620001d9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620001655760008555620001b0565b82601f106200018057805160ff1916838001178555620001b0565b82800160010185558215620001b0579182015b82811115620001b057825182559160200191906001019062000193565b50620001be929150620001c2565b5090565b5b80821115620001be5760008155600101620001c3565b60805160601c60a05160601c60c0516126ee62000225600039806111ea5280611798525080610a045280610aba5280610e545280610f31525080610b735280610c3b52506126ee6000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806398c60612116100b2578063c087cdf411610081578063c901761d11610066578063c901761d146104f1578063f5dab711146104f9578063f8ff9a49146105725761011b565b8063c087cdf414610428578063c89d34601461044e5761011b565b806398c60612146103aa5780639c769787146103d6578063a49039a8146103de578063bf7e214f146104045761011b565b80632f15f45e116100ee5780632f15f45e1461027e5780636fdae6fe146102865780637a9e5e4b14610358578063895a02931461037e5761011b565b80630ed4e798146101205780631c3859f9146101d55780631f89a6d31461020d578063234b674514610244575b600080fd5b6101d36004803603604081101561013657600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561016157600080fd5b82018360208201111561017357600080fd5b8035906020019184602083028401116401000000008311171561019557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506105b2945050505050565b005b6101fb600480360360208110156101eb57600080fd5b50356001600160a01b031661070c565b60408051918252519081900360200190f35b6101d3600480360360e081101561022357600080fd5b506001600160a01b0381351690602081013590604081019060c00135610797565b6101d36004803603608081101561025a57600080fd5b506001600160a01b0381351690602081013590604081013590606001351515610cb5565b6101fb6111e8565b6101d3600480360360e081101561029c57600080fd5b6001600160a01b03823581169260208101358216926040820135909216918101906080810160608201356401000000008111156102d857600080fd5b8201836020820111156102ea57600080fd5b8035906020019184602083028401116401000000008311171561030c57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050508135600f0b9250506020810135906040013561120c565b6101d36004803603602081101561036e57600080fd5b50356001600160a01b0316611570565b6101d36004803603604081101561039457600080fd5b506001600160a01b0381351690602001356116a6565b6101d3600480360360408110156103c057600080fd5b506001600160a01b0381351690602001356117e5565b6101d36119ce565b6101fb600480360360208110156103f457600080fd5b50356001600160a01b0316611cf6565b61040c611d08565b604080516001600160a01b039092168252519081900360200190f35b6101d36004803603602081101561043e57600080fd5b50356001600160a01b0316611d17565b6101d36004803603602081101561046457600080fd5b81019060208101813564010000000081111561047f57600080fd5b82018360208201111561049157600080fd5b803590602001918460208302840111640100000000831117156104b357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611f0b945050505050565b6101fb612195565b61051f6004803603602081101561050f57600080fd5b50356001600160a01b031661219b565b604080516001600160a01b03998a16815297891660208901529590971686860152600f9390930b6060860152608085019190915260a084015260c083015260e08201929092529051908190036101000190f35b61059e6004803603604081101561058857600080fd5b506001600160a01b0381351690602001356121f1565b604080519115158252519081900360200190f35b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b15801561060057600080fd5b505afa158015610614573d6000803e3d6000fd5b505050506040513d602081101561062a57600080fd5b50516000906001600160a01b031633146106d75760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b50509250505060405180910390fd5b506001600160a01b03821660009081526003602081815260409092208351610707939190920191908401906125fd565b505050565b6001600160a01b0380821660009081526003602090815260408083206002015481516246613160e11b8152306004820152915193941692628cc26292602480840193919291829003018186803b15801561076557600080fd5b505afa158015610779573d6000803e3d6000fd5b505050506040513d602081101561078f57600080fd5b505192915050565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e557600080fd5b505afa1580156107f9573d6000803e3d6000fd5b505050506040513d602081101561080f57600080fd5b50516000906001600160a01b031633146108825760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b5061088d84846121f1565b156108df576040805162461bcd60e51b815260206004820152601860248201527f45786365656473206465706c6f796d656e74206c696d69740000000000000000604482015290519081900360640190fd5b6001600160a01b0380851660008181526003602052604080822060010154600254825162b0eee360e41b81526004810195909552602485018990529151908516949190911692630b0eee3092604480830193919282900301818387803b15801561094857600080fd5b505af115801561095c573d6000803e3d6000fd5b50506002546040805163f182178360e01b81526001600160a01b038a81166004830152602482018a905291516000955091909216925063f182178391604480820192602092909190829003018186803b1580156109b857600080fd5b505afa1580156109cc573d6000803e3d6000fd5b505050506040513d60208110156109e257600080fd5b505190506109f3868683600161223f565b856001600160a01b031663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000876040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610a6a57600080fd5b505af1158015610a7e573d6000803e3d6000fd5b505050506040513d6020811015610a9457600080fd5b505060405163384e03db60e01b81526001600160a01b03838116600483019081526000927f00000000000000000000000000000000000000000000000000000000000000009092169163384e03db9186918991899160240183608080828437600081840152601f19601f8201169050808301925050508281526020019350505050602060405180830381600087803b158015610b2f57600080fd5b505af1158015610b43573d6000803e3d6000fd5b505050506040513d6020811015610b5957600080fd5b50516040805163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820184905291519293509085169163095ea7b3916044808201926020929091908290030181600087803b158015610bd157600080fd5b505af1158015610be5573d6000803e3d6000fd5b505050506040513d6020811015610bfb57600080fd5b50506001600160a01b0387811660009081526004602081815260408084205481516321d0683360e11b8152938401526024830186905260016044840152517f0000000000000000000000000000000000000000000000000000000000000000909416936343a0d066936064808501948390030190829087803b158015610c8057600080fd5b505af1158015610c94573d6000803e3d6000fd5b505050506040513d6020811015610caa57600080fd5b505050505050505050565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b158015610d0357600080fd5b505afa158015610d17573d6000803e3d6000fd5b505050506040513d6020811015610d2d57600080fd5b50516000906001600160a01b03163314610da05760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506001600160a01b03808516600090815260036020908152604080832060018101546002909101548251636197390160e11b8152600481018a905260248101869052925191861695169363c32e720293604480850194919392918390030190829087803b158015610e1057600080fd5b505af1158015610e24573d6000803e3d6000fd5b505050506040513d6020811015610e3a57600080fd5b50506040805163095ea7b360e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811660048301526024820187905291519183169163095ea7b3916044808201926020929091908290030181600087803b158015610eaf57600080fd5b505af1158015610ec3573d6000803e3d6000fd5b505050506040513d6020811015610ed957600080fd5b50506001600160a01b03858116600090815260036020908152604080832060049081015482516314f6943160e11b815287871692810192909252602482018a9052600f90810b900b60448201526064810188905290517f0000000000000000000000000000000000000000000000000000000000000000909416936329ed286293608480840194938390030190829087803b158015610f7757600080fd5b505af1158015610f8b573d6000803e3d6000fd5b505050506040513d6020811015610fa157600080fd5b5050604080516370a0823160e01b815230600482015290516000916001600160a01b038816916370a0823191602480820192602092909190829003018186803b158015610fed57600080fd5b505afa158015611001573d6000803e3d6000fd5b505050506040513d602081101561101757600080fd5b50516002546040805163f182178360e01b81526001600160a01b038a81166004830152602482018590529151939450600093919092169163f1821783916044808301926020929190829003018186803b15801561107357600080fd5b505afa158015611087573d6000803e3d6000fd5b505050506040513d602081101561109d57600080fd5b505190506110ae878383600061223f565b83156111c5576002546040805163095ea7b360e01b81526001600160a01b0392831660048201526024810185905290519189169163095ea7b3916044808201926020929091908290030181600087803b15801561110a57600080fd5b505af115801561111e573d6000803e3d6000fd5b505050506040513d602081101561113457600080fd5b50506002546040805163bc157ac160e01b8152600481018590526001600160a01b038a81166024830152604482018590529151919092169163bc157ac19160648083019260209291908290030181600087803b15801561119357600080fd5b505af11580156111a7573d6000803e3d6000fd5b505050506040513d60208110156111bd57600080fd5b506111df9050565b6002546111df906001600160a01b03898116911684612349565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b15801561125a57600080fd5b505afa15801561126e573d6000803e3d6000fd5b505050506040513d602081101561128457600080fd5b50516000906001600160a01b031633146112f75760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506001600160a01b038716611353576040805162461bcd60e51b815260206004820152601360248201527f5a65726f20616464726573733a20546f6b656e00000000000000000000000000604482015290519081900360640190fd5b6001600160a01b0386166113ae576040805162461bcd60e51b815260206004820152601960248201527f5a65726f20616464726573733a20437572766520546f6b656e00000000000000604482015290519081900360640190fd5b6001600160a01b0387166000908152600360205260409020600501541561141c576040805162461bcd60e51b815260206004820152600b60248201527f546f6b656e206164646564000000000000000000000000000000000000000000604482015290519081900360640190fd5b60408051610120810182526001600160a01b03808a1680835289821660208085019182528a8416858701908152606086018b8152600f8b900b6080880152600060a0880181905260c088018b905260e088018190526101008801819052948552600380845297909420865181549087166001600160a01b0319918216178255935160018201805491881691861691909117905590516002820180549190961693169290921790935590518051939491936114de939285019291909101906125fd565b50608082015160048083018054600f9390930b6fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff199093169290921790915560a0830151600583015560c0830151600683015560e08301516007830155610100909201516008909101556001600160a01b0390971660009081526020979097526040909620959095555050505050565b600160009054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156115be57600080fd5b505afa1580156115d2573d6000803e3d6000fd5b505050506040513d60208110156115e857600080fd5b50516000906001600160a01b0316331461165b5760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b50600180546001600160a01b0319166001600160a01b0383169081179091556040517f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad90600090a250565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b1580156116f457600080fd5b505afa158015611708573d6000803e3d6000fd5b505050506040513d602081101561171e57600080fd5b50516000906001600160a01b031633146117915760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506117bc437f00000000000000000000000000000000000000000000000000000000000000006124c8565b6001600160a01b0390921660009081526003602052604090206008810192909255600790910155565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b15801561183357600080fd5b505afa158015611847573d6000803e3d6000fd5b505050506040513d602081101561185d57600080fd5b50516000906001600160a01b031633146118d05760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506001600160a01b0382166000908152600360205260409020600601548110611940576040805162461bcd60e51b815260206004820152600d60248201527f4d757374206265206c6f77657200000000000000000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090206005015481116119af576040805162461bcd60e51b815260206004820152601560248201527f47726561746572207468616e206465706c6f7965640000000000000000000000604482015290519081900360640190fd5b6001600160a01b03909116600090815260036020526040902060060155565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b158015611a1c57600080fd5b505afa158015611a30573d6000803e3d6000fd5b505050506040513d6020811015611a4657600080fd5b50516000906001600160a01b03163314611ab95760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506001546040805163fbfa77cf60e01b815290516000926001600160a01b03169163fbfa77cf916004808301926020929190829003018186803b158015611aff57600080fd5b505afa158015611b13573d6000803e3d6000fd5b505050506040513d6020811015611b2957600080fd5b50516001600160a01b03161415611b87576040805162461bcd60e51b815260206004820152601360248201527f5a65726f20616464726573733a205661756c7400000000000000000000000000604482015290519081900360640190fd5b6002546001546040805163fbfa77cf60e01b815290516001600160a01b03938416939092169163fbfa77cf91600480820192602092909190829003018186803b158015611bd357600080fd5b505afa158015611be7573d6000803e3d6000fd5b505050506040513d6020811015611bfd57600080fd5b50516001600160a01b03161415611c5b576040805162461bcd60e51b815260206004820152600960248201527f4e6f206368616e67650000000000000000000000000000000000000000000000604482015290519081900360640190fd5b600160009054906101000a90046001600160a01b03166001600160a01b031663fbfa77cf6040518163ffffffff1660e01b815260040160206040518083038186803b158015611ca957600080fd5b505afa158015611cbd573d6000803e3d6000fd5b505050506040513d6020811015611cd357600080fd5b5051600280546001600160a01b0319166001600160a01b03909216919091179055565b60046020526000908152604090205481565b6001546001600160a01b031681565b600160009054906101000a90046001600160a01b03166001600160a01b031663452a93206040518163ffffffff1660e01b815260040160206040518083038186803b158015611d6557600080fd5b505afa158015611d79573d6000803e3d6000fd5b505050506040513d6020811015611d8f57600080fd5b50516000906001600160a01b03163314611e025760405162461bcd60e51b81526020600482019081528254600260001961010060018416150201909116046024830181905290918291604490910190849080156106c85780601f1061069d576101008083540402835291602001916106c8565b506001600160a01b038116600090815260036020526040902060080154431015611e73576040805162461bcd60e51b815260206004820152601460248201527f54696d656c6f636b206e6f742065787069726564000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038116600090815260036020526040902060080154611ee0576040805162461bcd60e51b815260206004820152601460248201527f54696d656c6f636b206e6f742073746172746564000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600360205260408120600781018054600683015582905560080155565b60005b815181101561219157611f1f612662565b60036000848481518110611f2f57fe5b6020908102919091018101516001600160a01b039081168352828201939093526040918201600020825161012081018452815485168152600182015485168184015260028201549094168484015260038101805484518185028101850190955280855291936060860193909290830182828015611fd557602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611fb7575b505050505081526020016004820160009054906101000a9004600f0b600f0b600f0b8152602001600582015481526020016006820154815260200160078201548152602001600882015481525050905060608160600151905081604001516001600160a01b0316633d18b9126040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561206d57600080fd5b505af1158015612081573d6000803e3d6000fd5b505050506040513d602081101561209757600080fd5b50600090505b81518110156121865760008282815181106120b457fe5b60200260200101516001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561210857600080fd5b505afa15801561211c573d6000803e3d6000fd5b505050506040513d602081101561213257600080fd5b50519050801561217d57600254835161217d916001600160a01b031690839086908690811061215d57fe5b60200260200101516001600160a01b03166123499092919063ffffffff16565b5060010161209d565b505050600101611f0e565b5050565b60055481565b600360205260009081526040902080546001820154600283015460048401546005850154600686015460078701546008909701546001600160a01b03968716979587169690941694600f9390930b939192909188565b6001600160a01b038216600090815260036020526040812060050154819061221990846124c8565b6001600160a01b0385166000908152600360205260409020600601541091505092915050565b801561229f576001600160a01b03841660009081526003602052604090206005015461226b90846124c8565b6001600160a01b03851660009081526003602052604090206005908101919091555461229790836124c8565b600555612343565b6001600160a01b038416600090815260036020526040902060050154831015612309576001600160a01b0384166000908152600360205260409020600501546122e89084612529565b6001600160a01b038516600090815260036020526040902060050155612326565b6001600160a01b0384166000908152600360205260408120600501555b60055482101561233d576005546122979083612529565b60006005555b50505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1663a9059cbb60e01b178152925182516000946060949389169392918291908083835b602083106123db5780518252601f1990920191602091820191016123bc565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d806000811461243d576040519150601f19603f3d011682016040523d82523d6000602084013e612442565b606091505b5091509150818015612470575080511580612470575080806020019051602081101561246d57600080fd5b50515b6124c1576040805162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c45440000000000000000000000000000000000604482015290519081900360640190fd5b5050505050565b600082820183811015612522576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600061252283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250600081848411156125f55760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125ba5781810151838201526020016125a2565b50505050905090810190601f1680156125e75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b828054828255906000526020600020908101928215612652579160200282015b8281111561265257825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061261d565b5061265e9291506126cc565b5090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001606081526020016000600f0b8152602001600081526020016000815260200160008152602001600081525090565b5b8082111561265e57600081556001016126cd56fea164736f6c6343000705000a";

export class ConvexAllocator__factory extends ContractFactory {
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
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ConvexAllocator> {
    return super.deploy(
      _authority,
      overrides || {}
    ) as Promise<ConvexAllocator>;
  }
  getDeployTransaction(
    _authority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_authority, overrides || {});
  }
  attach(address: string): ConvexAllocator {
    return super.attach(address) as ConvexAllocator;
  }
  connect(signer: Signer): ConvexAllocator__factory {
    return super.connect(signer) as ConvexAllocator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConvexAllocatorInterface {
    return new utils.Interface(_abi) as ConvexAllocatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConvexAllocator {
    return new Contract(address, _abi, signerOrProvider) as ConvexAllocator;
  }
}