import "./../styles/Styling.css";
import styles from "./../styles/Styling.module.css";

const Styling = () => {

    let itemStyle1 = {
        backgroundColor:"blue",
        color:"yellow"
    }

    return (
        <>
            <div style={{backgroundColor: "red",color: "white"}}>This is styled using style inline attribute</div>
            <div style={itemStyle1}>This is styled using JSX variable in inline style attrubite</div>
            <div className="itemStyle2">Styled from external css file</div>
            <div id={styles.itemStyle}>Styled from CSS Module</div>
        </>
    )
}

export default Styling;