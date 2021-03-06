/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AlchemixAllocatorInterface extends ethers.utils.Interface {
  functions: {
    "alchemix()": FunctionFragment;
    "alchemixToClaim(uint256)": FunctionFragment;
    "authority()": FunctionFragment;
    "compoundReward(uint256)": FunctionFragment;
    "deposit(uint256,uint256,bool)": FunctionFragment;
    "getRequestedWithdrawalInfo()": FunctionFragment;
    "pool()": FunctionFragment;
    "requestWithdraw(uint256,uint256,bool)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "tALCX()": FunctionFragment;
    "tokemakManager()": FunctionFragment;
    "totalAlchemixDeposited()": FunctionFragment;
    "totaltAlcxDeposited(uint256)": FunctionFragment;
    "treasury()": FunctionFragment;
    "updateTreasury()": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "alchemix", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "alchemixToClaim",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "compoundReward",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getRequestedWithdrawalInfo",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "requestWithdraw",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tALCX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokemakManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAlchemixDeposited",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totaltAlcxDeposited",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(functionFragment: "alchemix", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "alchemixToClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "compoundReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRequestedWithdrawalInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tALCX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokemakManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalAlchemixDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totaltAlcxDeposited",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<
  [string] & { authority: string }
>;

export class AlchemixAllocator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AlchemixAllocatorInterface;

  functions: {
    alchemix(overrides?: CallOverrides): Promise<[string]>;

    alchemixToClaim(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    compoundReward(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      _poolId: BigNumberish,
      _isCompounding: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRequestedWithdrawalInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { cycle: BigNumber; amount: BigNumber }
    >;

    pool(overrides?: CallOverrides): Promise<[string]>;

    requestWithdraw(
      _poolId: BigNumberish,
      _amount: BigNumberish,
      _isEntireFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tALCX(overrides?: CallOverrides): Promise<[string]>;

    tokemakManager(overrides?: CallOverrides): Promise<[string]>;

    totalAlchemixDeposited(overrides?: CallOverrides): Promise<[BigNumber]>;

    totaltAlcxDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  alchemix(overrides?: CallOverrides): Promise<string>;

  alchemixToClaim(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  authority(overrides?: CallOverrides): Promise<string>;

  compoundReward(
    _poolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    _poolId: BigNumberish,
    _isCompounding: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRequestedWithdrawalInfo(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { cycle: BigNumber; amount: BigNumber }>;

  pool(overrides?: CallOverrides): Promise<string>;

  requestWithdraw(
    _poolId: BigNumberish,
    _amount: BigNumberish,
    _isEntireFunds: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tALCX(overrides?: CallOverrides): Promise<string>;

  tokemakManager(overrides?: CallOverrides): Promise<string>;

  totalAlchemixDeposited(overrides?: CallOverrides): Promise<BigNumber>;

  totaltAlcxDeposited(
    _poolId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  treasury(overrides?: CallOverrides): Promise<string>;

  updateTreasury(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    alchemix(overrides?: CallOverrides): Promise<string>;

    alchemixToClaim(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<string>;

    compoundReward(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      _amount: BigNumberish,
      _poolId: BigNumberish,
      _isCompounding: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getRequestedWithdrawalInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { cycle: BigNumber; amount: BigNumber }
    >;

    pool(overrides?: CallOverrides): Promise<string>;

    requestWithdraw(
      _poolId: BigNumberish,
      _amount: BigNumberish,
      _isEntireFunds: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tALCX(overrides?: CallOverrides): Promise<string>;

    tokemakManager(overrides?: CallOverrides): Promise<string>;

    totalAlchemixDeposited(overrides?: CallOverrides): Promise<BigNumber>;

    totaltAlcxDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<string>;

    updateTreasury(overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address)"(
      authority?: string | null
    ): TypedEventFilter<[string], { authority: string }>;

    AuthorityUpdated(
      authority?: string | null
    ): TypedEventFilter<[string], { authority: string }>;
  };

  estimateGas: {
    alchemix(overrides?: CallOverrides): Promise<BigNumber>;

    alchemixToClaim(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    compoundReward(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      _poolId: BigNumberish,
      _isCompounding: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRequestedWithdrawalInfo(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    requestWithdraw(
      _poolId: BigNumberish,
      _amount: BigNumberish,
      _isEntireFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tALCX(overrides?: CallOverrides): Promise<BigNumber>;

    tokemakManager(overrides?: CallOverrides): Promise<BigNumber>;

    totalAlchemixDeposited(overrides?: CallOverrides): Promise<BigNumber>;

    totaltAlcxDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    alchemix(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    alchemixToClaim(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    compoundReward(
      _poolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      _poolId: BigNumberish,
      _isCompounding: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRequestedWithdrawalInfo(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestWithdraw(
      _poolId: BigNumberish,
      _amount: BigNumberish,
      _isEntireFunds: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tALCX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokemakManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalAlchemixDeposited(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totaltAlcxDeposited(
      _poolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
