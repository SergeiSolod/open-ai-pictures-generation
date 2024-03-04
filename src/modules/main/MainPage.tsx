import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImg } from "src/modules/main/store/MainAC";
import { setImage, closeMessage } from "src/modules//main/store/MainSlice";
import { RootState } from "src/store/store";
import styles from "./MainPage.module.scss";
import Button from "src/kit/button/Button";
import Input from "src/kit/input/Input";
import Preloader from "src/kit/preloader/Preloader";
import Message from "src/kit/message/Message";

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const main = useSelector((state: RootState) => state.main);

  const closeInfo = () => {
    dispatch(closeMessage());
  };

  return (
    <div>
      <Preloader loading={main.loading} />
      <Message
        show={main.message}
        id="main"
        title={main.infoTitle}
        message={main.infoText}
        isError={main.isError}
        onAccept={closeInfo}
      />
      <div
        className={styles.background}
        style={{ backgroundImage: `url(/assets/img/MainPage.jpg)` }}
      />

      <div className={styles.images}>
        {main.images.map((image, index) => (
          <img
            onClick={() => {
              dispatch(setImage(image));
            }}
            key={index}
            className={styles.img}
            src={image}
          />
        ))}
      </div>

      <div className={styles.block}>
        <div className={styles.elements}>
          <div className={styles.elementInput}>
            <Input
              id="imgText"
              value={text}
              label="Description of the picture"
              length={200}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setText(e);
              }}
            />
          </div>
          <div className={styles.elementButton}>
            <Button
              id="fetchImg"
              onClick={() => {
                if (text.length > 0) dispatch(fetchImg({ text }));
              }}
            >
              Generate
            </Button>
          </div>
        </div>
        {main.image ? (
          <img className={styles.image} src={main.image} />
        ) : (
          <div className={styles.transparent}></div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
