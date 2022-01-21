import React from 'react';

export default function index({ rollerCoaster }) {
  return <div>{rollerCoaster.name}</div>;
}

export async function getServerSideProps(context) {

	const response = await fetch(`${process.env.URL}/api/rollercoaster/get?id=${context.query.id}`);
  	const data = await response.json()

	return {
		props: {
			rollerCoaster: data,
			status: response.status
		}
	}
}