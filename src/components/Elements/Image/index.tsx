import NoImage from 'assets/images/noImage.png';

const Image = ({ ...rest }) => {
    return (
        <img
            {...rest}
            loading="lazy"
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = NoImage;
            }}
        />
    );
};

export default Image;
