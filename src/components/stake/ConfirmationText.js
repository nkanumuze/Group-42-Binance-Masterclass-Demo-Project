import React from 'react';
import BigNumber from 'bignumber.js';
import styled from 'styled-components';
// import {dark} from '../../themes/theme'

const ContainerScrollable = styled.div`
   display: grid;
   grid-template-rows: 45vh;
   grid-template-columns: minmax(200px, 600px);
   margin: 0 10px;
   p {
      letter-spacing: 0.2px;
      margin: 20px 0;
      line-height: 2rem;
   }
   span {
      display: block;
      line-height: 2rem;
   }
   b {
      color: ${({ theme }) => theme.textPrimary};
      font-weight: 500;
   }
   .scrollable {
      border-radius: 5px;
      padding-right: 30px;
      padding-left: 20px;
      border: 1px solid #333;
      font-size: 14px;
      overflow-y: scroll;
      scrollbar-color: #444 #111;
      scrollbar-width: auto;
      margin-bottom: 20px;
      border: 1px solid ${({ theme }) => theme.footerBorder};
      color: ${({ theme }) => theme.textSecondary};
      background-color: ${({ theme }) => (theme.darkMode ? '#22232a' : theme.addressBackground)};
      &::-webkit-scrollbar-track {
         background: ${({ theme }) => theme.footerBorder};
      }
      &::-webkit-scrollbar-thumb {
         background: ${({ theme }) => theme.background4};
         /* border-radius: 6px; */
      }
   }
`;

const ConfirmationText = props => {
   const x = new BigNumber(props.amount);
   const y = x.multipliedBy(10 ** 18).toFixed();

   return (
      <ContainerScrollable>
         <div className="scrollable">
            <p>
               Staking address: <b>{props.account}</b>
            </p>
            <span>
               ~ Value: <b>{props.amount}</b> CFP ({y} CFPbits)
            </span>
            <p>
               You will be getting equivalent SWT tokens as incentives for these staking.
            </p>
            <p>
               By confirming, you are agreeing to stake <b>{props.amount}</b> CFP ({y} CFPbits) for equivalent SWT incentives.
            </p>

         </div>
      </ContainerScrollable>
   );
};
export default ConfirmationText;
