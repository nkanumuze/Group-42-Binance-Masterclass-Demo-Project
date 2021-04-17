import React from 'react';
import { connect } from 'react-redux';

import Stake from './Stake';
import { StakeWrapper } from './Stake';
import { BlueButton, GreyButton } from './Buttons';

import ConfirmationText from './ConfirmationText';
import {addNewStake, UnStakeCFP} from '../../services/stake-service';
import {getDataThunk} from "../../redux/reducers";
import UnStake from "./UnStake";
// const stakeService = new StakeService()

class StakeContainer extends React.Component {
   state = {
      clicked: false,
      confirmBtnLoading: false,
   };

   constructor(props) {
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.confirmationClick = this.confirmationClick.bind(this);
      this.backClick = this.backClick.bind(this);
      this.onUnStateButtonClick = this.onUnStateButtonClick.bind(this);
   }

   async confirmationClick() {
      this.setState({ confirmBtnLoading: true });
      console.log(this.state.confirmBtnLoading);
      
      console.log(await addNewStake(this.props.amount));
      window.location.reload();

      // this.props.handleAmount(this.props.balanceNu);
      this.setState({ confirmBtnLoading: false, clicked: false });
   }

   backClick() {
      this.setState({ clicked: false });
   }

   onButtonClick(e) {
      e.preventDefault();
      this.setState({ clicked: true });
   }

   async onUnStateButtonClick(e) {
      // e.preventDefault();
      this.setState({ confirmBtnLoading: true });
      console.log(await UnStakeCFP(this.props.amount));

      this.props.handleAmount(this.props.balanceNu);

      this.setState({ confirmBtnLoading: false });

   }

   render() {
      const { amount, duration } = this.props;

      let amount_error;
      if (amount >= 1 || amount === null) {
         amount_error = false;
      } else {
         amount_error = true;
      }

      const reg = /^([3-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|36[0-5])$/


      let disable = true;
      if (amount >= 1) {
         disable = false;
      }

      let loading = false;
      if (this.state.confirmBtnLoading === true) {
         loading = true;
      }

      if (this.state.clicked) {
         return (
            <StakeWrapper>
               <h4>Add New Stake</h4>
               <div>
                  <ConfirmationText account={this.props.account} amount={amount} />

                  <div className="button_group_confirm">
                     <BlueButton onClick={this.backClick} text="Back" />
                     <GreyButton onClick={this.confirmationClick } loading={loading} text="Confirm" />

                  </div>
               </div>
            </StakeWrapper>
         );
      }

      return (
          this.props.isStaked ?
              <UnStake
                  amount={this.props.balanceNu}
                  confirmBtnLoading={this.state.confirmBtnLoading}
                  handleAmount={this.props.handleAmount}
                  onUnStateButtonClick={this.onUnStateButtonClick}
              /> :
         <Stake
            balanceNu={this.props.balanceNu}
            amount={amount}
            amount_error={amount_error}
            disable={disable}
            handleAmount={this.props.handleAmount}
            onButtonClick={this.onButtonClick}
         />
      );
   }
}

const mapStateToProps = ({ user }) => ({
   isStaked: user.isStaked,
   balanceNu: user.balanceNu,
   account: user.account,
});

export default connect(mapStateToProps)(StakeContainer);
