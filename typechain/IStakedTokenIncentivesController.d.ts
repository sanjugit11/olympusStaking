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

interface IStakedTokenIncentivesControllerInterface
  extends ethers.utils.Interface {
  functions: {
    "claimRewards(address[],uint256,address)": FunctionFragment;
    "claimRewardsOnBehalf(address[],uint256,address,address)": FunctionFragment;
    "getRewardsBalance(address[],address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string[], BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewardsOnBehalf",
    values: [string[], BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewardsBalance",
    values: [string[], string]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewardsOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRewardsBalance",
    data: BytesLike
  ): Result;

  events: {};
}

export class IStakedTokenIncentivesController extends BaseContract {
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

  interface: IStakedTokenIncentivesControllerInterface;

  functions: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  claimRewards(
    assets: string[],
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewardsOnBehalf(
    assets: string[],
    amount: BigNumberish,
    user: string,
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRewardsBalance(
    assets: string[],
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claimRewards(
      assets: string[],
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewardsOnBehalf(
      assets: string[],
      amount: BigNumberish,
      user: string,
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRewardsBalance(
      assets: string[],
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
