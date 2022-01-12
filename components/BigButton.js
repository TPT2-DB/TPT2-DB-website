import React from 'react'

export default function BigButton(props) {
	return (
		<div>
			<button {...props} className="font-bold block py-4 px-6 bg-green-400 text-xl">{props.children}</button>
		</div>
	)
}
