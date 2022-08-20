import React from "react";

const MainHeading = () => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<h1
				style={{
					fontFamily: "Helvetica",
				}}>
				Welcome to{" "}
				<span
					style={{
						fontSize: 35,
					}}>
					<b>Khelo India</b>
				</span>
			</h1>
		</div>
	);
};

export default MainHeading;
