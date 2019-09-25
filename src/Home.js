import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AppActions } from './redux/actions';


const Home = (props) => {
  const { state, actions } = props;


  console.log('state',state, 'actions', actions);

  return (
    <div>
      Home
    </div>
  )
}



/**
 * Export with style and redux
 */
export default connect(
  (state) => ({ state }),
  (dispatch) => ({
    actions: bindActionCreators(AppActions, dispatch)
  })
)(Home);