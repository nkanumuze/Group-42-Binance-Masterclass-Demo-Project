import Web3 from 'web3';
import { Token, tokenFarm } from '../ethereum/instances/instances';
import { hexToBytes } from '../utils/utils';

const DISPATCHER_ADDRESS = '0xaAA229b3B147Fe03eCDc435c6bFC64cc82cD34CE';
const web3 = new Web3(window.ethereum);

export const addNewStake = async (inputAmount) => {
   const account = window.ethereum.selectedAddress
   const amount = web3.utils.toWei(String(inputAmount), 'ether');
   // const hex = web3.utils.numberToHex(inputDuration);
   // const duration = web3.utils.hexToBytes(hex)
   // const duration = hexToBytes(hex);

   try {
      console.log(amount)
      await Token.methods
         .approve(DISPATCHER_ADDRESS, amount)
         .send({ from: account });

      return await tokenFarm.methods
         .stakeToken( amount)
         .send({ from: account });

   } catch (error) {
      console.log(error);
   }
};

export const UnStakeCFP = async () => {
   const account = window.ethereum.selectedAddress
   // const amount = web3.utils.toWei(String(inputAmount), 'ether');
   // const hex = web3.utils.numberToHex(inputDuration);
   // const duration = web3.utils.hexToBytes(hex)
   // const duration = hexToBytes(hex);

   try {
      // console.log(amount)
      return await tokenFarm.methods
         .unstakeToken()
         .send({ from: account });

   } catch (error) {
      console.log(error);
   }
};
