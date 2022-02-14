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

interface MetaGovernanceAllocatorInterface extends ethers.utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "stake(bool,uint256)": FunctionFragment;
    "unstake(bool,uint256)": FunctionFragment;
    "updateTreasury()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateTreasury",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateTreasury",
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

export class MetaGovernanceAllocator extends BaseContract {
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

  interface: MetaGovernanceAllocatorInterface;

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    _redacted: boolean,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _redacted: boolean,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateTreasury(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unstake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateTreasury(overrides?: CallOverrides): Promise<void>;
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

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _redacted: boolean,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateTreasury(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
