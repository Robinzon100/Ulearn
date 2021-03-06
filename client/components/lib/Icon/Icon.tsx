import * as icons from 'react-feather';



export type IconName = keyof typeof icons;

export type IconProps = {
    name: string;
} & icons.IconProps;

const Icon = ({ name, ...rest }: IconProps) => {
    const IconComponent = icons[name];
    return <IconComponent {...rest} />;
}

export default Icon

