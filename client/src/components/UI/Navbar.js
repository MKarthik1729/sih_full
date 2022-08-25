import React, { useState } from "react";
import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarExtendedContainer,
	NavbarInnerContainer,
	NavbarLinkContainer,
	NavbarLink,
	OpenLinksButton,
	NavbarLinkExtended,
} from "./NavbarStyle";

function Navbar(props) {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to= {`/${props.user === 'User' ? 'user' : 'admin'}/dashboard`}> Home</NavbarLink>
						{props.user === "User" && (
							<NavbarLink to="/user/request"> New Application</NavbarLink>
						)}
						{props.user === 'User' && (
							<NavbarLink to="/user/all_applications"> Show All Applications</NavbarLink>
						)}
						{props.user === "Admin" ? (
							<NavbarLink to="/admin/all_applications	"> Show All Applications</NavbarLink>
						) : (
							<NavbarLink to="/user/application_status"> Show An Application Status</NavbarLink>
						)}

						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
                {props.user === "Admin" ? (
							<NavbarLink to="/admin/login"> Logout</NavbarLink>
						) : (
							<NavbarLink to="/user/login"> Logout</NavbarLink>
						)}
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/products">
						{" "}
						Products
					</NavbarLinkExtended>
					<NavbarLinkExtended to="/contact">
						{" "}
						Contact Us
					</NavbarLinkExtended>
					<NavbarLinkExtended to="/about">
						{" "}
						About Us
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
}

export default Navbar;
