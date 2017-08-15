import React from "react";
import * as ReactNavigation from "react-navigation";
import { connect } from "react-redux";
import TabNavigation from "./TabNavigation";

function ReduxNavigation(props) {
  const { dispatch, nav } = props;
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  });

  return (
    <TabNavigation
      ref={nav => {
        this.navigator = nav;
      }}
      navigation={navigation}
    />
  );
}

const mapStateToProps = state => ({ nav: state.nav });
export default connect(mapStateToProps)(ReduxNavigation);
