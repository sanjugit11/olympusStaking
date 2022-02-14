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

interface NoteKeeperInterface extends ethers.utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "daoReward()": FunctionFragment;
    "getReward()": FunctionFragment;
    "indexesFor(address)": FunctionFragment;
    "notes(address,uint256)": FunctionFragment;
    "pendingFor(address,uint256)": FunctionFragment;
    "pullNote(address,uint256)": FunctionFragment;
    "pushNote(address,uint256)": FunctionFragment;
    "redeem(address,uint256[],bool)": FunctionFragment;
    "redeemAll(address,bool)": FunctionFragment;
    "refReward()": FunctionFragment;
    "rewards(address)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setRewards(uint256,uint256)": FunctionFragment;
    "updateTreasury()": FunctionFragment;
    "whitelist(address)": FunctionFragment;
    "whitelisted(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "daoReward", values?: undefined): string;
  encodeFunctionData(functionFragment: "getReward", values?: undefined): string;
  encodeFunctionData(functionFragment: "indexesFor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "notes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingFor",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pullNote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pushNote",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [string, BigNumberish[], boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "refReward", values?: undefined): string;
  encodeFunctionData(functionFragment: "rewards", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewards",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTreasury",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
  encodeFunctionData(functionFragment: "whitelisted", values: [string]): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "daoReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "indexesFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "notes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pendingFor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pullNote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pushNote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeemAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "refReward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelisted",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<
  [string] & { authority: string }
>;

export class NoteKeeper extends BaseContract {
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

  interface: NoteKeeperInterface;

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    daoReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    indexesFor(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    notes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number] & {
        payout: BigNumber;
        created: number;
        matured: number;
        redeemed: number;
        marketID: number;
      }
    >;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }
    >;

    pullNote(
      _from: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pushNote(
      _to: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAll(
      _user: string,
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    refReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setRewards(
      _toFrontEnd: BigNumberish,
      _toDAO: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelist(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  daoReward(overrides?: CallOverrides): Promise<BigNumber>;

  getReward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  notes(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, number] & {
      payout: BigNumber;
      created: number;
      matured: number;
      redeemed: number;
      marketID: number;
    }
  >;

  pendingFor(
    _user: string,
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }>;

  pullNote(
    _from: string,
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pushNote(
    _to: string,
    _index: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeem(
    _user: string,
    _indexes: BigNumberish[],
    _sendgOHM: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAll(
    _user: string,
    _sendgOHM: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  refReward(overrides?: CallOverrides): Promise<BigNumber>;

  rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setRewards(
    _toFrontEnd: BigNumberish,
    _toDAO: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTreasury(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelist(
    _operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  whitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    daoReward(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(overrides?: CallOverrides): Promise<void>;

    indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    notes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number] & {
        payout: BigNumber;
        created: number;
        matured: number;
        redeemed: number;
        marketID: number;
      }
    >;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { payout_: BigNumber; matured_: boolean }
    >;

    pullNote(
      _from: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pushNote(
      _to: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgOHM: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemAll(
      _user: string,
      _sendgOHM: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    refReward(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setRewards(
      _toFrontEnd: BigNumberish,
      _toDAO: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTreasury(overrides?: CallOverrides): Promise<void>;

    whitelist(_operator: string, overrides?: CallOverrides): Promise<void>;

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<boolean>;
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
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    daoReward(overrides?: CallOverrides): Promise<BigNumber>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    indexesFor(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    notes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pullNote(
      _from: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pushNote(
      _to: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAll(
      _user: string,
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    refReward(overrides?: CallOverrides): Promise<BigNumber>;

    rewards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setRewards(
      _toFrontEnd: BigNumberish,
      _toDAO: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelist(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    whitelisted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    daoReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getReward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    indexesFor(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    notes(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingFor(
      _user: string,
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pullNote(
      _from: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pushNote(
      _to: string,
      _index: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeem(
      _user: string,
      _indexes: BigNumberish[],
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAll(
      _user: string,
      _sendgOHM: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    refReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setRewards(
      _toFrontEnd: BigNumberish,
      _toDAO: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelist(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    whitelisted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
