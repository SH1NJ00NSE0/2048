import React, { useState } from "react";
import styled from "styled-components";
// import '../Block/Block.css'

export default function block({ value }) {
	return (
		<>
			<Blocks num={value}>
				<Number color={value}>{value}</Number>
			</Blocks>
		</>
	);
}

const brown100 = "#FAF8EF";
const brown200 = "#CDC0B4";
const brown300 = "#BBADA1";
const brown400 = "#7A7168";

const block2 = "#EEE6DB";
const block4 = "#ECE0C8";
const block8 = "#EFB27C";
const block16 = "#F49669";
const block32 = "#F37D63";
const block64 = "#F46042";
const block128 = "#E74A2A";
const block256 = "#F2D67A";
const block512 = "#F9CE4B";
const block1024 = "#F6BC0B";
const block2048 = "#E5B318";

const Blocks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90px;
	height: 90px;
	border-radius: 5px;
	background-color: ${props =>
		props.num == 2
			? block2
			: props.num == 4
			? block4
			: props.num == 8
			? block8
			: props.num == 16
			? block16
			: props.num == 32
			? block32
			: props.num == 64
			? block64
			: props.num == 128
			? block128
			: props.num == 256
			? block256
			: props.num == 512
			? block512
			: props.num == 1024
			? block1024
			: props.num == 2048
			? block2048
			: brown200};
`;

const Number = styled.p`
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-ms-user-select: none; /* 인터넷익스플로러 */
	user-select: none;
	font-size: ${props =>
		props.color < 10
			? "58px"
			: props.color < 100
			? "52px"
			: props.color < 1000
			? "42px"
			: "32px"};
	font-weight: 600;
	line-height: 100%;
	letter-spacing: -0.03em;
	color: ${props =>
		props.color == 2 || props.color == 4
			? brown400
			: brown100};
`;
