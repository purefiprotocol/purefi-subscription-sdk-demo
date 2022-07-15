import { ethers } from 'ethers';

function verifyMessage(message, signature) {
  const signerAddress = ethers.utils.verifyMessage(message, signature);
  return signerAddress;
}

export default verifyMessage;
