import { React } from 'react';

export default function Item(props){
  return(
	<div className={`${props.h ? `${props.h}` : "h-10"}
	  		${props.w ? `${props.w}` : "w-36"}
			${props.ml ? `${props.ml}` : "ml-2"}
			${props.r ? `${props.r}` : "rounded"}
			${props.mb ? `${props.mb}` : null}
			${props.bg ? `${props.bg}` : null}
			${props.hvs ? `${props.hvs}` : null}
			${props.hbc ? `${props.hbc}` : null}
			cursor-pointer items-center flex justify-start subpixel-antialiased
			font-serif font-medium pl-2 hover:bg-gray-200`}>
	  <p>{props.title}</p>

	</div>
  )
}
