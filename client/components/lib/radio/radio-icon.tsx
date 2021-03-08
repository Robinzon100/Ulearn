import { FC } from "react";

interface Props {
  disabled?: boolean;
  checked?: boolean;
  iconPosition?: string;
}

const RadioIcon: FC<Props> = ({ disabled, checked, iconPosition }) => {
  return (
    <>
      <div className={`point ${checked ? "active" : ""}`}>

      <style jsx>
          {`
                .point {
                    width: 2rem;
                    height: 2rem;
                    position: absolute;
                    left: 0;
                    margin:${iconPosition};
                    transform: translate(50%, -50%) scale(0.875);
                    top: 50%;
                    border-radius: 50%;
                    transition: all 0.2s ease 0s;
                    border: 1px solid var(--secondary-dark-grey);
                  }
                  .point:before {
                    content: '';
                    position: absolute;
                    left: -1px;
                    top: -1px;
                    transform: scale(0);
                    width: 2rem;
                    height: 2rem;
                    border-radius: 50%;
                    background-color: ${disabled ? "red" : "var(--secondary-darkest-gray)"};
                  }
                  .point.active:before {
                    transform: scale(0.875);
                    transition: all 0.2s ease 0s;
                  }
            `}
        </style>
      </div>
     
    </>
  );
};

export default RadioIcon;
