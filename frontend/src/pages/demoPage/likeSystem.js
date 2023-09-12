export default function LikeSystem(props) {
    const {handleLikeClick} = () => {
        setLike1((prevLike) => {
            if (prevLike === 0) {
                setLike1(1);
                setLikes(likes + 1);
            } else {
                setLike1(0);
                setLikes(likes - 1);
            }
        });
    };
}