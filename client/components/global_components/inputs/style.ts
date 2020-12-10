
import { InputSizeGroup,InputStateGroup } from './Input.interface';
import { NormalSizes,Colors } from './prop-type';



export const getInputSize = (size:string): InputSizeGroup => {


    const sizes: { [key in NormalSizes]: InputSizeGroup } = {
        
        mini: {
            padding: '1rem 1rem 1rem 4rem',
            fontSize: '.75rem',
            focusedPadding:'1rem 1rem 1rem 4.5rem',
          },
          small: {
            padding: '1rem 1rem 1rem 4rem',
            fontSize: '.75rem',
            focusedPadding:'1rem 1rem 1rem 4.5rem',
          },
          medium: {
            padding: '1rem 1rem 1rem 4rem',
            fontSize: '.875rem',
            focusedPadding:'1rem 1rem 1rem 4.5rem',
          },
          large: {
            padding: '1rem 1rem 1rem 4rem',
            fontSize: '1rem',
            focusedPadding:'1rem 1rem 1rem 4.5rem',
        },
    }

    if (!size) return sizes.medium
    return sizes[size]
}


export const getColors = (status:string): InputStateGroup => {

    const colors: { [key in Colors]: InputStateGroup } = {
        default: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:'none',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            focusedBg:'var(--white)',
            disabled:'var(--primary-grey)',
            focusedIcon:"opacity:100%"
        },
        primary: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:'0.9px solid var(--primary-blue)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
         },
        blue: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:'0.9px solid var(--primary-blue)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
        },
        yellow: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:'0.9px solid var(--primary-yellow)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
        },
        green: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:'0.9px solid var(--primary-green)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
        },
        red: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-red)',
            borderColor:'0.9px solid var(--primary-red)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
        },
        black: {
            defaultBg:'var(--secondary-lightGrey)',
            textColor:'var(--primary-dark)',
            borderColor:' 0.9px solidvar(--primary-dark)',
            hoverBg:'var(--primary-grey)',
            focusedShadow:'var(--text-input-shadow)',
            disabled:'var(--primary-grey)',
            focusedBg:'var(--white)',
            focusedIcon:"opacity:100%"
        }
    }

  
    if (!status) return colors.default
    return colors[status]
  }



