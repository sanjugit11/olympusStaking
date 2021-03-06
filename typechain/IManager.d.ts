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

interface IManagerInterface extends ethers.utils.Interface {
  functions: {
    "completeRollover(string)": FunctionFragment;
    "cycleRewardsHashes(uint256)": FunctionFragment;
    "executeMaintenance((tuple[]))": FunctionFragment;
    "executeRollover((tuple[],tuple[],address[],bool,string))": FunctionFragment;
    "getControllers()": FunctionFragment;
    "getCurrentCycle()": FunctionFragment;
    "getCurrentCycleIndex()": FunctionFragment;
    "getCycleDuration()": FunctionFragment;
    "getPools()": FunctionFragment;
    "getRolloverStatus()": FunctionFragment;
    "registerController(bytes32,address)": FunctionFragment;
    "registerPool(address)": FunctionFragment;
    "setCycleDuration(uint256)": FunctionFragment;
    "setDestinations(address,address)": FunctionFragment;
    "setEventSend(bool)": FunctionFragment;
    "startCycleRollover()": FunctionFragment;
    "unRegisterController(bytes32)": FunctionFragment;
    "unRegisterPool(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "completeRollover",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cycleRewardsHashes",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeMaintenance",
    values: [{ cycleSteps: { controllerId: BytesLike; data: BytesLike }[] }]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRollover",
    values: [
      {
        poolData: { pool: string; amount: BigNumberish }[];
        cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
        poolsForWithdraw: string[];
        complete: boolean;
        rewardsIpfsHash: string;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getControllers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentCycle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentCycleIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCycleDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPools", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRolloverStatus",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerController",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCycleDuration",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDestinations",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setEventSend",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "startCycleRollover",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unRegisterController",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unRegisterPool",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "completeRollover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cycleRewardsHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeMaintenance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRollover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getControllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentCycle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentCycleIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCycleDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPools", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRolloverStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCycleDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDestinations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEventSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startCycleRollover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unRegisterController",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unRegisterPool",
    data: BytesLike
  ): Result;

  events: {
    "ControllerRegistered(bytes32,address)": EventFragment;
    "ControllerUnregistered(bytes32,address)": EventFragment;
    "CycleDurationSet(uint256)": EventFragment;
    "CycleRolloverComplete(uint256)": EventFragment;
    "CycleRolloverStarted(uint256)": EventFragment;
    "DeploymentStepExecuted(bytes32,address,bytes)": EventFragment;
    "DestinationsSet(address,address)": EventFragment;
    "EventSendSet(bool)": EventFragment;
    "LiquidityMovedToManager(address,uint256)": EventFragment;
    "LiquidityMovedToPool(address,uint256)": EventFragment;
    "PoolRegistered(address)": EventFragment;
    "PoolUnregistered(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ControllerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ControllerUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CycleDurationSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CycleRolloverComplete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CycleRolloverStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeploymentStepExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DestinationsSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EventSendSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityMovedToManager"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityMovedToPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolUnregistered"): EventFragment;
}

export type ControllerRegisteredEvent = TypedEvent<
  [string, string] & { id: string; controller: string }
>;

export type ControllerUnregisteredEvent = TypedEvent<
  [string, string] & { id: string; controller: string }
>;

export type CycleDurationSetEvent = TypedEvent<
  [BigNumber] & { duration: BigNumber }
>;

export type CycleRolloverCompleteEvent = TypedEvent<
  [BigNumber] & { blockNumber: BigNumber }
>;

export type CycleRolloverStartedEvent = TypedEvent<
  [BigNumber] & { blockNumber: BigNumber }
>;

export type DeploymentStepExecutedEvent = TypedEvent<
  [string, string, string] & {
    controller: string;
    adapaterAddress: string;
    data: string;
  }
>;

export type DestinationsSetEvent = TypedEvent<
  [string, string] & { destinationOnL1: string; destinationOnL2: string }
>;

export type EventSendSetEvent = TypedEvent<
  [boolean] & { eventSendSet: boolean }
>;

export type LiquidityMovedToManagerEvent = TypedEvent<
  [string, BigNumber] & { pool: string; amount: BigNumber }
>;

export type LiquidityMovedToPoolEvent = TypedEvent<
  [string, BigNumber] & { pool: string; amount: BigNumber }
>;

export type PoolRegisteredEvent = TypedEvent<[string] & { pool: string }>;

export type PoolUnregisteredEvent = TypedEvent<[string] & { pool: string }>;

export class IManager extends BaseContract {
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

  interface: IManagerInterface;

  functions: {
    completeRollover(
      rewardsIpfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cycleRewardsHashes(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    executeMaintenance(
      params: { cycleSteps: { controllerId: BytesLike; data: BytesLike }[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeRollover(
      params: {
        poolData: { pool: string; amount: BigNumberish }[];
        cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
        poolsForWithdraw: string[];
        complete: boolean;
        rewardsIpfsHash: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getControllers(overrides?: CallOverrides): Promise<[string[]]>;

    getCurrentCycle(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<[BigNumber]>;

    getCycleDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPools(overrides?: CallOverrides): Promise<[string[]]>;

    getRolloverStatus(overrides?: CallOverrides): Promise<[boolean]>;

    registerController(
      id: BytesLike,
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCycleDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDestinations(
      destinationOnL1: string,
      destinationOnL2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setEventSend(
      eventSendSet: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startCycleRollover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unRegisterController(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unRegisterPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  completeRollover(
    rewardsIpfsHash: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cycleRewardsHashes(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  executeMaintenance(
    params: { cycleSteps: { controllerId: BytesLike; data: BytesLike }[] },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeRollover(
    params: {
      poolData: { pool: string; amount: BigNumberish }[];
      cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
      poolsForWithdraw: string[];
      complete: boolean;
      rewardsIpfsHash: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getControllers(overrides?: CallOverrides): Promise<string[]>;

  getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

  getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;

  getPools(overrides?: CallOverrides): Promise<string[]>;

  getRolloverStatus(overrides?: CallOverrides): Promise<boolean>;

  registerController(
    id: BytesLike,
    controller: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerPool(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCycleDuration(
    duration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDestinations(
    destinationOnL1: string,
    destinationOnL2: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setEventSend(
    eventSendSet: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startCycleRollover(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unRegisterController(
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unRegisterPool(
    pool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    completeRollover(
      rewardsIpfsHash: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cycleRewardsHashes(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    executeMaintenance(
      params: { cycleSteps: { controllerId: BytesLike; data: BytesLike }[] },
      overrides?: CallOverrides
    ): Promise<void>;

    executeRollover(
      params: {
        poolData: { pool: string; amount: BigNumberish }[];
        cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
        poolsForWithdraw: string[];
        complete: boolean;
        rewardsIpfsHash: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    getControllers(overrides?: CallOverrides): Promise<string[]>;

    getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getPools(overrides?: CallOverrides): Promise<string[]>;

    getRolloverStatus(overrides?: CallOverrides): Promise<boolean>;

    registerController(
      id: BytesLike,
      controller: string,
      overrides?: CallOverrides
    ): Promise<void>;

    registerPool(pool: string, overrides?: CallOverrides): Promise<void>;

    setCycleDuration(
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDestinations(
      destinationOnL1: string,
      destinationOnL2: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setEventSend(
      eventSendSet: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    startCycleRollover(overrides?: CallOverrides): Promise<void>;

    unRegisterController(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unRegisterPool(pool: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "ControllerRegistered(bytes32,address)"(
      id?: null,
      controller?: null
    ): TypedEventFilter<[string, string], { id: string; controller: string }>;

    ControllerRegistered(
      id?: null,
      controller?: null
    ): TypedEventFilter<[string, string], { id: string; controller: string }>;

    "ControllerUnregistered(bytes32,address)"(
      id?: null,
      controller?: null
    ): TypedEventFilter<[string, string], { id: string; controller: string }>;

    ControllerUnregistered(
      id?: null,
      controller?: null
    ): TypedEventFilter<[string, string], { id: string; controller: string }>;

    "CycleDurationSet(uint256)"(
      duration?: null
    ): TypedEventFilter<[BigNumber], { duration: BigNumber }>;

    CycleDurationSet(
      duration?: null
    ): TypedEventFilter<[BigNumber], { duration: BigNumber }>;

    "CycleRolloverComplete(uint256)"(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    CycleRolloverComplete(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    "CycleRolloverStarted(uint256)"(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    CycleRolloverStarted(
      blockNumber?: null
    ): TypedEventFilter<[BigNumber], { blockNumber: BigNumber }>;

    "DeploymentStepExecuted(bytes32,address,bytes)"(
      controller?: null,
      adapaterAddress?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { controller: string; adapaterAddress: string; data: string }
    >;

    DeploymentStepExecuted(
      controller?: null,
      adapaterAddress?: null,
      data?: null
    ): TypedEventFilter<
      [string, string, string],
      { controller: string; adapaterAddress: string; data: string }
    >;

    "DestinationsSet(address,address)"(
      destinationOnL1?: null,
      destinationOnL2?: null
    ): TypedEventFilter<
      [string, string],
      { destinationOnL1: string; destinationOnL2: string }
    >;

    DestinationsSet(
      destinationOnL1?: null,
      destinationOnL2?: null
    ): TypedEventFilter<
      [string, string],
      { destinationOnL1: string; destinationOnL2: string }
    >;

    "EventSendSet(bool)"(
      eventSendSet?: null
    ): TypedEventFilter<[boolean], { eventSendSet: boolean }>;

    EventSendSet(
      eventSendSet?: null
    ): TypedEventFilter<[boolean], { eventSendSet: boolean }>;

    "LiquidityMovedToManager(address,uint256)"(
      pool?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pool: string; amount: BigNumber }
    >;

    LiquidityMovedToManager(
      pool?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pool: string; amount: BigNumber }
    >;

    "LiquidityMovedToPool(address,uint256)"(
      pool?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pool: string; amount: BigNumber }
    >;

    LiquidityMovedToPool(
      pool?: null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pool: string; amount: BigNumber }
    >;

    "PoolRegistered(address)"(
      pool?: null
    ): TypedEventFilter<[string], { pool: string }>;

    PoolRegistered(pool?: null): TypedEventFilter<[string], { pool: string }>;

    "PoolUnregistered(address)"(
      pool?: null
    ): TypedEventFilter<[string], { pool: string }>;

    PoolUnregistered(pool?: null): TypedEventFilter<[string], { pool: string }>;
  };

  estimateGas: {
    completeRollover(
      rewardsIpfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cycleRewardsHashes(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    executeMaintenance(
      params: { cycleSteps: { controllerId: BytesLike; data: BytesLike }[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeRollover(
      params: {
        poolData: { pool: string; amount: BigNumberish }[];
        cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
        poolsForWithdraw: string[];
        complete: boolean;
        rewardsIpfsHash: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getControllers(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentCycle(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentCycleIndex(overrides?: CallOverrides): Promise<BigNumber>;

    getCycleDuration(overrides?: CallOverrides): Promise<BigNumber>;

    getPools(overrides?: CallOverrides): Promise<BigNumber>;

    getRolloverStatus(overrides?: CallOverrides): Promise<BigNumber>;

    registerController(
      id: BytesLike,
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCycleDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDestinations(
      destinationOnL1: string,
      destinationOnL2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setEventSend(
      eventSendSet: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startCycleRollover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unRegisterController(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unRegisterPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    completeRollover(
      rewardsIpfsHash: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cycleRewardsHashes(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeMaintenance(
      params: { cycleSteps: { controllerId: BytesLike; data: BytesLike }[] },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeRollover(
      params: {
        poolData: { pool: string; amount: BigNumberish }[];
        cycleSteps: { controllerId: BytesLike; data: BytesLike }[];
        poolsForWithdraw: string[];
        complete: boolean;
        rewardsIpfsHash: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getControllers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentCycle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentCycleIndex(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCycleDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPools(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRolloverStatus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerController(
      id: BytesLike,
      controller: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCycleDuration(
      duration: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDestinations(
      destinationOnL1: string,
      destinationOnL2: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setEventSend(
      eventSendSet: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startCycleRollover(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unRegisterController(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unRegisterPool(
      pool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
