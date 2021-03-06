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

interface AaveAllocatorInterface extends ethers.utils.Interface {
  functions: {
    "aTokenInfo(address)": FunctionFragment;
    "aTokens(uint256)": FunctionFragment;
    "addToken(address,address,uint256)": FunctionFragment;
    "authority()": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "exceedsLimit(address,uint256)": FunctionFragment;
    "harvest()": FunctionFragment;
    "harvestFor(address[])": FunctionFragment;
    "lowerLimit(address,uint256)": FunctionFragment;
    "queueRaiseLimit(address,uint256)": FunctionFragment;
    "raiseLimit(address)": FunctionFragment;
    "referralCode()": FunctionFragment;
    "rewardsPending()": FunctionFragment;
    "rewardsPendingFor(address[])": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setReferralCode(uint16)": FunctionFragment;
    "timelockInBlocks()": FunctionFragment;
    "totalValueDeployed()": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "aTokenInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "aTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToken",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exceedsLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "harvest", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "harvestFor",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "lowerLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "queueRaiseLimit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "raiseLimit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "referralCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsPendingFor",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setReferralCode",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "timelockInBlocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalValueDeployed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "aTokenInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "aTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exceedsLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "harvest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "harvestFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lowerLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queueRaiseLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "raiseLimit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "referralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsPendingFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReferralCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "timelockInBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalValueDeployed",
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

export class AaveAllocator extends BaseContract {
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

  interface: AaveAllocatorInterface;

  functions: {
    aTokenInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        aToken: string;
        deployed: BigNumber;
        limit: BigNumber;
        newLimit: BigNumber;
        limitChangeTimelockEnd: BigNumber;
      }
    >;

    aTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    addToken(
      token: string,
      aToken: string,
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exceedsLimit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    harvestFor(
      _aTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lowerLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queueRaiseLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    raiseLimit(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    referralCode(overrides?: CallOverrides): Promise<[number]>;

    rewardsPending(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardsPendingFor(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setReferralCode(
      code: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    timelockInBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalValueDeployed(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  aTokenInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      underlying: string;
      aToken: string;
      deployed: BigNumber;
      limit: BigNumber;
      newLimit: BigNumber;
      limitChangeTimelockEnd: BigNumber;
    }
  >;

  aTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  addToken(
    token: string,
    aToken: string,
    max: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authority(overrides?: CallOverrides): Promise<string>;

  deposit(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exceedsLimit(
    token: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  harvest(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  harvestFor(
    _aTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lowerLimit(
    token: string,
    newMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queueRaiseLimit(
    token: string,
    newMax: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  raiseLimit(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  referralCode(overrides?: CallOverrides): Promise<number>;

  rewardsPending(overrides?: CallOverrides): Promise<BigNumber>;

  rewardsPendingFor(
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setReferralCode(
    code: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  timelockInBlocks(overrides?: CallOverrides): Promise<BigNumber>;

  totalValueDeployed(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    aTokenInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        aToken: string;
        deployed: BigNumber;
        limit: BigNumber;
        newLimit: BigNumber;
        limitChangeTimelockEnd: BigNumber;
      }
    >;

    aTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    addToken(
      token: string,
      aToken: string,
      max: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    authority(overrides?: CallOverrides): Promise<string>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exceedsLimit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    harvest(overrides?: CallOverrides): Promise<void>;

    harvestFor(_aTokens: string[], overrides?: CallOverrides): Promise<void>;

    lowerLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    queueRaiseLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    raiseLimit(token: string, overrides?: CallOverrides): Promise<void>;

    referralCode(overrides?: CallOverrides): Promise<number>;

    rewardsPending(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPendingFor(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setReferralCode(
      code: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    timelockInBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    totalValueDeployed(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
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
    aTokenInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    aTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    addToken(
      token: string,
      aToken: string,
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exceedsLimit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    harvestFor(
      _aTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lowerLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queueRaiseLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    raiseLimit(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    referralCode(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPending(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsPendingFor(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setReferralCode(
      code: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    timelockInBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    totalValueDeployed(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    aTokenInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    aTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addToken(
      token: string,
      aToken: string,
      max: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exceedsLimit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    harvestFor(
      _aTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lowerLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queueRaiseLimit(
      token: string,
      newMax: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    raiseLimit(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    referralCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsPending(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsPendingFor(
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setReferralCode(
      code: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    timelockInBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalValueDeployed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
