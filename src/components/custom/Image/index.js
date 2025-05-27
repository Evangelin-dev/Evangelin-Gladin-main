import styles from "./styles.module.css";

const CustomImage = ({
  src,
  width = "100vw",
  height = "100vh",
  alt = "Template Image",
  wrapperClss = "",
  imgClass = "",
}) => {
  return (
    <div className={`${styles.img_container} ${wrapperClss}`}>
      <img
        src={src}
        alt={alt}
        className={`d-block w-100 ${imgClass}`}
        style={{ width: width, height: height, objectFit: "cover" }}
      />
    </div>
  );
};

export default CustomImage;
