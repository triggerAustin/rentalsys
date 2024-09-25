import { React } from 'react';

export default function Item(props){
  return(
	<div className={`cursor-pointer items-center flex justify-start subpixel-antialiased
                        font-medium pl-2 transition-all duration-300
			${props.h ? `${props.h}` : "h-10"}
	  		${props.w ? `${props.w}` : "w-36"}
			${props.ml ? `${props.ml}` : "ml-2"}
			${props.r ? `${props.r}` : "rounded"}
			${props.mb ? `${props.mb}` : ''}
			${props.bg ? `${props.bg}` : ''}
			${props.hvs ? `${props.hvs}` : ''}
			${props.txtc ? `${props.txtc}` : ''}
			${props.txtw ? `${props.txtw}` : ''}
			${props.isActive ? 'bg-green-custom text-white' : 'bg-transparent text-black hover:bg-gray-200'}`}
	  		onClick={props.onclick}>
	  {props.icon && <props.icon className='mr-2'/>}
	  <p className={`transition-all duration-500 ${props.displayP}`}>{props.title}</p>

	</div>
  )
}
