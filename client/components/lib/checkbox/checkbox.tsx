import { memo, useState, useEffect, forwardRef, PropsWithChildren, Ref } from "react";

import { getCheckBoxSize, getCheckBoxColor } from "./checkbox.style";
import { ICheckBox } from "./checkbox.interface";
import Loading from "components/lib/loading/Loading";
import CheckBoxIcon from "./checkbox-icon";


const CheckBox = forwardRef<HTMLInputElement, PropsWithChildren<ICheckBox>>(({
    width,
    title,
    className,
    color,
    size,
    style,
    loading,
    disabled,
    checked,
    value,
    onChange
}, ref: Ref<HTMLInputElement | null>) => {

    const [selfChecked, setSelfChecked] = useState<boolean>(false);

    const changeHandler = (e, value) => {
        if (disabled) return;
        setSelfChecked(!selfChecked);
        onChange({ checked: e.target.checked, value: value })
    };

    useEffect(() => {
        if (checked === undefined) return;
        setSelfChecked(checked);
    }, [checked]);


    return (
        <>
            <div className={`checkbox-wrapper noselect ${className ? className : ""}`} >

                <label className={`checkbox-label`} style={style}>
                    {!loading && (
                        <CheckBoxIcon
                            iconPosition={getCheckBoxSize(size).iconPosition}
                            disabled={disabled}
                            checked={selfChecked} />
                    )}

                    <input
                        ref={ref}
                        type="checkbox"
                        className="checkbox"
                        checked={selfChecked}
                        disabled={disabled}
                        onChange={(e) => changeHandler(e, value)}
                        value={value}
                    />

                    {loading && (
                        <Loading bgColor="black" padding={getCheckBoxSize(size).padding} />
                    )}

                    <p className="checkbox-title f-size-p6 f-weight-r">{!loading && title}</p>

                </label>
            </div>




            <style jsx>{`

        .checkbox-label {
          opacity: ${disabled || loading ? 0.8 : 1};
          cursor: ${disabled || loading ? "not-allowed" : "pointer"};
          pointerEvents: ${disabled || loading && "none"};
          position: relative;
          border-radius: 10px;
          /* box-shadow:${color ? getCheckBoxColor(color).defaultShadow : "none"}; */
          padding: ${getCheckBoxSize(size).padding};
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          width: ${width && width};
          border: 0.5px solid var(--secondary-dark-grey);
          background:${color ? getCheckBoxColor(color).bg : "none"};
          transition: all .2s ease;
        }

        .checkbox-label :disabled {
            box-shadow:none;
        }
         
        .checkbox-label:hover {
            box-shadow:${color ? getCheckBoxColor(color).hoverShadow : "none"};
        }

        .checkbox {
          opacity: 0;
          outline: none;
          position: absolute;
          width: 0px;
          height: 0px;
          margin: 0px;
          padding: 0px;
          z-index: -1;
          background-color: transparent;
        }

        .checkbox-title {
          color:${color ? "var(--secondary-light-black)" : "var(--primary-white)"};
          margin-left: 6rem;
        }
        
        `}</style>
        </>
    );
}
)



export default memo(CheckBox);
