import Card from "react-bootstrap/Card";

import React from "react";

const CardHolder = (props) => {
	return (
		// <div
		// 	style={{
		// 		padding: 20,
		// 		alignItems: "center",
		// 		display: "flex",
		// 		justifyContent: "center",
		// 	}}>
			<Card style={{ width: "18rem", margin: 20, padding: 30 }}>
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Card Subtitle
					</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</Card.Text>
					<Card.Link href="#">Card Link</Card.Link>
					<Card.Link href="#" style={{ marginLeft: 12 }}>
						Another Link
					</Card.Link>
				</Card.Body>
			</Card>
		// </div>
	);
};

export default CardHolder;
