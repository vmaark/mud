import { renderedSolidityHeader } from "@latticexyz/common/codegen";
import { staticAbiTypeToByteLength, staticAbiTypes } from "@latticexyz/schema-type";
import { renderTightCoderEncode } from "./renderFunctions";

/**
 * Renders `EncodeArray` library with the necessary header and imports,
 * which provides methods for encoding arrays of all primitive types into `Slice`
 * @returns string of Solidity code
 */
export function renderEncodeArray() {
  return `
    ${renderedSolidityHeader}
    import { TightCoder } from "./TightCoder.sol";

    /**
     * @title EncodeArray
     * @dev This library provides utilities for encoding arrays into tightly packed bytes representations.
     */
    library EncodeArray {
      ${staticAbiTypes
        .map((staticAbiType) =>
          renderTightCoderEncode({
            internalTypeId: staticAbiType,
            staticByteLength: staticAbiTypeToByteLength[staticAbiType],
          })
        )
        .join("\n")}
      }
  `;
}
