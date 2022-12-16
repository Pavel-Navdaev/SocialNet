import { connect } from "react-redux";
import Navbar from "./Navbar";
import { setProfile } from "../../redux/profileReducer";

let mapStateToProps = (state) => {
  return { userId: state.auth.id };
};

export const NavbarContainer = connect(mapStateToProps, { setProfile })(Navbar);
