import classnames from "classnames/bind";
import styles from "./ContactMap.module.scss";

const cx = classnames.bind(styles);

function ContactMap() {
    return (
        <div className={cx("flex justify-center items-center")}>
            <iframe
                title="pingocraft"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.5226476651086!2d106.6708938563342!3d10.880714177653669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d707adfca6b5%3A0x9c8289335a38af94!2sPingo%20Craft%20Vi%E1%BB%87t%20Nam!5e0!3m2!1svi!2s!4v1665479888702!5m2!1svi!2s"
                width="90%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={cx('my-[3rem]')}
            ></iframe>
        </div>
    );
}

export default ContactMap;
