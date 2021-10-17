import React from "react";
import {
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import { withTranslation } from "react-i18next";


const LanguageDropdown = () => {

  const toggle = () => {
    
  }

  return (
    <>
      <Dropdown  toggle={toggle} className="d-inline-block">
        <DropdownToggle className="btn header-item " tag="button">
        </DropdownToggle>
      </Dropdown>
    </>
  )
}

export default withTranslation()(LanguageDropdown)
