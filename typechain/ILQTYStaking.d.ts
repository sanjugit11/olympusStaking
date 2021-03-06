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

interface ILQTYStakingInterface extends ethers.utils.Interface {
  functions: {
    "getPendingETHGain(address)": FunctionFragment;
    "getPendingLUSDGain(address)": FunctionFragment;
    "stake(uint256)": FunctionFragment;
    "unstake(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPendingETHGain",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingLUSDGain",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "stake", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPendingETHGain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingLUSDGain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;

  events: {};
}

export class ILQTYStaking extends BaseContract {
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

  interface: ILQTYStakingInterface;

  functions: {
    getPendingETHGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingLUSDGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    stake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unstake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPendingETHGain(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPendingLUSDGain(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  stake(
    _LQTYamount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unstake(
    _LQTYamount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPendingETHGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingLUSDGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(_LQTYamount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    unstake(
      _LQTYamount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getPendingETHGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingLUSDGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    stake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unstake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPendingETHGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingLUSDGain(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    stake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unstake(
      _LQTYamount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
