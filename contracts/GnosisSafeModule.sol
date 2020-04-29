pragma solidity >=0.5.3 <0.6.0;

import "@gnosis.pm/safe-contracts/contracts/base/Module.sol";
// Required for triggering execution
import "@gnosis.pm/safe-contracts/contracts/common/Enum.sol";

contract GnosisSafeModule is Module {

  string public constant NAME = "Recovery Module";
  string public constant VERSION = "0.1.0";

}
