import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToggleButtonContainer from './ToggleThemeButton';

const FooterStyled = styled.div`
   background-color: ${({ theme }) => theme.footerBackground};
   border-top: 1px solid ${({ theme }) => theme.footerBorder};
   height: 60px;
   margin-top: auto;
   position: fixed;
   bottom: 30px;
   width: 100%;
   font-size: 11px;
   display: grid;
   grid-template-columns: 1fr 50px;
   z-index: 1;
`;

const FooterItems = styled.div`
   display: flex;
   margin: 12px 0 0 10px;
   align-items: center;
   justify-self: center;
   .footer_item {
      color: ${({ theme }) => theme.textSecondary};
      margin: 0 10px;
      div:first-child {
         text-align: center;
      }
      div:last-child {
         background-color: ${({ theme }) => theme.background2};
         font-weight: 600;
         padding: 3px 8px;
         margin: 0px 5px;
         color: ${({ theme }) => (theme.footerAccentText ? theme.footerAccentText : theme.textPrimary)};
         border-radius: 5px;
         text-align: center;
      }
   }
`;
const Footer = ({ percentLocked, lockedNu, activeStakers, currentPeriod, circulatingSupply, isFooterDataLoading }) => {

   return (
      <FooterStyled>
         <FooterItems>
            <div className="footer_item">
               <div>Total CFP Staked</div>
               <div>{isFooterDataLoading ? '0' : lockedNu}</div>
            </div>
            <div className="footer_item">
               <div>Circulating Supply</div>
               <div>{isFooterDataLoading ? '0' : circulatingSupply} Bn</div>
            </div>
            <div className="footer_item">
               <div>Staking Ratio</div>
               <div>{isFooterDataLoading ? '0' : percentLocked} %</div>
            </div>
            <div className="footer_item">
               <div>Active Stakers</div>
               <div>{isFooterDataLoading ? '0' : activeStakers}</div>
            </div>
         </FooterItems>
         <ToggleButtonContainer />
      </FooterStyled>
   );
};

const mapStateToProps = ({user}) => ({...user.footer, isFooterDataLoading: user.isFooterDataLoading });
export default connect(mapStateToProps)(Footer);
