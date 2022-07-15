import ethereum from '../ethereum';

async function signMessage(message) {
  const signer = ethereum.getSigner();

  const signature = await signer.signMessage(message);
  const result = {
    message,
    signature,
  };

  return result;
}

export default signMessage;
