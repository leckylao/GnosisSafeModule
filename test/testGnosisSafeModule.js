const { accounts, contract } = require('@openzeppelin/test-environment');
const [ owner ] = accounts;

describe('GnosisSafeModule', function () {
  const Web3 = require('web3');
  const web3 = new Web3();
  const utils = require('@gnosis.pm/safe-contracts/test/utils/general');
  const GnosisSafe = contract.fromArtifact("./GnosisSafe.sol");
  const ProxyFactory = contract.fromArtifact("./GnosisSafeProxyFactory.sol");
  const GnosisSafeModule = contract.fromArtifact("GnosisSafeModule");
});
