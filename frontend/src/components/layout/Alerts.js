import React, { Component, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAlert } from "react-alert";

export function Alerts({ alert }) {
  const error = useSelector((state) => state.errors);
  const messages = useSelector((state) => state.messages);

  useEffect(() => {
    if (error.status) {
        if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
        if (error.msg.price) alert.error(`Price: ${error.msg.price.join()}`);
        if (error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
        if (error.msg.detail) alert.error(`Details: ${error.msg.detail}`);
        
    }
    if(messages.ProductDelete) alert.success(messages.ProductDelete)
    if(messages.ProductAdd) alert.success(messages.ProductAdd)
  });

  return <Fragment />;
}

export default withAlert()(Alerts);

/*export class Alerts extends Component {

    componentDidMount()
    {
        this.props.alert.show("It works");
    }
    render() {
        return (
           <Fragment/>
        )
    }
}

export default withAlert()(Alerts);*/
