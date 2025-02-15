// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

/* Autogenerated file. Do not edit manually. */

import { IBaseWorld } from "@latticexyz/world/src/codegen/interfaces/IBaseWorld.sol";

import { IChatSystem } from "./IChatSystem.sol";
import { IIncrementSystem } from "./IIncrementSystem.sol";
import { IInventorySystem } from "./IInventorySystem.sol";
import { IStructSystem } from "./IStructSystem.sol";

/**
 * @title IWorld
 * @notice This interface integrates all systems and associated function selectors
 * that are dynamically registered in the World during deployment.
 * @dev This is an autogenerated file; do not edit manually.
 */
interface IWorld is IBaseWorld, IChatSystem, IIncrementSystem, IInventorySystem, IStructSystem {

}
