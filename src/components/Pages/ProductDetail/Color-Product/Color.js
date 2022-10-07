import classnames from "classnames/bind";
import styles from "./Color.module.scss";

const cx = classnames.bind(styles);

function Color() {
    return (
        <div className={cx("container")}>
            <div className={cx("color")}>
                <div className={cx("purple")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("light-blue")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("pink")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("red")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("dark-red")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("grey")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("dark-blue")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("white")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("yellow")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("green")}></div>
            </div>
            <div className={cx("color")}>
                <div className={cx("light-yellow")}></div>
            </div>
        </div>
    );
}

export default Color;
